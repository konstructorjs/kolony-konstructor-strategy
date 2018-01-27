module.exports = async (ctx) => {
  ctx.logBase('looking for install script');
  const kolony = ctx.state.packageJSON.kolony || {};
  const command = kolony.install;
  if (command) {
    ctx.logBase(`running ${command}`);
    await ctx.run(`nvm exec --silent ${ctx.state.node} ${command} | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran install script');
  } else if (command === '') {
    ctx.logChild('no install script defined');
  } else {
    ctx.logChild('running npm install');
    await ctx.run(`nvm exec --silent ${ctx.state.node} npm install | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran install script');
  }

  return ctx;
};
