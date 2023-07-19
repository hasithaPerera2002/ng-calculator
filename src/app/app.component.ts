import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'untitled';
  displayFunction: string = 'No Function';
  displayNumber: number = 0;

  calc(val: any) {
    switch (val) {
      case 1:
        console.log(val);
        break;
      case 2:
        console.log(val);
        break;
      case 3:
        console.log(val);
        break;
      case 4:
        console.log(val);
        break;
      case 5:
        console.log(val);
        break;
      case 6:
        console.log(val);
        break;
      case 7:
        console.log(val);
        break;
      case 8:
        console.log(val);
        break;
      case 9:
        console.log(val);
        break;
      case 0:
        console.log(val);
        break;
      case "00":
        console.log(val);
        break;
      case "+":
        console.log(val);
        break;
      case "-":
        console.log(val);
        break;
      case "/":
        console.log(val);
        break;
      case "*":
        console.log(val);
        break;
      case "DEL":
        console.log(val);
        break;
      case "C":
        console.log(val);
        break;
      case "=":
        console.log(val);
        break;
      case ".":
        console.log(val);
        break;

    }
  }
}
