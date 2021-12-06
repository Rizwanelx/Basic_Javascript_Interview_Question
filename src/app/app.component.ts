import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  arr = [7, 5, 3, 6, 9, 12];
  myObj = {
    name: 'rizwan',
    id: 1,
    address: 'noida',
  };
  ngOnInit() {
    
    console.log(this.arr);
    let swapArrayElements = function (a, x, y) {
      if (a.length === 1) return a;
      a.splice(y, 1, a.splice(x, 1, a[y])[0]);
      // console.log(a.splice(y, 1, a.splice(x, 1, a[y])[0]));
      return a;
    };

    console.log(swapArrayElements(this.arr, 2, 4)); //=> [7,5,9,6,3,12]

    this.chekKey(this.myObj);
    console.log(this.myObj);
  }

  chekKey(obj) {
    if (Object.prototype.hasOwnProperty.call(this.myObj, 'name')) {
      this.myObj.name = 'khan';
    }
  }
}
