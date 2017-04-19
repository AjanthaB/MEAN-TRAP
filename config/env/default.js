'user strict';

module.exports = {
  app: {
    title: 'MEAN-TRAP',
    description: 'Full-Stack javascript with MongoDB, Express, Angular 2, Node.js and Bootstrap',
    keywords: 'mongodb, express, angular 2, node.js, passport'
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0.0',
  domain: process.env.DOMAIN,
  sessionCookie: {
    // session expiration is set to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    httpOnly: true,
    httpsMode: false
  },
  sesstionSecret: process.env.SESSION_SECRET || 'MEAN-TRAP',
  
}