module.exports = async (ctx) => {
  ctx.logBase('looking for pre-install script');
  const kolony = ctx.state.packageJSON.kolony || {};
  const command = kolony['pre-install'];
  if (command) {
    ctx.logBase(`running ${command}`);
    await ctx.run(`nvm exec --silent ${ctx.state.node} ${command} | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran pre-install script');
  } else if (command === '') {
    ctx.logChild('no pre-install script defined');
  } else {
    ctx.logChild('no pre-install script defined');
  }

  return ctx;
};
