module.exports = async (ctx) => {
  ctx.logBase('looking for pre-build script');
  const command = ctx.state.packageJSON.kolony['pre-build'];
  if (command) {
    ctx.logBase(`running ${command}`);
    await ctx.run(`nvm exec --silent ${ctx.state.node} ${command} | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran pre-build script');
  } else if (command === '') {
    ctx.logChild('no pre-build script defined');
  } else {
    ctx.logChild('no pre-build script defined');
  }

  return ctx;
};
