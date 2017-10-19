import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, 
  OnInit, 
  OnDestroy, 
  AfterViewInit, 
  OnChanges, 
  ViewChild,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @ViewChild('searchInput') searchInput: ElementRef;
  search$: Subject<string> = new Subject<string>();
  subscription: Subscription;

  constructor() {
    // configure the class
   }

  ngOnInit(){
    // configure your component
  }
  
  ngOnDestroy(){
    // Make sure to clean up after yourself...
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(){

    // play views here and only here....

   const input = this.searchInput.nativeElement;
    this.subscription = Observable.fromEvent(input, 'input')
      .map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value)
    .subscribe(console.log);

  }

  ngOnChanges(){
    // receives simplechanges from @Input()
  }
}
