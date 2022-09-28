import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClienteDTO} from "../../../model/ClienteDTO";

@Component({
    selector: 'app-cadastrar-cliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

    formCliente!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.configurarFormulario();
    }

    configurarFormulario() {
        this.formCliente = this.formBuilder.group({
            id: [],
            nome: [null, Validators.required],
            email: [null, Validators.required],
            cpf: [null, Validators.required],
            logradouro: [null, Validators.required],
            numero: [null, Validators.required],
            complemento: [null, Validators.required],
            bairro: [null, Validators.required],
            cep: [null, Validators.required]
        });
    }

    salvar() {
    }

    novo() {
        this.formCliente.reset(new ClienteDTO());
        this.router.navigate(['/clientes/novo']);
    }

    voltarParaPagina() {
        this.router.navigate(['/clientes'])
    }



}
