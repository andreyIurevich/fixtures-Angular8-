import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchResults$: Fixture[];

  searchField = new FormControl();

  isShowLoader: boolean = false;
  isShowCleanMsg: boolean = false;

  constructor() { }

  onChangeLoaderVisible($event: boolean) {
    this.isShowLoader = $event;
  }

  onChangeCleanMsgVisible($event: boolean) {
    this.isShowCleanMsg = $event;
  }

  getSearchData($event: Fixture[]) {
    this.searchResults$ = $event;
  }

  ngOnInit() {

  }

}
