import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/comment';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  commentForm: FormGroup; 
  comment: Comment; 
  dish: Dish;
  dishIds: number[];
  prev: number; 
  next: number;

  formErrors = {
    'author': '', 
    'comment': ''
  }

  validationMessages = {
    'author': {
      'required': 'Author is required.', 
      'minlength': 'Author must be at least 2 characters long.'
    },
    'comment': {
      'required': 'Comment is required.', 
      'minlength': 'Comment must be at least 2 characters long.'
    }
  }

  constructor(private dishservice: DishService, 
    private route: ActivatedRoute, 
    private location: Location, 
    private fb: FormBuilder, 
    @Inject('BaseURL') private BaseURL:string) {
      this.createForm(); 
     }

  ngOnInit() {    
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  createForm(): void {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]], 
      rating: ['', [Validators.pattern]], 
      comment: ['', [Validators.required, Validators.minLength(2)]]
    });
    
    this.commentForm.valueChanges.subscribe(comment => this.onValueChanged(comment));
    this.onValueChanged(); //re-set the validation messages
  }

  onSubmit() {
    this.comment = this.commentForm.value; 
    this.comment.date = new Date().getDate().toString(); 
    this.dish.comments.push(this.comment); 
    this.commentForm.reset({
      author: '', 
      rating: '', 
      comment: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {return;}
    const myForm = this.commentForm; 
    for (const field in this.formErrors){
      this.formErrors[field] = ''; 
      const control = myForm.get(field); 
      if (control && control.dirty && !control.valid){
        const messages = this.validationMessages[field]; 
        for (const key in control.errors){
          this.formErrors[field] += messages[key] + ' '; 
        }
      }
    }
  }
    
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack(): void {
    this.location.back(); 
  }

}
