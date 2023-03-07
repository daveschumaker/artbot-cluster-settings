module.exports = {
  apps: [
    {
      name: 'artbot-cluster-settings',
      script: 'npm',
      args: 'start',
      restart_delay: 5000,
      env: {
        NODE_ENV: 'production',
        API_PORT: 3003
      }
    }
  ]
}
