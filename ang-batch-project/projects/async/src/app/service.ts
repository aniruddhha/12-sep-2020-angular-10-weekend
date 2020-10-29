import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AsyncService {

    fbCom(): Promise<any> {
        return new Promise<any>((res, rej) => {

            // e.g.
            setTimeout(
                () => {
                    res('success')
                },
                2500
            )
            /*// pending 
            const conSts = 1

            if (conSts)
                res('success')
            else
                rej('fail')
                */
        })
    }

    gpsObserver(): Observable<any> {

        // you need to upload 200 files 
        return Observable.create((em: Subscriber<any>) => {
            // long running task 
            // heavy computation 

            for (let i = 0; i < 200; i++) {
                em.next('my data') // pp
                //em.error(new Error('This is error')) 
            }
            em.complete()
        })
    }
}