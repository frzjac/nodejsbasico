const call = require('./src/call');

// call.greet('Franz Jacanamejoy')

// call.withPromise('Camilo','Jacanamejoy')
//   .then((n)=>console.log(n))

async function callWithPromise() {
  const fullName = await call.withPromise('Franz','Jacanamejoy');
  console.log(fullName)
}

callWithPromise();
