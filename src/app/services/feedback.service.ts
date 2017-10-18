import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Feedback } from '../shared/feedback'; 
import { RestangularModule, Restangular } from 'ngx-restangular'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedbackService {

  feedback: Feedback; 
  myresp = ""; 

  constructor(private restangular: Restangular) { }

  submitFeedback(inFeedback: Feedback){
    this.myresp = ""; 
    this.feedback = inFeedback; 
    return this.restangular.all('feedback').post(inFeedback);
  }
  
  getFeedback(id: number): Observable<Feedback> {
    return  this.restangular.one('feedback', id).get();
  }
}
