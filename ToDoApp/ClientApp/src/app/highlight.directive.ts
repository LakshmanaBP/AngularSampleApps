import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('color') color: string;
  @Input('bgColor') backGroundColor: string;
  @Input('mouseHoverColor') highlightColor: string;
  @Input('appHighlight') appHighlight:string;

  constructor(private elementRef: ElementRef) { }


  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.backgroundColor = this.backGroundColor;
  }


   //Event Name - mouseenter
   @HostListener('mouseenter') mouseover() {
     console.log('mouseenter');
    this.elementRef.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    console.log('mouseleave');
    this.elementRef.nativeElement.style.backgroundColor = this.backGroundColor;
  }

}
