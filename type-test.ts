import { Database } from '@/types'

type Tables = Database['public']['Tables']
type StudentRow = Tables['students']['Row']

const student: StudentRow = {
  id: '123',
  full_name: null,
  college: null,
  domain_interests: null,
  github_connected: null,
  leetcode_connected: null,
  created_at: null,
}
