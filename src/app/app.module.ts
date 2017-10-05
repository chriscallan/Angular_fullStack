import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MdToolbarModule, MdButtonModule, MdCheckboxModule, MatListModule, MatGridListModule, MatCardModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule, 
    MdToolbarModule, 
    MdButtonModule, 
    MdCheckboxModule,
    MatListModule, 
    MatGridListModule, 
    MatCardModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
