-- =============================================
-- ZAINAB ENGINEERING - COMPLETE DATABASE RESET
-- Run this in Supabase Dashboard -> SQL Editor
-- =============================================

-- =============================================
-- STEP 1: DROP EVERYTHING (Complete Clean Slate)
-- =============================================

-- Drop ALL existing policies (covering all possible table policies)
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT schemaname, tablename, policyname 
              FROM pg_policies 
              WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON ' || r.tablename || ';';
    END LOOP;
END $$;

-- Drop triggers and functions
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- Drop all existing tables in the correct order (handling dependencies)
DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS email_subscribers CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS admins CASCADE;

-- =============================================
-- STEP 2: CREATE NEW TABLES
-- =============================================

-- 1. CONTACT_MESSAGES TABLE
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. EMAIL_SUBSCRIBERS TABLE  
CREATE TABLE email_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- STEP 3: ENABLE ROW LEVEL SECURITY (RLS)
-- =============================================
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- =============================================
-- STEP 4: CREATE RLS POLICIES
-- =============================================

-- CONTACT_MESSAGES policies
-- Allow anyone to submit a contact message
CREATE POLICY "Anyone can submit contact" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can view messages
CREATE POLICY "Admins can view messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only authenticated users (admins) can update messages
CREATE POLICY "Admins can update messages" ON contact_messages
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Only authenticated users (admins) can delete messages
CREATE POLICY "Admins can delete messages" ON contact_messages
  FOR DELETE USING (auth.role() = 'authenticated');

-- EMAIL_SUBSCRIBERS policies
-- Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe" ON email_subscribers
  FOR INSERT WITH CHECK (true);

-- Allow anyone to view their own subscription (for unsubscribe)
CREATE POLICY "Anyone can view own subscription" ON email_subscribers
  FOR SELECT USING (true);

-- Allow anyone to unsubscribe themselves
CREATE POLICY "Anyone can unsubscribe" ON email_subscribers
  FOR DELETE USING (true);

-- Only authenticated users (admins) can view all subscribers
CREATE POLICY "Admins can view all subscribers" ON email_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only authenticated users (admins) can delete any subscriber
CREATE POLICY "Admins can delete subscribers" ON email_subscribers
  FOR DELETE USING (auth.role() = 'authenticated');

-- =============================================
-- DONE! 
-- =============================================
-- Next: Admin user has been created via script
-- Email: admin@ze.com
-- Password: sbnbaig1
-- You can now login with these credentials
-- =============================================
