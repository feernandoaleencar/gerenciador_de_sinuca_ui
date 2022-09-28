import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {PaginatorModule} from "primeng/paginator";
import {InputMaskModule} from "primeng/inputmask";
import {FileUploadModule} from "primeng/fileupload";
import {TooltipModule} from "primeng/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageComponent} from './message/message.component';
import {MessageModule} from "primeng/message";

@NgModule({
    declarations: [
        MessageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MessageModule,

        InputTextModule,
        InputMaskModule,



        CardModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        DialogModule,
        PaginatorModule,
        FileUploadModule,
        TooltipModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MessageComponent,

        InputTextModule,
        InputMaskModule,



        CardModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        DialogModule,
        PaginatorModule,
        InputMaskModule,
        FileUploadModule,
        TooltipModule
    ]
})
export class SharedModule {
}
