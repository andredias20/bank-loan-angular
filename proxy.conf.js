const PROXY_CONFIG = [
  {
    context:['/api'],
    target: 'http://localhost:4001/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG
