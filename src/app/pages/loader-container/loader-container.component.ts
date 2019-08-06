import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-container',
  templateUrl: './loader-container.component.html',
  styleUrls: ['./loader-container.component.scss']
})
export class LoaderContainerComponent implements OnInit {

  @Input() isShowCleanMsg: boolean = false;
  @Input() isShowLoader: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
