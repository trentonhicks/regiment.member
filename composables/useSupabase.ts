import { createClient } from '@supabase/supabase-js'

export function useSupabase() {
    return createClient('https://chjhpfkllmcdqmyvatqn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoamhwZmtsbG1jZHFteXZhdHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMzMwNjMsImV4cCI6MjA1MDgwOTA2M30.L5LL8sZQFBSGjIeV7kZCzRNnwVaRZsohFtnORQnGizM');
}