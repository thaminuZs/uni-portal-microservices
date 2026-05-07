class AppError extends Error {
    statusCode: Number

    constructor(message: string = "internal server error", statusCode=501) {
        super(message);
        this.statusCode = statusCode;
    }
}