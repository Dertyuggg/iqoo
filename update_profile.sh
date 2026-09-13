#!/bin/bash
# Modify profile/setup/page.tsx
sed -i "s|export default function StudentProfilePage() {|import { createClient } from '@/lib/supabase/server';\n\nexport default async function StudentProfilePage() {\n  const supabase = await createClient();\n  const { data: { user } } = await supabase.auth.getUser();\n  const { data: student } = user ? await supabase.from('students').select('*').eq('id', user.id).single() : { data: null };\n  const fullName = student?.full_name || user?.user_metadata?.full_name || 'Anonymous User';\n  const avatarUrl = user?.user_metadata?.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + fullName;\n  const collegeName = student?.college || 'Government Engineering College, Bilaspur (Tier-3 College)';\n|g" app/\(student\)/profile/setup/page.tsx

sed -i "s|Ananya Sharma|{fullName}|g" app/\(student\)/profile/setup/page.tsx
sed -i "s|<img alt=\"{fullName}\" className=\"w-full h-full object-cover rounded-full\" src=\"https://lh3.googleusercontent.com/aida-public/[^\"]*\"/>|<img alt=\"{fullName}\" className=\"w-full h-full object-cover rounded-full\" src={avatarUrl}/>|g" app/\(student\)/profile/setup/page.tsx
sed -i "s|B.Tech in Computer Science '25 • Government Engineering College, Bilaspur (Tier-3 College)|B.Tech in Computer Science '25 • {collegeName}|g" app/\(student\)/profile/setup/page.tsx

# Modify dashboard/page.tsx
sed -i "s|export default function StudentDashboardPage() {|import { createClient } from '@/lib/supabase/server';\n\nexport default async function StudentDashboardPage() {\n  const supabase = await createClient();\n  const { data: { user } } = await supabase.auth.getUser();\n  const { data: student } = user ? await supabase.from('students').select('*').eq('id', user.id).single() : { data: null };\n  const fullName = student?.full_name || user?.user_metadata?.full_name || 'Anonymous User';\n  const firstName = fullName.split(' ')[0];\n|g" app/\(student\)/dashboard/page.tsx

sed -i "s|Welcome back, Ananya|Welcome back, {firstName}|g" app/\(student\)/dashboard/page.tsx
