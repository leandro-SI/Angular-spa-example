import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cesarBank';

  transferencias: any[] = [];

  transferir($event) {
    console.log($event)
    this.transferencias.push($event)

  }

}
