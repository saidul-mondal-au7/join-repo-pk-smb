dbPassword = `mongodb+srv://${process.env.NAME}`+ encodeURIComponent(process.env.PASSWORD) + `${process.env.CLUSTER}.mongodb.net/test?retryWrites=true`;
module.exports = {
    mongoURI: dbPassword
};
// 