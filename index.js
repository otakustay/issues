import config from './config.json';
import configSource from './config.json' assert {type: 'string'};

console.log('Parsed Configuration');
console.log('    ', JSON.stringify(config));
console.log('');
console.log('Configuration Source');
console.log(configSource.split('\n').map(v => '    ' + v).join('\n'));
