import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetbackgroundyellow]'
})
export class SetbackgroundyellowDirective {

  constructor(private element:ElementRef, private render:Renderer2){
    //this.element=element;
}
ngOnInit(){
   // this.render.setStyle(this.element.nativeElement,'backgroundColor','brown')
    this.render.addClass(this.element.nativeElement,'container')
}

}
