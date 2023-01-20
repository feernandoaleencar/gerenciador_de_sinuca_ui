import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClienteDTO} from "../../../model/ClienteDTO";
import {EstadoService} from "../../estados/estado.service";
import {EnderecoDTO, EstadoDTO, MunicipioDTO} from "../../../model/EstadoDTO";
import {MunicipioService} from "../../municipios/municipio.service";
import {ClienteService} from "../cliente.service";
import {MessageService} from "primeng/api";

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
        private municipioService: MunicipioService,
        private clienteService: ClienteService,
        private messageService: MessageService
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
            endereco_cep: [null, Validators.required],
            endereco_municipio: [null, Validators.required],
            endereco_estado: [null, Validators.required]
        });
    }

    salvar() {
        const cliente = this.getCliente();

        this.clienteService.adicionar(cliente)
            .then(Cliente => {
                this.messageService.add({severity: 'success', detail: 'Cliente adicionado com sucesso!'});
                // this.formCliente.reset();
                // this.router.navigate(['/clientes'])
            });
    }

    private getCliente() {
        const cliente = this.formCliente.value as ClienteDTO;
        cliente.endereco = new EnderecoDTO();
        cliente.endereco.cep = this.formCliente.get('endereco_cep')?.value;
        cliente.endereco.logradouro = this.formCliente.get('endereco_logradouro')?.value;
        cliente.endereco.numero = this.formCliente.get('endereco_numero')?.value;
        cliente.endereco.complemento = this.formCliente.get('endereco_complemento')?.value;
        cliente.endereco.bairro = this.formCliente.get('endereco_bairro')?.value;
        cliente.endereco.municipio = new MunicipioDTO();
        cliente.endereco.municipio.id = this.formCliente.get('endereco_municipio')?.value;
        return cliente;
    }

    novo() {
        this.formCliente.reset(new ClienteDTO());
        this.router.navigate(['/clientes/novo']);
    }

    voltarParaPagina() {
        this.router.navigate(['/clientes'])
    }


}
