const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting...');

// setupInput needs access to the object returned by connect()
setupInput(connect());