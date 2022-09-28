import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-consultar-cliente',
    templateUrl: './consultar-cliente.component.html',
    styleUrls: ['./consultar-cliente.component.scss']
})
export class ConsultarClienteComponent implements OnInit {

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

    irParaPagina() {
        this.router.navigate(['/clientes/novo'])
    }

}
