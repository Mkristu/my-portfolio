import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollTo(section: string) {
    let el = document.getElementById(section);
    el.scrollIntoView();
  }
}
