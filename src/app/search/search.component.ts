import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { debounceTime, delay } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: FormControl = new FormControl();

  search$ = this.searchQuery.valueChanges.pipe(
    tap(x => this.searchService.startedSearch()),
    delay(2000),
    tap(searchTerm => this.searchService.search(searchTerm))
  );

  constructor(private searchService: SearchService){

  }
}
