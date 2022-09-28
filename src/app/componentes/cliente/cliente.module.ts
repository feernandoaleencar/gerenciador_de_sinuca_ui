import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteCadastrarComponent} from "./cliente-cadastrar/cliente-cadastrar.component";
import {ClienteListarComponent} from "./cliente-listar/cliente-listar.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        ClienteCadastrarComponent,
        ClienteListarComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ClienteModule {
}
