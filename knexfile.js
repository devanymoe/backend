module.exports = {

  development : {
    client: 'pg',
    connection: 'postgres://localhost/habitude'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
