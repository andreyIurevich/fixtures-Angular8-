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

  onEnter(value: string) {
    this.isShowLoader = true;
    this.isShowCleanMsg = false;
    this.fixturesService.getFixtures(value).subscribe((data: Fixture[]) => {
      this.searchResults$ = data;
      this.isShowLoader = false;
      if (this.searchResults$.length === 0) {
        this.isShowCleanMsg = true;
      }
    });
  }

  ngOnInit() {

  }

}
