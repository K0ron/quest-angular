import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective {
  @HostBinding('style.backgroundColor') myBackGroundColor: string | undefined;

  constructor() {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myBackGroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myBackGroundColor = 'transparent';
  }
}
