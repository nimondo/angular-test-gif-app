import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {
  resultSubscription: Subscription;
  results=[];
  res;
  url;
  id;
  img;
  title;
  constructor(
    private route: ActivatedRoute, 
    private searchService: SearchService,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.resultSubscription = this.searchService.resultSubject.subscribe(
      (results: any[]) => {
        this.res = results;
        this.results = this.res.data;
        if(this.results){
          this.res = this.results.filter((e)=>e.id==id);
          this.title= this.res[0].title;
          this.id = this.res[0].id;
          this.url = this.res[0].url;
          this.img = this.res[0].images.downsized_large.url;
        }
      }
    );
    this.searchService.emitResult();
  }


}
