module.exports = async (ctx) => {
  ctx.logBase('looking for post-build script');
  const kolony = ctx.state.packageJSON.kolony || {};
  const command = kolony['post-build'];
  if (command) {
    ctx.logBase(`running ${command}`);
    await ctx.run(`nvm exec --silent ${ctx.state.node} ${command} | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran post-build script');
  } else if (command === '') {
    ctx.logChild('no post-build script defined');
  } else {
    ctx.logChild('no post-build script defined');
  }

  return ctx;
};
