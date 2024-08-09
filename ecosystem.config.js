const os = require('os');

/**
 * COLYSEUS CLOUD WARNING:
 * ----------------------
 * PLEASE DO NOT UPDATE THIS FILE MANUALLY AS IT MAY CAUSE DEPLOYMENT ISSUES
 */

module.exports = {
  apps : [{
    name: "colyseus-app",
    script: 'build/index.js',
    time: true,
    watch: false,
    instances: os.cpus().length,
    exec_mode: 'fork',
    wait_ready: true,
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      "user" : "deploy",
      "host" : ["45.76.180.208"],
      "ref"  : "origin/main",
      "repo" : "git@github.com:huynhcntt2012/colyseus-demo.git",
      "path" : "/home/deploy",
      "post-deploy" : "npm install && npm run build && npm exec colyseus-post-deploy"
    }
  }
};
