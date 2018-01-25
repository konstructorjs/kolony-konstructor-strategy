const path = require('path');

module.exports = async (ctx) => {
  const buildDir = process.cwd();
  const startPath = path.join(buildDir, './node_modules/konstructor/app.js');
  const interpreter = (ctx.state.node === 'default') ? 'node' : `node@${ctx.state.node}`;
  await ctx.start({
    interpreter,
    script: startPath,
  });
  const appName = `${ctx.app.name}-${ctx.app.id}`;
  const pm2 = ctx.app.pm2 || {};
  pm2.name = appName;
  ctx.app.pm2 = pm2;
  return ctx;
};
