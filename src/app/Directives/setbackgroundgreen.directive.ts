import { Directive, ElementRef } from "@angular/core";


@Directive(
    {
        selector:'[setbackGround]'
    }
)
export class SetBackGroundDirective{
    //private element:ElementRef=undefined;
    constructor(private element:ElementRef){
        //this.element=element;
    }
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor= 'Red';
    }
}