-- =============================================
-- ZAINAB ENGINEERING DATABASE SCHEMA
-- Run this in Supabase Dashboard -> SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- 1. SERVICES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- 2. PROJECTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  category VARCHAR(100),
  client_name VARCHAR(255),
  completion_date DATE,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- 3. CONTACT MESSAGES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- 4. ADMINS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS admins (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- =============================================
-- INSERT SAMPLE DATA
-- =============================================

-- Sample Services
INSERT INTO services (title, description, icon, is_active) VALUES
  ('Civil Engineering', 'Complete civil engineering solutions including structural design, construction management, and site supervision.', 'building', true),
  ('Electrical Engineering', 'Electrical system design, installation, and maintenance for residential and commercial projects.', 'zap', true),
  ('Mechanical Engineering', 'HVAC systems, plumbing, and mechanical installations for modern buildings.', 'settings', true)
ON CONFLICT (title) DO NOTHING;

-- Sample Projects
INSERT INTO projects (title, description, category, client_name, is_featured) VALUES
  ('Modern Office Complex', 'A 10-story commercial building with state-of-the-art facilities.', 'Commercial', 'ABC Corporation', true),
  ('Residential Tower', 'Luxury residential apartments with modern amenities.', 'Residential', 'XYZ Developers', true),
  ('Industrial Plant', 'Manufacturing facility with advanced engineering systems.', 'Industrial', 'Tech Industries', false);

-- Hardcoded Admin User (Email: admin@zainabengineering.com, Password: admin123)
INSERT INTO admins (email, password, name, is_active) VALUES
  ('admin@zainabengineering.com', 'admin123', 'Admin User', true)
ON CONFLICT (email) DO NOTHING;

-- =============================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- =============================================
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Public read access for services and projects
CREATE POLICY "Public can view active services" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view projects" ON projects FOR SELECT USING (true);

-- Anyone can submit contact messages
CREATE POLICY "Anyone can submit contact" ON contact_messages FOR INSERT WITH CHECK (true);

-- Only authenticated can read contact messages
CREATE POLICY "Authenticated can read messages" ON contact_messages FOR SELECT USING (true);

-- Admin policies
CREATE POLICY "Public can check admin login" ON admins FOR SELECT USING (true);

-- =============================================
-- DONE! Tables created successfully
-- =============================================
