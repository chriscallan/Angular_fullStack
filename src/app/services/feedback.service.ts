import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Feedback } from '../shared/feedback'; 
import { RestangularModule, Restangular } from 'ngx-restangular'; 

@Injectable()
export class FeedbackService {

  feedback: Feedback; 

  constructor(private restangular: Restangular) { }

  submitFeedback(inFeedback: Feedback){
    this.feedback = inFeedback; 
    console.log("in submitFeedback");
    this.restangular.all('feedback').post(this.feedback);
  }
}
