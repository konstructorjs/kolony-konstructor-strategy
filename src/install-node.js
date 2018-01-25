module.exports = async (ctx) => {
  const engines = ctx.state.packageJSON.engines || {};
  const nodeVersion = engines.node;
  const npmVersion = engines.npm;

  ctx.logBase('looking for node');
  if (nodeVersion) {
    ctx.logChild(`installing node v${nodeVersion}`);
    await ctx.run(`nvm install ${nodeVersion}`);
    ctx.logChild(`installed node v${nodeVersion}`);
    ctx.state.node = nodeVersion;
  } else {
    await ctx.run('nvm use default');
    ctx.logChild('using default node version');
    ctx.state.node = 'default';
  }

  ctx.logBase('looking for npm');
  if (npmVersion) {
    ctx.logChild(`installing npm v${npmVersion}`);
    await ctx.run(`npm install -g npm@${npmVersion}`);
    ctx.logChild(`installed npm v${npmVersion}`);
  } else {
    ctx.logChild('using default npm version');
  }
  return ctx;
};
