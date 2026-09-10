const fs = require('fs');
let content = fs.readFileSync('types.ts', 'utf-8');
content = content.replace('    Views: {}', '    CompositeTypes: {}\n    Views: {}');
fs.writeFileSync('types.ts', content);
