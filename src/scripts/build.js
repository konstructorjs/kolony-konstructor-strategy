module.exports = async (ctx) => {
  ctx.logBase('looking for build script');
  const command = ctx.state.packageJSON.kolony.build;
  if (command) {
    ctx.logBase(`running ${command}`);
    await ctx.run(`nvm exec --silent ${ctx.state.node} ${command} | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran build script');
  } else if (command === '') {
    ctx.logChild('no build script defined');
  } else {
    ctx.logChild('running npm run build');
    await ctx.run(`nvm exec --silent ${ctx.state.node} npm run build | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran build script');
  }

  return ctx;
};
