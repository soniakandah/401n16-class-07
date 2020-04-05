const serverError = (err, req, res, next) => {
    console.log(err);
    res.status(500);
    res.end();
};

module.exports = serverError;
