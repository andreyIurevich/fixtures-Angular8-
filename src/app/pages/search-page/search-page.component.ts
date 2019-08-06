import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { Observable, pipe } from 'rxjs';
import { FixturesService } from 'src/app/services/fixtures.service';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators'

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

  constructor(private fixturesService: FixturesService) { }

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
