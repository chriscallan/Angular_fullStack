import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu.component';
import { MdToolbarModule, MdButtonModule, MdCheckboxModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
import { MdDialog, MdDialogRef, MdDialogModule, MdInputModule, MdOption, MdSelectModule, MdFormFieldModule } from '@angular/material';
import { MdGridTile, MatGridList, MdSpinner, MatGridTile, MatProgressSpinner, MdProgressSpinnerModule, MdProgressSpinner, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import {baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    let dishServiceStub = {
      getDishes: function(): Observable<Dish[]>{
        return Observable.of(DISHES); 
      }
    }

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, 
        FlexLayoutModule, 
        MatProgressSpinnerModule,
      RouterTestingModule.withRoutes(
        [{path: 'menu', component: MenuComponent}]
      )], 
      declarations: [ MenuComponent ], 
      providers: [
        { provide: DishService, useValue: dishServiceStub }, 
        {provide: 'BaseURL', useValue: baseURL }
      ]
    })
    .compileComponents();

    let dishService = TestBed.get(DishService); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de:      DebugElement;
    let el:      HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    
    expect(el.textContent).toContain(DISHES[0].name.toUpperCase());

  });
});
