import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Sinuca_cadastrarComponent} from "./sinuca-cadastrar/sinuca_cadastrar.component";
import {SinucaListarComponent} from "./sinuca-listar/sinuca-listar.component";
import {SinucaMovimentarComponent} from "./sinuca-movimentar/sinuca-movimentar.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        Sinuca_cadastrarComponent,
        SinucaListarComponent,
        SinucaMovimentarComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        Sinuca_cadastrarComponent,
        SinucaListarComponent,
        SinucaMovimentarComponent
    ]
})
export class SinucaModule {
}
