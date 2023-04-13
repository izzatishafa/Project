import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://hhbqzwupmzztaogzctmd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoYnF6d3VwbXp6dGFvZ3pjdG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyODg0MTQsImV4cCI6MTk5Njg2NDQxNH0.E2S15OHxVRVNTewyEQDd0wjYOoNRqsTTQmYAs8DQaCo';

export const supabase = createClient(supabaseUrl, supabaseKey);
