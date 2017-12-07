import { ContatosListaComponent } from './contatos-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
      ContatosListaComponent
  ],
  exports: [
      ContatosListaComponent
  ]
})

export class ContatosModule{}