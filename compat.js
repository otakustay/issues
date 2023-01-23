const compat = require('core-js-compat');

const {list} = compat({targets: 'ie 10'});
console.log(list.filter(v => v.includes('replace-all')));
