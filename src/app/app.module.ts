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

@NgModule({
  declarations: [
    AppComponent,
    ClienteListarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InputTextModule,
        CardModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
