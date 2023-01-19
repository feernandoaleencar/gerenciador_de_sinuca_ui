import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EstadoService {

    estadoUrl: string;

    constructor(
        private http: HttpClient,
    ) {
        this.estadoUrl = `${environment.apiUrl}/estados`;
    }

    listarEstados(): Promise<any> {

        return this.http.get(this.estadoUrl)
            .toPromise()
            .then((response: any) => response)
    }
}
