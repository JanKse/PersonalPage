module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'personalPageDB'),
        user: env('DATABASE_USERNAME', 'jankseAdmin'),
        password: env('DATABASE_PASSWORD', 'j@nkoPankoAdmin9842'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  });
  