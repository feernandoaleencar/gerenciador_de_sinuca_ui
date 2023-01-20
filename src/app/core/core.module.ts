import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";


@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,

        ToastModule,
        ConfirmDialogModule,
    ],
    exports: [
        NavbarComponent,

        ToastModule,
        ConfirmDialogModule,
    ],
    providers: [
        MessageService,
        ConfirmationService
    ],
})
export class CoreModule {
}
