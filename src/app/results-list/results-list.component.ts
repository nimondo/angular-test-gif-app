import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  resultsSubscription: Subscription;
  results=[];
  res;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.resultsSubscription = this.searchService.resultSubject.subscribe(
      (results: any[]) => {
        this.res = results;
        this.results = this.res.data;
      }
    );
    this.searchService.emitResult();
  }

}
