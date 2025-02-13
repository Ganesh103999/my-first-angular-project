import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  headline = 'Welcome to my first Angular App!';
    signalMessage = signal('Hello, World!');

 
  changeMessage(){
    console.log('changeMessge called');
    //
    this.headline='You clicked the button!';
  }

}
