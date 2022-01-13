import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinuca',
  templateUrl: './sinuca_cadastrar.component.html',
  styleUrls: ['./sinuca_cadastrar.component.scss']
})
export class Sinuca_cadastrarComponent implements OnInit {

    sinucaDialog: boolean = false;
    submitted: boolean = true;

    cliente: any;

    constructor() {
    }

    ngOnInit(): void {

    }

    inserir() {
        this.cliente = {};
        this.submitted = false;
        this.sinucaDialog = true;
    }

}
