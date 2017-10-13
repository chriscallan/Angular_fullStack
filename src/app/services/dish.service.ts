import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular'; 

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
    private processHTTPMsg: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return  this.restangular.one('dishes',id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true}).map((dishes: any) => dishes[0]);
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().map(dishes => { return dishes.map(dish => dish.id) })
      .catch(error => { return this.processHTTPMsg.extractData(error); } );
  }

}
