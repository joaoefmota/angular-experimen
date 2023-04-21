import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  obj = {
    name: "Object",
    print: function () {
      console.log(this)
    },
  };

  constructor() {
    this.obj.print();
  }
}


