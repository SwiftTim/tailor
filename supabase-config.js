import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://fivozvamgrnswhqpjvmj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpdm96dmFtZ3Juc3docXBqdm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MjUyNDcsImV4cCI6MjA3ODEwMTI0N30.H90Rsi47bIsmC1SkuWpvghz_dih-eHf2se_7O80Uhns";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
