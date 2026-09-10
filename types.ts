export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    CompositeTypes: {}
    Views: {}
    Functions: {}
    Enums: {}
    Tables: {
      students: {
        Row: {
          id: string
          full_name: string | null
          college: string | null
          domain_interests: string[] | null
          github_connected: boolean | null
          leetcode_connected: boolean | null
          created_at: string | null
        }
        Insert: {
          id: string
          full_name?: string | null
          college?: string | null
          domain_interests?: string[] | null
          github_connected?: boolean | null
          leetcode_connected?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          full_name?: string | null
          college?: string | null
          domain_interests?: string[] | null
          github_connected?: boolean | null
          leetcode_connected?: boolean | null
          created_at?: string | null
        }
      }
      activity_events: {
        Row: {
          id: string
          student_id: string | null
          source: string
          event_type: string
          event_timestamp: string
          raw_data: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          student_id?: string | null
          source: string
          event_type: string
          event_timestamp: string
          raw_data?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          student_id?: string | null
          source?: string
          event_type?: string
          event_timestamp?: string
          raw_data?: Json | null
          created_at?: string | null
        }
      }
      project_submissions: {
        Row: {
          id: string
          student_id: string | null
          domain: string
          repo_url: string
          status: string
          submission_timestamp: string | null
          updated_at: string | null
          description: string | null
        }
        Insert: {
          id?: string
          student_id?: string | null
          domain: string
          repo_url: string
          status?: string
          submission_timestamp?: string | null
          updated_at?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          student_id?: string | null
          domain?: string
          repo_url?: string
          status?: string
          submission_timestamp?: string | null
          updated_at?: string | null
          description?: string | null
        }
      }
      authenticity_checks: {
        Row: {
          id: string
          submission_id: string | null
          timestamp_analysis_result: Json | null
          commit_message_coherence: Json | null
          public_repo_diff_result: Json | null
          overall_status: string
          created_at: string | null
        }
        Insert: {
          id?: string
          submission_id?: string | null
          timestamp_analysis_result?: Json | null
          commit_message_coherence?: Json | null
          public_repo_diff_result?: Json | null
          overall_status: string
          created_at?: string | null
        }
        Update: {
          id?: string
          submission_id?: string | null
          timestamp_analysis_result?: Json | null
          commit_message_coherence?: Json | null
          public_repo_diff_result?: Json | null
          overall_status?: string
          created_at?: string | null
        }
      }
      ai_reviews: {
        Row: {
          id: string
          submission_id: string | null
          code_quality_score: number | null
          structure_notes: string | null
          originality_signal: string | null
          raw_model_output: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          submission_id?: string | null
          code_quality_score?: number | null
          structure_notes?: string | null
          originality_signal?: string | null
          raw_model_output?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          submission_id?: string | null
          code_quality_score?: number | null
          structure_notes?: string | null
          originality_signal?: string | null
          raw_model_output?: Json | null
          created_at?: string | null
        }
      }
      defense_sessions: {
        Row: {
          id: string
          submission_id: string | null
          scheduled_time: string | null
          session_notes: string | null
          reviewer_notes: string | null
          outcome: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          submission_id?: string | null
          scheduled_time?: string | null
          session_notes?: string | null
          reviewer_notes?: string | null
          outcome?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          submission_id?: string | null
          scheduled_time?: string | null
          session_notes?: string | null
          reviewer_notes?: string | null
          outcome?: string | null
          created_at?: string | null
        }
      }
      verified_ranks: {
        Row: {
          id: string
          student_id: string | null
          domain: string
          consistency_score: number
          project_depth_score: number
          defense_performance_score: number
          audit_adjustment: number | null
          total_trust_score: number | null
          snapshot_timestamp: string | null
        }
        Insert: {
          id?: string
          student_id?: string | null
          domain: string
          consistency_score?: number
          project_depth_score?: number
          defense_performance_score?: number
          audit_adjustment?: number | null
          total_trust_score?: number | null
          snapshot_timestamp?: string | null
        }
        Update: {
          id?: string
          student_id?: string | null
          domain?: string
          consistency_score?: number
          project_depth_score?: number
          defense_performance_score?: number
          audit_adjustment?: number | null
          total_trust_score?: number | null
          snapshot_timestamp?: string | null
        }
      }
      companies: {
        Row: {
          id: string
          name: string
          domains_hiring: string[] | null
          billing_phase: string | null
          created_at: string | null
        }
        Insert: {
          id: string
          name: string
          domains_hiring?: string[] | null
          billing_phase?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          domains_hiring?: string[] | null
          billing_phase?: string | null
          created_at?: string | null
        }
      }
      hires: {
        Row: {
          id: string
          student_id: string | null
          company_id: string | null
          rank_snapshot_id: string | null
          hire_date: string
          created_at: string | null
        }
        Insert: {
          id?: string
          student_id?: string | null
          company_id?: string | null
          rank_snapshot_id?: string | null
          hire_date: string
          created_at?: string | null
        }
        Update: {
          id?: string
          student_id?: string | null
          company_id?: string | null
          rank_snapshot_id?: string | null
          hire_date?: string
          created_at?: string | null
        }
      }
    }
  }
}
