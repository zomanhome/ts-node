import {ExpressMiddlewareInterface, Middleware} from "routing-controllers"
import {NextFunction, Request, Response} from "express"

@Middleware({type: "after"})
export class HTTPResponseLogger implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: NextFunction) {
        const {originalUrl, method} = request
        const {statusCode} = response

        console.log(`Response request: ${method}, ${originalUrl}, ${statusCode}`)

        next()
    }
}