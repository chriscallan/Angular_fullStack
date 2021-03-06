import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Leader } from '../shared/leader'; 
import { LEADERS } from '../shared/leaders'; 

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular'; 

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular, 
    private processHttpmsg: ProcessHttpmsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList(); 
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get(); 
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true}).map((leaders: any) => leaders[0]);
  }

  getDishIds(): Observable<number[] | any> {
    return this.getLeaders().map(leaders => { return leaders.map(leader => leader.id) })
      .catch(error => { return this.processHttpmsg.extractData(error); } );
  }
}
