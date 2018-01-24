module.exports = {
  scripts: [
    {
      name: 'read-config',
      description: 'reading config',
      script: 'read-config.js',
    },
    {
      name: 'install-node',
      description: 'installing node',
      script: 'install-node.js',
    },
    {
      name: 'configure environment',
      description: 'configuring environment variables',
      script: 'configure-environment.js',
    },
    {
      name: 'restore cache',
      description: 'restoring cache from previous build',
      script: 'restore-cache.js',
    },
    {
      name: 'pre install',
      description: 'running pre-install scripts',
      script: 'scripts/pre-install.js',
    },
    {
      name: 'install',
      description: 'running install scripts',
      script: 'scripts/install.js',
    },
    {
      name: 'post-install',
      description: 'running post-install scripts',
      script: 'scripts/post-install.js',
    },
    {
      name: 'pre-build',
      description: 'running pre-build scripts',
      script: 'scripts/pre-build.js',
    },
    {
      name: 'build',
      description: 'running build scripts',
      script: 'scripts/build.js',
    },
    {
      name: 'start',
      description: 'starting the server',
      script: 'start.js',
    },
  ],
};
