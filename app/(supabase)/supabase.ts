import { SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = "https://naamqyzhbpehywqhabek.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = new SupabaseClient(supabaseUrl, supabaseKey);

export default supabase;