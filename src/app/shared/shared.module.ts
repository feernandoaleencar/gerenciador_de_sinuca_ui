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

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        InputTextModule,
        CardModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        DialogModule,
        PaginatorModule,
        InputMaskModule,
        FileUploadModule,
        TooltipModule,
    ],
    exports: [
        CommonModule,

        InputTextModule,
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
