// src/supabase.js
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://zgmdogtbcgexbqokcpts.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnbWRvZ3RiY2dleGJxb2tjcHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzc4MTksImV4cCI6MjA2MjkxMzgxOX0.9Vr_O2ylcwpXr5nffi60leFyZ1cwV6ZvpEqtUCZBbzU';
export const supabase = createClient(supabaseUrl, supabaseKey);