var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var DISH = {
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
        {
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
        },
        {
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
        },
        {
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
        },
        {
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
        },
        {
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
        }
    ]
};
var DishdetailComponent = (function () {
    function DishdetailComponent() {
        this.dish = DISH;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
    };
    return DishdetailComponent;
}());
DishdetailComponent = __decorate([
    Component({
        selector: 'app-dishdetail',
        templateUrl: './dishdetail.component.html',
        styleUrls: ['./dishdetail.component.scss']
    }),
    __metadata("design:paramtypes", [])
], DishdetailComponent);
export { DishdetailComponent };
//# sourceMappingURL=dishdetail.component.js.map