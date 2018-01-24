const path = require('path');
const { ncp } = require('ncp');

const copyDir = (src, dest) => new Promise((resolve, reject) => {
  ncp(src, dest, (err) => {
    if (err) {
      return reject(err);
    }
    return resolve();
  });
});

module.exports = async (ctx) => {
  ctx.logBase('copying node_modules from a previous build');
  if (ctx.state.oldID) {
    const newBuildDir = process.cwd();
    const oldBuildDir = path.join(newBuildDir, '../', `${ctx.state.name}-${ctx.state.oldID}`);
    await copyDir(path.join(oldBuildDir, './node_modules'), path.join(newBuildDir, './node_modules'));
    ctx.logChild('copied node_modules');
  } else {
    ctx.logChild('previous build not found');
  }
  return ctx;
};
