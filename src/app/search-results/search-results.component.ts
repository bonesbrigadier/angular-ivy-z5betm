import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  showResults = false;

  searchResults$ = this.searchService.posts$;
  showResults$ = this.searchService.startedSearch$;

  constructor(private searchService: SearchService){

  }

}