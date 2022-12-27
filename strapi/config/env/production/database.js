module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', 'r5-my80-15'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'personalPageDB'),
        user: env('DATABASE_USERNAME', 'jankseAdmin'),
        password: env('DATABASE_PASSWORD', 'j@nkoPankoAdmin9842'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  });
  