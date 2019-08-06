import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FixturesService } from 'src/app/services/fixtures.service';
import { Fixture } from 'src/app/models/fixture';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() loaderVisible = new EventEmitter<boolean>();
  @Output() cleanMsgVisible = new EventEmitter<boolean>();
  @Output() searchResults$ = new EventEmitter<Fixture[]>();

  show: boolean = true;
  hide: boolean = false;

  constructor(private fixturesService: FixturesService) { }

  onShowLoader() {
    this.loaderVisible.emit(this.show);
  }

  onHideLOader() {
    this.loaderVisible.emit(this.hide);
  }

  onShowCleanMsg() {
    this.cleanMsgVisible.emit(this.show);
  }

  onHideCleanMsg() {
    this.cleanMsgVisible.emit(this.hide);
  }

  onEnter(value: string) {
    this.onShowLoader();
    this.onHideCleanMsg();
    this.fixturesService.getFixtures(value).subscribe((data: Fixture[]) => {
      this.searchResults$.emit(data);
      this.onHideLOader();
      if (data.length === 0) {
        this.onShowCleanMsg();
      }
    });
  }

  ngOnInit() {
  }

}
