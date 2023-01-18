import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {ClienteDTO} from "../../../model/ClienteDTO";
import {ClienteService} from "../cliente.service";

@Component({
    selector: 'app-consultar-cliente',
    templateUrl: './consultar-cliente.component.html',
    styleUrls: ['./consultar-cliente.component.scss']
})
export class ConsultarClienteComponent implements OnInit {

    clientes: ClienteDTO[] = [];

    constructor(
        private router: Router,
        private title: Title,
        private clienteService: ClienteService,
    ) {
    }

    ngOnInit(): void {
        this.title.setTitle('Consultar Clientes');
        this.pesquisar();
    }

    irParaPagina() {
        this.router.navigate(['/clientes/novo'])
    }

    pesquisar(){
        this.clienteService.listarClientes()
            .then(resultado => {
                this.clientes = resultado;
            });
    }

}
