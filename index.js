const call = require('./src/call'); 

//call.withCallback('Franz',call.sync)

call.withPromise('Franz')
  .then(name=>console.log(name));