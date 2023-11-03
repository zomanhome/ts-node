import {ValidationError} from "class-validator"
import {HttpError} from "routing-controllers"

interface MessageInterface {
    status: number
    message?: string
    code?: string
    errors?: ValidationError[]
}

export class ApiError extends HttpError {
    public removeLog: boolean
    protected error: MessageInterface

    constructor(status = 500, error: Omit<MessageInterface, "status">) {
        super(status)

        this.error = {...error, status, code: error.code || "INTERNAL ERROR"}
        this.name = "ApiError"
        this.message = error.message || ""
    }

    public toJSON = (): MessageInterface => {
        return this.error
    }
}