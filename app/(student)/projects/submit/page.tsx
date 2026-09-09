import { submitProject } from '@/app/actions/project';
import Link from 'next/link';

export default function SubmitProjectPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Submit Your Project</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <form action={submitProject} className="space-y-6">
          
          <div>
            <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-700">
              GitHub Repository URL
            </label>
            <div className="mt-1">
              <input
                type="url"
                name="repoUrl"
                id="repoUrl"
                required
                placeholder="https://github.com/username/project"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Your repository must be public so we can analyze the commits.
            </p>
          </div>

          <div>
            <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
              Domain Tag
            </label>
            <div className="mt-1">
              <select
                id="domain"
                name="domain"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">Select a domain</option>
                <option value="frontend">Frontend Web Development</option>
                <option value="backend">Backend Engineering</option>
                <option value="fullstack">Fullstack Development</option>
                <option value="data">Data Science / ML</option>
                <option value="mobile">Mobile Development</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Short Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                required
                placeholder="Briefly describe what this project does and the stack used..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
