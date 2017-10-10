import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdButtonModule, MdCheckboxModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
import { MdDialog, MdDialogRef, MdDialogModule, MdInputModule, MdOption, MdSelectModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule, 
    AppRoutingModule,
    MdToolbarModule, 
    MdButtonModule, 
    MdCheckboxModule,
    MdSelectModule,
    MdSlideToggleModule,
    MatListModule, 
    MatGridListModule, 
    MatCardModule, 
    MdDialogModule, 
    MdInputModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [DishService, PromotionService, LeaderService],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
