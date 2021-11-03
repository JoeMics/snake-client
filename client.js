const net = require('net');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP
    port: 50541             // PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // log message when connected to server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    // send a string upon connection
    conn.write('Name: JOE');

    // move up on connect
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50);
  // });

  // logs data comming from the server when it sends it
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };