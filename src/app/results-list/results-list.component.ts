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
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
