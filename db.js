const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  password: 'Amer#123',
  host: 'localhost',
  port: 5432,
  database: 'DivineSecrets'
});
module.exports=pool;