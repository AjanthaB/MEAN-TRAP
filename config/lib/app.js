'use strict';

const express = require('./express');
const chalk = require('chalk');


module.exports.init = (cb) => {
  const app = express.init();
  if(cb) cb(app);
}

module.exports.start = () => {
  const _this = this;

  _this.init((app) => {
    // TODO: get the data from configurations;
    app.listen(3000, () => {
      console.log("--------------------------");
      console.log(chalk.blue("Server is Starting on port: 3000"));
    })
  });
}
