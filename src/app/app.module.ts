import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdButtonModule, MdCheckboxModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
import { MdDialog, MdDialogRef, MdDialogModule, MdInputModule, MdOption, MdSelectModule, MdFormFieldModule } from '@angular/material';
import { MdSlideToggleModule, MdSliderModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
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
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { FeedbackService } from './services/feedback.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { baseURL } from './shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular'; 
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive'; 

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
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule, 
    AppRoutingModule,
    MdToolbarModule, 
    MdButtonModule, 
    MdCheckboxModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule, 
    MdDialogModule, 
    MdInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MdSliderModule, 
    MdFormFieldModule, 
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [DishService, 
    PromotionService, 
    LeaderService, 
    { provide: 'BaseURL', useValue: baseURL }, 
    ProcessHttpmsgService, 
    FeedbackService],
  entryComponents: [ LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
