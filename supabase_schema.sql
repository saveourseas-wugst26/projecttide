-- Project TIDE Database Schema
-- Paste this script directly into the Lovable or Supabase SQL Editor.

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. COLLECTION CENTRES TABLE
CREATE TABLE IF NOT EXISTS collection_centres (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    hours VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Active', -- 'Active', 'Coming Soon'
    coords_x NUMERIC(5,2) NOT NULL,
    coords_y NUMERIC(5,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Clear existing and seed Collection Centres
TRUNCATE TABLE collection_centres CASCADE;
INSERT INTO collection_centres (name, address, hours, phone, status, coords_x, coords_y)
VALUES 
('Isiokpo Centre', 'Project TIDE Community Hub, Isiokpo Town, Rivers State', 'Mon - Fri: 8:00 AM - 4:00 PM', '+234 (0) 800 767 8433', 'Active', 35.00, 40.00),
('Wigwe University', 'Campus Recycling Yard, Wigwe University Campus, Isiokpo, Rivers State', 'Mon - Sat: 9:00 AM - 5:00 PM', '+234 (0) 800 767 8433', 'Active', 55.00, 48.00),
('Port Harcourt Hub', 'Central Collection Depot, Trans-Amadi, Port Harcourt, Rivers State', 'Expected Launch: Q4 2026', 'Contact hello@saveourseas.org', 'Coming Soon', 65.00, 80.00);

-- 2. TIMELINE MILESTONES TABLE
CREATE TABLE IF NOT EXISTS timeline_milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date_str VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon_name VARCHAR(100) NOT NULL, -- 'rocket', 'microscope', 'handshake', 'graduation-cap', 'globe'
    bullets TEXT[] DEFAULT '{}',
    sort_order INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Clear existing and seed milestones
TRUNCATE TABLE timeline_milestones CASCADE;
INSERT INTO timeline_milestones (date_str, title, description, icon_name, bullets, sort_order)
VALUES
('June 2, 2026', 'Save Our Seas (SOS) & Project TIDE Founded', 'Save Our Seas (SOS) was launched as a public environmental awareness movement, with Project TIDE (Transforming Infrastructure, Disposal & Environment) established as its implementation initiative to promote responsible plastic waste management and protect our waterways.', 'rocket', '{}', 1),
('June 3, 2026', 'Environmental Research & Community Assessment', 'We conducted our first environmental study to assess the impact of poor plastic waste disposal on rivers, water bodies, and surrounding communities in Isiokpo. The findings provided the foundation for our awareness campaign and long-term sustainability strategy.', 'microscope', '{}', 2),
('June 29, 2026', 'Partnership with Trashcoin', 'Project TIDE partnered with Trashcoin to launch the Plastic-to-Cash (P2C) Program, empowering community members to recycle plastic waste in exchange for TIDE Rewards, while promoting a circular economy and cleaner communities.', 'handshake', '{}', 3),
('June 30, 2026', 'School & Community Outreach', 'Our team visited Model Secondary School, Isiokpo, executing critical community activation steps.', 'graduation-cap', ARRAY['Delivered an environmental awareness session on plastic pollution and water conservation.', 'Engaged students and teachers through interactive discussions.', 'Installed campaign banners and distributed educational flyers across the community.', 'Donated waste disposal materials to support proper waste management and environmental responsibility.'], 4),
('July 17, 2026', 'Official Website Launch', 'The official Project TIDE website launched, providing a digital platform for environmental education, Plastic-to-Cash participation, community engagement, partnership opportunities, and project impact reporting.', 'globe', '{}', 5);

-- 3. MEMBERS / USERS TABLE
CREATE TABLE IF NOT EXISTS members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    points_balance INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. SUBMISSIONS TABLE (Weighed plastics record)
CREATE TABLE IF NOT EXISTS submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID REFERENCES members(id) ON DELETE CASCADE,
    centre_id UUID REFERENCES collection_centres(id) ON DELETE SET NULL,
    weight_kg NUMERIC(10,2) NOT NULL,
    points_earned INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. REWARDS CLAIMS TABLE
CREATE TABLE IF NOT EXISTS rewards_claims (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID REFERENCES members(id) ON DELETE CASCADE,
    reward_name VARCHAR(255) NOT NULL,
    points_spent INT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Pending', -- 'Pending', 'Approved', 'Redeemed'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
