-- Add missing indexes for performance and security lookups
CREATE INDEX idx_project_submissions_student_id ON project_submissions(student_id);
CREATE INDEX idx_activity_events_student_id_timestamp ON activity_events(student_id, event_timestamp DESC);
CREATE INDEX idx_verified_ranks_domain ON verified_ranks(domain);

-- Explicitly ensure companies cannot access restricted tables.
-- While Supabase is default-deny, we create empty restrictive policies to be absolutely certain
-- that no future permissive policy accidentally grants them access without bypassing these.
-- Actually, Postgres doesn't easily support "explicit deny" that overrides "allow" without USING logic in RESTRICTIVE policies.
-- In PG 15+, we can use AS RESTRICTIVE.

CREATE POLICY "Deny companies access to raw activity" ON activity_events AS RESTRICTIVE FOR SELECT
USING (
  NOT EXISTS (SELECT 1 FROM companies WHERE companies.id = auth.uid())
);

CREATE POLICY "Deny companies access to raw submissions" ON project_submissions AS RESTRICTIVE FOR SELECT
USING (
  NOT EXISTS (SELECT 1 FROM companies WHERE companies.id = auth.uid())
);

CREATE POLICY "Deny companies access to ai reviews" ON ai_reviews AS RESTRICTIVE FOR SELECT
USING (
  NOT EXISTS (SELECT 1 FROM companies WHERE companies.id = auth.uid())
);

CREATE POLICY "Deny companies access to authenticity checks" ON authenticity_checks AS RESTRICTIVE FOR SELECT
USING (
  NOT EXISTS (SELECT 1 FROM companies WHERE companies.id = auth.uid())
);

-- Add missing INSERT policy for companies to allow company self-serve onboarding
CREATE POLICY "Companies can insert own profile" ON companies FOR INSERT WITH CHECK (auth.uid() = id);

