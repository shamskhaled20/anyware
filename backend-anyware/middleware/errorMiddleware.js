const sendErrorForDev = (res, err) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorForProd = (res, err) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};

const globalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    console.error(err);

    if (process.env.NODE_ENV === 'development') {
        sendErrorForDev(res, err);
    } else {
        sendErrorForProd(res, err);
    }
};

module.exports = globalError;

