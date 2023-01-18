import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    clienteUrl: string;

    constructor(
        private http: HttpClient,
    ) {
        this.clienteUrl = `${environment.apiUrl}/clientes`;
    }

    listarClientes(): Promise<any> {

        return this.http.get(this.clienteUrl)
            .toPromise()
            .then((response: any) => response)
    }
}
