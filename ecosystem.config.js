module.exports = {
  apps: [
    {
      name: 'artbot-cluster-settings',
      script: 'npm',
      args: 'start',
      restart_delay: 3003,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
