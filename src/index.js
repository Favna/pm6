#!/usr/bin/env node

const { execSync } = require('child_process');

execSync(`docker ${process.argv.slice(2).join(' ')}`,  { stdio: 'inherit' });