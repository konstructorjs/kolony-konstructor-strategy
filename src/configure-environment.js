module.exports = async (ctx) => {
  ctx.logBase('configuring environment variables');
  const env = ctx.app.env || {};
  env.PORT = env.PORT;
  env.NODE_ENV = env.NODE_ENV || 'production';
  env.NPM_CONFIG_LOGLEVEL = env.NPM_CONFIG_LOGLEVEL || 'error';
  env.NPM_CONFIG_PRODUCTION = env.NPM_CONFIG_PRODUCTION || 'false';
  env.NODE_VERBOSE = env.NODE_VERBOSE || 'false';

  Object.keys(env).forEach((key) => {
    const value = env[key];
    process.env[key] = value;
  });

  ctx.app.env = env;

  ctx.logChild('configured environment variables');

  return ctx;
};
