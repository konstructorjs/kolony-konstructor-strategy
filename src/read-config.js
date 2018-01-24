const path = require('path');

module.exports = async (ctx) => {
  const buildDir = process.cwd();
  ctx.logBase('looking for package.json');
  let packageJSON;
  try {
    packageJSON = require(path.join(buildDir, './package.json'));
  } catch (err) {
    throw new Error('unable to find package.json');
  }
  ctx.logChild('found package.json');
  ctx.state.packageJSON = packageJSON;
  return ctx;
};
