-- =============================================
-- ZAINAB ENGINEERING DATABASE SCHEMA
-- =============================================

-- =============================================
-- STEP 1: DROP EXISTING TABLES (Clean Slate)
-- =============================================
DROP POLICY IF EXISTS "Anyone can submit contact" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can subscribe" ON email_subscribers;
DROP POLICY IF EXISTS "Anyone can unsubscribe
 own email" ON email_subscribers;
DROP POLICY IF EXISTS "Admins can view subscribers" ON email_subscribers;
DROP POLICY IF EXISTS "Admins can delete subscribers" ON email_subscribers;
DROP POLICY IF EXISTS "Admins can view messages" ON contact_messages;
DROP POLICY IF EXISTS "Admins can update messages" ON contact_messages;
DROP POLICY IF EXISTS "Admins can delete messages" ON contact_messages;

DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS email_subscribers CASCADE;

-- =============================================
-- STEP 2: CREATE TABLES
-- =============================================

-- 1. CONTACT_MESSAGES TABLE
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  is_archived BOOLEAN DEFAULT false,
  replied_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. EMAIL_SUBSCRIBERS TABLE
CREATE TABLE email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
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
CREATE POLICY "Anyone can submit contact" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can update messages" ON contact_messages
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can delete messages" ON contact_messages
  FOR DELETE USING (auth.role() = 'authenticated');

-- EMAIL_SUBSCRIBERS policies
CREATE POLICY "Anyone can subscribe" ON email_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can unsubscribe own email" ON email_subscribers
  FOR UPDATE USING (true);

CREATE POLICY "Admins can view subscribers" ON email_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can delete subscribers" ON email_subscribers
  FOR DELETE USING (auth.role() = 'authenticated');

-- =============================================
-- DONE!
-- =============================================
