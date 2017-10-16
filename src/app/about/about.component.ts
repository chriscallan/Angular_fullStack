import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'], 
  host: {
    '[@flyInOut]': 'true', 
    'style': 'display: block;'
  }, 
  animations: [
    flyInOut(), 
    expand()
  ]
})

export class AboutComponent implements OnInit {

  leaders: Leader[]; 
  ldrErrMsg: string; 

  constructor(private leaderservice: LeaderService, 
    private route: ActivatedRoute, 
    private location: Location, 
    @Inject('BaseURL') private BaseURL:string) { }

  ngOnInit() {
    this.leaderservice.getLeaders().subscribe(leaders => (this.leaders = leaders), 
          ldrErrMsg => (this.ldrErrMsg = ldrErrMsg));
  }

  goBack(): void {
    this.location.back(); 
  }

}
