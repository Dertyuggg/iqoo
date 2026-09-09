ALTER TABLE students ADD COLUMN full_name text;

CREATE TABLE student_secrets (
  student_id uuid PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
  github_token text,
  github_username text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE student_secrets ENABLE ROW LEVEL SECURITY;
-- Only server (service role) can read/write secrets by default, 
-- but let's allow students to update their own tokens (e.g. from an API route), 
-- actually, no, we'll just insert from a server action/API route using service role so we don't even need RLS policies for students here, or we restrict completely.
-- Better yet, restrict completely for public. Service role bypasses RLS.
-- No policies = default deny all for public/anon/authenticated.
