import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project1';

  inputText: string='';
  destroy:boolean = false;

  OnSubmit(inputEL: HTMLInputElement){
    this.inputText=inputEL.value;
  }

  DestroyComponent(){
    this.destroy=false;
  }
}
