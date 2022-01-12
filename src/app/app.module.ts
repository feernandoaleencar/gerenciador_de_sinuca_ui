import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { ClienteListarComponent } from './feature/cliente/cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './feature/cliente/cliente-cadastrar/cliente-cadastrar.component';
import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {PaginatorModule} from "primeng/paginator";
import {InputMaskModule} from "primeng/inputmask";
import {FileUploadModule} from "primeng/fileupload";

@NgModule({
  declarations: [
    AppComponent,
    ClienteListarComponent,
    ClienteCadastrarComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        InputTextModule,
        CardModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        DialogModule,
        PaginatorModule,
        InputMaskModule,
        FileUploadModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
