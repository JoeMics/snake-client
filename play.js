const { connect } = require('./client');

const setupInput = () => {
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
};

setupInput();



console.log('Connecting...');
connect();