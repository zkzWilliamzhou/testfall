#!/usr/bin/env node
import { Core, createCore } from './index.js';
function main() { const core = createCore({ name: "testfall", version: "0.1.0" }); console.log(core.execute(process.argv[2] || 'default')); }
main();
