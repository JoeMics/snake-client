const { messages, controls } = require('./constants');

// stores the active TCP connection object
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handles user inputs
  stdin.on('data', handleUserInput);

  //return the stdin object which allows us to listen to KB input and react to it
  return stdin;
};

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (controls[key]) {
    connection.write(`Move: ${controls[key]}`);
  }

  if (messages[key]) {
    connection.write(`Say: ${messages[key]}`);
  }
};

module.exports = { setupInput };