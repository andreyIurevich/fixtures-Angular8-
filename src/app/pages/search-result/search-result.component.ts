import { Component, OnInit, Input } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() searchResults: Fixture[];
  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];

  constructor() { }

  ngOnInit() {
  }

}
