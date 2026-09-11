const fs = require('fs');
let code = fs.readFileSync('types.ts', 'utf8');

// Fix empty objects
code = code.replace(/CompositeTypes: \{\}/g, 'CompositeTypes: { [_ in never]: never }');
code = code.replace(/Views: \{\}/g, 'Views: { [_ in never]: never }');
code = code.replace(/Functions: \{\}/g, 'Functions: { [_ in never]: never }');
code = code.replace(/Enums: \{\}/g, 'Enums: { [_ in never]: never }');

// Convert interface Database to type Database = 
code = code.replace(/export interface Database \{/g, 'export type Database = {');

// Add Relationships to all tables
code = code.replace(/Update: \{[\s\S]*?\}/g, match => match + '\n          Relationships: []');

fs.writeFileSync('types.ts', code);
