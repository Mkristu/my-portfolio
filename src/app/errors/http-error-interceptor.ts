import {

    HttpEvent,

    HttpInterceptor,

    HttpHandler,

    HttpRequest,

    HttpResponse,

    HttpErrorResponse

} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

//source https://rollbar.com/blog/error-handling-with-angular-8-tips-and-best-practices/
export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)

            .pipe(

                retry(1),

                catchError((error: HttpErrorResponse) => {

                    let errorMessage = '';

                    if (error.error instanceof ErrorEvent) {

                        // client-side error

                        errorMessage = `Unable to send message.\nPlease check if you've filled in all the required fields and try again.`;

                    } else {

                        // server-side error

                        errorMessage = `Error Code: ${error.status}\nMessage: Unable to send message.`;

                    }

                    window.alert(errorMessage);

                    return throwError(errorMessage);

                })

            )

    }

}