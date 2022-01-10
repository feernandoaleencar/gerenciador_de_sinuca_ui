import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cliente-cadastrar',
    templateUrl: './cliente-cadastrar.component.html',
    styleUrls: ['./cliente-cadastrar.component.scss']
})
export class ClienteCadastrarComponent implements OnInit {

    clienteDialog: boolean = false;
    submitted: boolean = true;

    cliente: any;

    constructor() {
    }

    ngOnInit(): void {

    }

    inserir() {
        this.cliente = {};
        this.submitted = false;
        this.clienteDialog = true;
    }

    hideDialog() {
        this.clienteDialog = false;
        this.submitted = false;
    }
}
