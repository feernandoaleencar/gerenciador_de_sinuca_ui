import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClienteDTO} from "../../../model/ClienteDTO";
import {EstadoService} from "../../estados/estado.service";
import {EstadoDTO} from "../../../model/EstadoDTO";

@Component({
    selector: 'app-cadastrar-cliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

    formCliente!: FormGroup;

    listaEstados: EstadoDTO[] = [];
    cities: City[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private estadoService: EstadoService
    ) {
    }

    ngOnInit(): void {
        this.configurarFormulario();
        this.listarEstados();
    }

    listarEstados(){
        this.estadoService.listarEstados()
            .then(resultado => {
                this.listaEstados = resultado;
            });
    }

    listarMunicipios(){
        this.estadoService.listarEstados()
            .then(resultado => {
                this.listaEstados = resultado;
            });
    }

    configurarFormulario() {
        this.formCliente = this.formBuilder.group({
            id: [],
            nome: [null, Validators.required],
            email: [null, Validators.required],
            cpf: [null, Validators.required],
            endereco_logradouro: [null, Validators.required],
            endereco_numero: [null, Validators.required],
            endereco_complemento: [null],
            endereco_bairro: [null, Validators.required],
            endereco_cep: [null, Validators.required]
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


interface City {
    name: string,
    code: string
}
