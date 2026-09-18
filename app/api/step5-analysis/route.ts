import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';
import os from 'path'; // Need to be careful here

// Define types
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const { githubUrl, projectPath } = body;

    if (!githubUrl || !projectPath) {
      return NextResponse.json(
        { error: 'githubUrl and projectPath are required.' },
        { status: 400 }
      );
    }

    // Resolve path to the python script
    const aiModelDir = path.resolve(process.cwd(), 'ai_model');
    const pythonScript = path.join(aiModelDir, 'src', 'step5_analyzer.py');
    const pythonExec = process.platform === 'win32' ? 'python' : 'python3';

    // Execute using spawn to avoid shell injection
    return new Promise<Response>((resolve) => {
      const child = spawn(pythonExec, [
        pythonScript,
        '--github-url', githubUrl,
        '--project-path', projectPath
      ]);

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code !== 0) {
          console.error(`Python script exited with code ${code}`);
          console.error(`Stderr: ${stderr}`);
          // Don't expose internal errors directly
          resolve(NextResponse.json({
            error: 'AI analysis temporarily unavailable'
          }, { status: 500 }));
          return;
        }

        try {
          // Look for JSON in the stdout. The python script prints JSON at the end.
          const jsonMatch = stdout.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
             const result = JSON.parse(jsonMatch[0]);
             resolve(NextResponse.json(result));
          } else {
             console.error("No valid JSON found in python stdout", stdout);
             resolve(NextResponse.json({
               error: 'Project analysis unavailable'
             }, { status: 500 }));
          }
        } catch (e) {
          console.error("Failed to parse python JSON output:", e);
          resolve(NextResponse.json({
            error: 'AI analysis temporarily unavailable'
          }, { status: 500 }));
        }
      });
      
      // Safety timeout of 4 minutes
      setTimeout(() => {
         child.kill();
         resolve(NextResponse.json({
           error: 'AI analysis temporarily unavailable due to timeout'
         }, { status: 504 }));
      }, 240000);
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
