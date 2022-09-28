import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ConsultarClienteComponent} from "./consultar-cliente/consultar-cliente.component";
import {CadastrarClienteComponent} from "./cadastrar-cliente/cadastrar-cliente.component";

const routes: Routes = [
    {
        path: '',
        component: ConsultarClienteComponent,
    },
    {
        path: 'novo',
        component: CadastrarClienteComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class clientesRoutingModule {
}
