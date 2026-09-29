const QUnit=require('qunit');
global.QUnit=QUnit;
QUnit.config.autostart=false;
QUnit.config.testTimeout=30000;
QUnit.on('testEnd',d=>{if(d.status==='failed')console.error(d);});
QUnit.on('runEnd',d=>{console.log(JSON.stringify(d.testCounts));process.exitCode=d.testCounts.failed?1:0;});
require('./test.js');
