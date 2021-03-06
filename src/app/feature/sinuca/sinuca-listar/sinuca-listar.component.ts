import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sinuca-listar',
    templateUrl: './sinuca-listar.component.html',
    styleUrls: ['./sinuca-listar.component.scss']
})
export class SinucaListarComponent implements OnInit {

    sinuca = [{
        "cpf": "1000",
        "telefone": "f230fh0g3",
        "nome": "Bamboo Watch",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "cidade": "Accessories",
        "quantity": 24,
        "status": "INSTOCK",
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
            "status": "INSTOCK",
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
            "status": "LOWSTOCK",
            "rating": 3
        }]

    status: any[] | undefined;

    constructor() {
    }

    ngOnInit(): void {
        this.status = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
    }

    editarSinuca(sinuca: any) {

    }

    deletarSinuca(sinuca: any){
    }
}
