import Sidebar from '@/components/Sidebar';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function MyProjectsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let projects: any[] = [];
  if (user) {
    const { data } = await supabase
      .from('project_submissions')
      .select('*')
      .eq('student_id', user.id)
      .order('submission_timestamp', { ascending: false });
    projects = data || [];
  }

  return (
    <main className="w-full bg-surface min-h-screen pb-24">
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-10 space-y-8">
            
            {/* Header */}
            <div>
              <h1 className="font-display text-[32px] font-extrabold text-on-surface tracking-tight">
                My Projects
              </h1>
              <p className="text-on-surface-variant text-[15px] mt-1">
                View all your submitted and finished projects here.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.length === 0 ? (
                <div className="col-span-full p-10 border-2 border-dashed border-outline/30 rounded-2xl bg-surface-container/50 text-center flex flex-col items-center justify-center min-h-[250px]">
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-on-surface-variant text-[24px]">folder_off</span>
                  </div>
                  <h3 className="text-on-surface text-[18px] font-bold mb-2">No projects found</h3>
                  <p className="text-on-surface-muted text-[14px] mb-6 max-w-sm">
                    You haven't submitted any projects yet. Start by submitting your first project to verify your skills.
                  </p>
                  <Link 
                    href="/projects/submit" 
                    className="px-6 py-2.5 rounded-full bg-on-surface text-surface text-[14px] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Submit a Project
                  </Link>
                </div>
              ) : (
                projects.map((project: any) => (
                  <div key={project.id} className="p-6 border border-outline/30 rounded-2xl bg-surface-container-high hover:border-outline/50 transition-colors flex flex-col h-full group">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-[18px] text-on-surface group-hover:text-step-4 transition-colors">
                        {project.repo_url.split('/').pop() || 'Project'}
                      </h3>
                      <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-on-surface-muted hover:text-on-surface" aria-label="View Repository">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                    <p className="text-on-surface-muted text-[14px] mb-6 flex-1 line-clamp-3">
                      {project.description || 'No description provided.'}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                        project.status === 'verified' || project.status === 'ai_reviewed' 
                          ? 'bg-success/10 text-success' 
                          : project.status === 'flagged' 
                          ? 'bg-error/10 text-error' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {project.status.replace('_', ' ')}
                      </span>
                      {project.domain && (
                        <span className="text-[12px] font-medium text-on-surface-variant bg-surface-dim px-2.5 py-1 rounded-md">
                          {project.domain}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
