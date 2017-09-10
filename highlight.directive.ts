import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef) {
      
    }
    @HostListener('mouseenter') onMouseEnter() {
  this.highlight.isOdd('Red');
}
@HostListener('mouseenter') onMouseEnter() {
  this.highlight.isEven('Green');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
