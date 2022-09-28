import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {clientesRoutingModule} from "./clientes-routing.module";
import {CadastrarClienteComponent} from "./cadastrar-cliente/cadastrar-cliente.component";
import {ConsultarClienteComponent} from "./consultar-cliente/consultar-cliente.component";


@NgModule({
    declarations: [
        CadastrarClienteComponent,
        ConsultarClienteComponent
    ],
    imports: [
        SharedModule,
        clientesRoutingModule,
    ],
    exports: []
})
export class ClienteModule {
}
