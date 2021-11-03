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

  // arrow keys in unicode take from this page: https://stackoverflow.com/questions/17470554/how-to-capture-the-arrow-keys-in-node-js
  const controls = {
    'w': 'up',
    's': 'down',
    'd': 'right',
    'a': 'left',
  };

  const messages = {
    'f': 'pog',
  };
  
  if (controls[key]) {
    connection.write(`Move: ${controls[key]}`);
  }

  if (messages[key]) {
    connection.write(`Say: ${messages[key]}`);
  }
};

module.exports = { setupInput };