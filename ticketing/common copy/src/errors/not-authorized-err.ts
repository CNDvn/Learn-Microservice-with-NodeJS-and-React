import { CustomError } from "./custom-error";

export class NotAuthorizedErr extends CustomError {
    statusCode = 401;

    constructor() {
        super("Not authorized")
        Object.setPrototypeOf(this, NotAuthorizedErr.prototype)
    }
    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [{ message: "Not authorized" }]
    }
}