import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1',
  template : ``,
  styles: [
   `
   
   `
  ]
})
export class P1Component implements OnInit {

  public myChoice = "one";
  public name1 ="Successfully";
  public status = true ;
  public subjects =["Angular","React","Vue","Bootstrap"];

  constructor() { }

  ngOnInit(): void {
  }
}
