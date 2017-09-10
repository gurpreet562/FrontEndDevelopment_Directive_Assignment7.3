import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
     HighlightDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
