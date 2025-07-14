const bytenode = require('bytenode'); 
const fs = require('fs'); 
try { 
  const jsc = require('./worker.jsc'); 
  console.log('Worker exports:', Object.keys(jsc)); 
  console.log('Worker functions:', Object.getOwnPropertyNames(jsc)); 
} catch(e) { console.log('Error:', e); } 
