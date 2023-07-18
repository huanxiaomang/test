const nodeAbi = require('node-abi');

console.log(nodeAbi.getAbi('v18.16.1','node'))// 68

console.log(nodeAbi.getTarget('103', 'electron'))// 70
