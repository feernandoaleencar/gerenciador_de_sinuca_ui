import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClienteDTO} from "../../../model/ClienteDTO";
import {EstadoService} from "../../estados/estado.service";
import {EstadoDTO, MunicipioDTO} from "../../../model/EstadoDTO";
import {MunicipioService} from "../../municipios/municipio.service";

@Component({
    selector: 'app-cadastrar-cliente',
    templateUrl: './cadastrar-cliente.component.html',
    styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

    formCliente!: FormGroup;

    listaEstados: EstadoDTO[] = [];
    listaMunicipios: MunicipioDTO[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private estadoService: EstadoService,
        private municipioService: MunicipioService
    ) {
    }

    ngOnInit(): void {
        this.configurarFormulario();
        this.listarEstados();
    }

    listarEstados() {
        this.estadoService.listarEstados()
            .then(resultado => {
                this.listaEstados = resultado;
            });
    }

    listarMunicipios(event: any) {
        if (event.value !== null) {
            let idEstado = event.value;

            this.municipioService.listarMunicipios(idEstado)
                .then(resultado => {
                    this.listaMunicipios = resultado;
                });
        } else {
            this.listaMunicipios = [];
        }
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
