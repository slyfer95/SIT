import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://joyvqkrrenehkoapnxen.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveXZxa3JyZW5laGtvYXBueGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwMTYwNzUsImV4cCI6MjAwMjU5MjA3NX0.92GJS1X-EoBK_mI59FySHBxRGn-FH9G20KRJSkZe2Mg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);