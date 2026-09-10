-- Allow companies to read student profile basic info
CREATE POLICY "Companies can read student basic info" ON students FOR SELECT USING (
  EXISTS (SELECT 1 FROM companies WHERE companies.id = auth.uid())
);
