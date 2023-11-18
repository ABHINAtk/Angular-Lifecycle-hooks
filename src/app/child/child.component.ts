import { Component,Input,OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() value:string='Abhina'


  constructor(){
    console.log("constructor called");
    console.log(this.value);
  }

  ngOnInit(){
    console.log('ngOnInit called');
    console.log(this.value);
  }

  ngOnChanges(change:SimpleChange){  
     console.log('ngOnChanges called');
     console.log(change);
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContenChecked called');
  }

  ngAfterViewInit(){
    console.log(' ngAfterViewInit called');
  }
  ngAfterViewChecked(){
    console.log('  ngAfterViewChecked called');
  }

  /*ngOnDestroy(){
    console.log("ngOnDestroy called")
  }*/
}

