import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Immovable } from './immovable.interface'

@Injectable()
export class ImmovableService {

    private state : Observable<Immovable[]> // Simulating DB state using memory

    constructor(
        private http: Http
    ) { }

    list() : Observable<Immovable[]> {

        let url = "http://demo1183916.mockable.io/anuncio";

        return this.state = this.http.get(url)
            .map(res => res.json().result)
            .catch(this.handleError);
    }

    add(immovable : Immovable) : Observable<Immovable> {
        let url = "http://demo1183916.mockable.io/anuncio"
        let headers = new Headers ({ "authentication": "egeniusfounders2016" })
        let options = new RequestOptions({ "headers": headers })

        // Mock the call
        return this.http.post(url, immovable, options)
            .map(res => immovable)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}