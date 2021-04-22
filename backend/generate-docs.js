const YAML = require('yamljs');
const fs = require('fs');
const nativeObject = YAML.load('src/endpoint.doc.yaml');

fs.writeFileSync('docs/endpoints.json', JSON.stringify(nativeObject));