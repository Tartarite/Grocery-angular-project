import { Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {
p:any
  constructor() { }
  @Output() appTestdirective: EventEmitter<any> = new EventEmitter<any>
  ngOnInit(){
    this.appTestdirective.emit('dummy')
  }
}
