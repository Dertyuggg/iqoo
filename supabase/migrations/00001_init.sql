-- Core Schema for IQOO Talent Platform

-- 1. Create tables
CREATE TABLE students (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  college text,
  domain_interests text[],
  github_connected boolean DEFAULT false,
  leetcode_connected boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE activity_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  source text NOT NULL, -- e.g., 'github', 'leetcode', 'in_app'
  event_type text NOT NULL,
  event_timestamp timestamptz NOT NULL,
  raw_data jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE project_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  domain text NOT NULL,
  repo_url text NOT NULL,
  status text NOT NULL DEFAULT 'submitted', -- 'submitted', 'authenticity_checked', 'ai_reviewed', 'pending_defense', 'defended', 'verified', 'rejected'
  submission_timestamp timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE authenticity_checks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES project_submissions(id) ON DELETE CASCADE,
  timestamp_analysis_result jsonb,
  commit_message_coherence jsonb,
  public_repo_diff_result jsonb,
  overall_status text NOT NULL, -- 'passed', 'failed', 'flagged'
  created_at timestamptz DEFAULT now()
);

CREATE TABLE ai_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES project_submissions(id) ON DELETE CASCADE,
  code_quality_score integer,
  structure_notes text,
  originality_signal text,
  raw_model_output jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE defense_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES project_submissions(id) ON DELETE CASCADE,
  scheduled_time timestamptz,
  session_notes text,
  reviewer_notes text,
  outcome text, -- 'pass', 'fail'
  created_at timestamptz DEFAULT now()
);

CREATE TABLE verified_ranks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  domain text NOT NULL,
  consistency_score integer NOT NULL DEFAULT 0,
  project_depth_score integer NOT NULL DEFAULT 0,
  defense_performance_score integer NOT NULL DEFAULT 0,
  audit_adjustment integer DEFAULT 0,
  total_trust_score integer GENERATED ALWAYS AS (consistency_score + project_depth_score + defense_performance_score + audit_adjustment) STORED,
  snapshot_timestamp timestamptz DEFAULT now()
);

CREATE TABLE companies (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name text NOT NULL,
  domains_hiring text[],
  billing_phase text DEFAULT 'success_fee',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE hires (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE SET NULL,
  company_id uuid REFERENCES companies(id) ON DELETE SET NULL,
  rank_snapshot_id uuid REFERENCES verified_ranks(id) ON DELETE SET NULL,
  hire_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE performance_checkins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hire_id uuid REFERENCES hires(id) ON DELETE CASCADE,
  checkin_date date NOT NULL,
  employer_feedback text,
  performance_score integer,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE human_audits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  target_type text NOT NULL, -- 'submission', 'profile'
  target_id uuid NOT NULL,
  audit_outcome text,
  auditor_notes text,
  created_at timestamptz DEFAULT now()
);


-- 2. Enable RLS
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE authenticity_checks ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE defense_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE verified_ranks ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE hires ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE human_audits ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies

-- Students can read and write their own profile
CREATE POLICY "Students can view own profile" ON students FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Students can update own profile" ON students FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Students can insert own profile" ON students FOR INSERT WITH CHECK (auth.uid() = id);

-- Students can read their own activity events
CREATE POLICY "Students can view own activity" ON activity_events FOR SELECT USING (auth.uid() = student_id);

-- Students can view and create their own project submissions
CREATE POLICY "Students can view own submissions" ON project_submissions FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students can insert own submissions" ON project_submissions FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "Students can update own submissions" ON project_submissions FOR UPDATE USING (auth.uid() = student_id);

-- Companies can view verified ranks (summaries) but only for domains they hire for
-- For simplicity in phase 1, allow companies to view all verified ranks, or filter by domain in UI
CREATE POLICY "Companies can view verified ranks" ON verified_ranks FOR SELECT USING (
  EXISTS (SELECT 1 FROM companies WHERE companies.id = auth.uid())
);

-- Companies can read their own profile
CREATE POLICY "Companies can view own profile" ON companies FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Companies can update own profile" ON companies FOR UPDATE USING (auth.uid() = id);

-- Note: All other read/writes (creating ranks, running AI reviews, editing defenses) 
-- will be done via Supabase Service Role (server-side), which automatically bypasses RLS.
