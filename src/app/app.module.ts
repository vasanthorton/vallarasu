import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent, MyClass } from './homepage/homepage.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { VasanthComponent } from './vasanth/vasanth.component'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    VasanthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [
    MyClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
