import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ClienteDTO} from "../../model/ClienteDTO";
import {firstValueFrom} from "rxjs";

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

        return firstValueFrom(
            this.http.get(this.clienteUrl))
            .then((response: any) => {
                return response;
            });
    }

    adicionar(clienteDTO: ClienteDTO): Promise<ClienteDTO> {
        return firstValueFrom(this.http.post<ClienteDTO>(this.clienteUrl, clienteDTO));
    }
}
