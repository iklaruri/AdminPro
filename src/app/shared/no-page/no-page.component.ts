import { Component, OnInit } from '@angular/core';

declare function init_plugins()

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styles: [
  ]
})

export class NoPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    init_plugins()
  }

}
