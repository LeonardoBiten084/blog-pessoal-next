// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://plyqzlplqpqminrsmxvz.supabase.co'; // <-- pegue no dashboard do Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseXF6bHBscXBxbWlucnNteHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3OTQ3MTUsImV4cCI6MjA2OTM3MDcxNX0.e66PGCKIs-YJr3uuxpfI8Hen8fs7TXZ_KdBmyau8jgk';                // <-- pegue a chave "anon public" no Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);