import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sinuca-movimentar',
    templateUrl: './sinuca-movimentar.component.html',
    styleUrls: ['./sinuca-movimentar.component.scss']
})
export class SinucaMovimentarComponent implements OnInit {
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
