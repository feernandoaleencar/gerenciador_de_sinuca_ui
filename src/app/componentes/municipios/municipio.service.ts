import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MunicipioService {

    municipioUrl: string;

    constructor(
        private http: HttpClient,
    ) {
        this.municipioUrl = `${environment.apiUrl}/municipios`;
    }

    listarMunicipios(idEstado: number): Promise<any> {

        return this.http.get(this.municipioUrl + "/" + idEstado)
            .toPromise()
            .then((response: any) => response)
    }
}
