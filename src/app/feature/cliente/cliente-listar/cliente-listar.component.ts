import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cliente-listar',
    templateUrl: './cliente-listar.component.html',
    styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit {
    clienteDialog: boolean = false;
    submitted: boolean = true;

    cliente = [{
        "cpf": "1000",
        "telefone": "f230fh0g3",
        "nome": "Bamboo Watch",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "cidade": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
    },
        {
            "cpf": "1001",
            "telefone": "nvklal433",
            "nome": "Black Watch",
            "description": "Product Description",
            "image": "black-watch.jpg",
            "price": 72,
            "cidade": "Accessories",
            "quantity": 61,
            "inventoryStatus": "INSTOCK",
            "rating": 4
        },
        {
            "cpf": "1002",
            "telefone": "zz21cz3c1",
            "nome": "Blue Band",
            "description": "Product Description",
            "image": "blue-band.jpg",
            "price": 79,
            "cidade": "Fitness",
            "quantity": 2,
            "inventoryStatus": "LOWSTOCK",
            "rating": 3
        }]


    constructor() {
    }

    ngOnInit(): void {
    }

    editarCliente(product: any) {

    }

    deletarCliente(product: any) {

    }
}
