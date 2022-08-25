import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: FormControl = new FormControl();

  search$ = this.searchQuery.valueChanges.pipe(
    debounceTime(2000),
    tap((x) => console.log(x)),
    tap(searchTerm => this.searchService.search(searchTerm))
  );

  // searchResults$ = this.searchService.posts$;

  constructor(private searchService: SearchService){

  }
}
