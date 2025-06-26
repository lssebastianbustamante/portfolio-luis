import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';

const handleDuplicateFieldsDB = (err: any) => {
    const value = err.keyValue.name;
    const message = `Duplicate field value: ${value}. Please use another value!`;

    return new AppError(message, 400);
};

const handleCastError = (err: any) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400);
};

const sendError = (err: any, res: Response) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Somethig went very wrong'
        });
    }
}

export default (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    let error = {...err};
    if(error.kind === 'ObjectId') error = handleCastError(error);
    if(error.code === 11000) error = handleDuplicateFieldsDB(error);
    sendError(error, res)
};