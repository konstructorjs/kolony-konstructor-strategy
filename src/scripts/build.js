module.exports = async (ctx) => {
  ctx.logBase('looking for build script');
  const kolony = ctx.state.packageJSON.kolony || {};
  const command = kolony.build;
  if (command) {
    ctx.logBase(`running ${command}`);
    await ctx.run(`nvm exec --silent ${ctx.state.node} ${command} | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran build script');
  } else if (command === '') {
    ctx.logChild('no build script defined');
  } else {
    ctx.logChild('no build script defined');
  }

  return ctx;
};
