import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    exibindoMenu: boolean = false;
    usuarioLogado: string = 'Fernando Alencar';

    constructor() { }

    ngOnInit(): void {
    }

    exibirMenu(){
        this.exibindoMenu = !this.exibindoMenu
    }

}
