-- =============================================
-- ZAINAB ENGINEERING DATABASE SCHEMA
-- Run this in Supabase Dashboard -> SQL Editor
-- =============================================

-- =============================================
-- STEP 1: DROP EXISTING TABLES (Clean Slate)
-- =============================================
DROP POLICY IF EXISTS "Public can view active services" ON services;
DROP POLICY IF EXISTS "Public can view projects" ON projects;
DROP POLICY IF EXISTS "Anyone can submit contact" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Public can check admin login" ON admins;

DROP TABLE IF EXISTS admins CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- =============================================
-- STEP 2: CREATE TABLES
-- =============================================

-- 1. USERS TABLE (for admin profiles, linked to Supabase Auth)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'superadmin')),
  is_active BOOLEAN DEFAULT true,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SERVICES TABLE
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT DEFAULT 'wrench',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. PROJECTS TABLE
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  category TEXT,
  client_name TEXT,
  location TEXT,
  completion_date DATE,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. CONTACT_MESSAGES TABLE
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  is_archived BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- STEP 3: ENABLE ROW LEVEL SECURITY (RLS)
-- =============================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- =============================================
-- STEP 4: CREATE RLS POLICIES
-- =============================================

-- USERS policies
CREATE POLICY "Users can view own profile" ON users 
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users 
  FOR UPDATE USING (auth.uid() = id);

-- SERVICES policies
CREATE POLICY "Anyone can view active services" ON services 
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage services" ON services 
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.is_active = true)
  );

-- PROJECTS policies  
CREATE POLICY "Anyone can view active projects" ON projects 
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage projects" ON projects 
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.is_active = true)
  );

-- CONTACT_MESSAGES policies
CREATE POLICY "Anyone can submit contact" ON contact_messages 
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view messages" ON contact_messages 
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.is_active = true)
  );

CREATE POLICY "Admins can update messages" ON contact_messages 
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.is_active = true)
  );

-- =============================================
-- STEP 5: CREATE TRIGGER FOR AUTO USER PROFILE
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- STEP 6: INSERT SAMPLE DATA
-- =============================================

-- Sample Services
INSERT INTO services (title, description, icon, display_order, is_active) VALUES
  ('Civil Engineering', 'Complete civil engineering solutions including structural design, construction management, and site supervision.', 'building', 1, true),
  ('Electrical Engineering', 'Electrical system design, installation, and maintenance for residential and commercial projects.', 'zap', 2, true),
  ('Mechanical Engineering', 'HVAC systems, plumbing, and mechanical installations for modern buildings.', 'settings', 3, true),
  ('Architectural Design', 'Modern architectural designs for residential, commercial, and industrial buildings.', 'home', 4, true),
  ('Project Management', 'End-to-end project management services ensuring timely delivery within budget.', 'clipboard', 5, true)
ON CONFLICT (title) DO NOTHING;

-- Sample Projects
INSERT INTO projects (title, description, category, client_name, location, is_featured, is_active) VALUES
  ('Modern Office Complex', 'A 10-story commercial building with state-of-the-art facilities and sustainable design.', 'Commercial', 'ABC Corporation', 'Lahore', true, true),
  ('Residential Tower', 'Luxury residential apartments with modern amenities and smart home features.', 'Residential', 'XYZ Developers', 'Karachi', true, true),
  ('Industrial Plant', 'Manufacturing facility with advanced engineering systems and safety measures.', 'Industrial', 'Tech Industries', 'Faisalabad', true, true),
  ('Shopping Mall', 'Multi-level shopping complex with parking and entertainment zones.', 'Commercial', 'Retail Group', 'Islamabad', false, true);

-- =============================================
-- DONE! Schema created successfully.
-- =============================================
-- 
-- NEXT: Create admin user manually in Supabase:
-- 1. Go to Authentication -> Users -> Add User
-- 2. Email: your-email@example.com
-- 3. Password: your-secure-password
-- 4. The trigger will auto-create profile in users table
-- =============================================
