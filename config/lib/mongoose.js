const mongoose = require('mongoose');
const Observable = require('rxjs/Observable').Observable;
const configs = require('../config');

module.exports.connect = (cb) => {
    const _this = this;

    mongoose.Promise = Observable();

    const db = mongoose.connect()
}