import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular'; 

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular, 
    private processHttpmsg: ProcessHttpmsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList(); 
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotion', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true}).map((promotions: any) => promotions[0]);
  }

  getPromotionIds(): Observable<Promotion> | any {
    return this.getPromotions().map(promotions => { return promotions.map(promotion => promotion.id) })
    .catch(error => { return this.processHttpmsg.extractData(error); } );
  }
}