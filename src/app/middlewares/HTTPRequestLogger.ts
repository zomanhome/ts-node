import {ExpressMiddlewareInterface, Middleware} from "routing-controllers"
import {NextFunction, Request, Response} from "express"

@Middleware({type: "before"})
export class HTTPRequestLogger implements ExpressMiddlewareInterface {
    use(request: Request, _response: Response, next: NextFunction) {
        const {originalUrl, method, body} = request

        console.log(`Received request: ${method}, ${originalUrl}, ${JSON.stringify(body)}`)

        next()
    }
}