
//Module require to connect with Postgres
const pg = require('pg');

// Connection String with credentials
const connectionString = "postgres://postgres:specsy@localhost/demo";
const client = new pg.Client(connectionString);
client.connect();
const query = client.query(  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });
