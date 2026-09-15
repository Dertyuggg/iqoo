-- Drop the overly permissive company read policy
DROP POLICY IF EXISTS "Companies can read student basic info" ON students;

-- Create a restrictive policy so companies only see students with a verified rank in their domain
CREATE POLICY "Companies can read student basic info" ON students FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM verified_ranks
    JOIN companies ON verified_ranks.domain = ANY(companies.domains_hiring)
    WHERE verified_ranks.student_id = students.id
    AND companies.id = auth.uid()
  )
);
