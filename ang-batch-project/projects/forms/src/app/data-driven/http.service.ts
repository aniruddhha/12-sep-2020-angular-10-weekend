import { Invoice } from './inv.data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyHttpService {

    constructor(
        private http: HttpClient
    ) { }

    saveInvoice(inv: Invoice) {
        console.log('in Service')
        console.log(inv)
        return this.http.post('https://reqres.in/api/users', inv)
    }

    listInvoices() {
        return this.http.get('https://reqres.in/api/users')
    }
}