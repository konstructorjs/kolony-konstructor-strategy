module.exports = async (ctx) => {
  ctx.logBase('looking for post-install script');
  const kolony = ctx.state.packageJSON.kolony || {};
  const command = kolony['post-install'];
  if (command) {
    ctx.logBase(`running ${command}`);
    await ctx.run(`nvm exec --silent ${ctx.state.node} ${command} | sed 's/^/    /'`, { show: true });
    ctx.logChild('successfully ran post-install script');
  } else if (command === '') {
    ctx.logChild('no post-install script defined');
  } else {
    ctx.logChild('no post-install script defined');
  }

  return ctx;
};
