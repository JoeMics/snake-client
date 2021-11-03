const net = require('net');
const { IP, PORT, USER } = require('./constants');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // log message when connected to server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    // send a string upon connection
    conn.write(`Name: ${USER}`);
  });

  // logs data comming from the server when it sends it
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };