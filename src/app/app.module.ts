import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PaginatorModule} from "primeng/paginator";
import {InputMaskModule} from "primeng/inputmask";
import {FileUploadModule} from "primeng/fileupload";
import {TooltipModule} from "primeng/tooltip";
import {SharedModule} from "./shared/shared.module";
import {ClienteModule} from "./feature/cliente/cliente.module";
import {SinucaModule} from "./feature/sinuca/sinuca.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,

        SharedModule,

        ClienteModule,
        SinucaModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
