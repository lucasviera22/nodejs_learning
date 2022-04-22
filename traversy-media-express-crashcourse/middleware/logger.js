const moment = require('moment');

//Logger middleware
const logger = (req, res, next) => {
    console.log('Hi from logger');
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
};

module.exports = logger;