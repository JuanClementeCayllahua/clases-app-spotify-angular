import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  //manejjador de error
  @HostListener('error') handleError():void{

    const elNativo = this.elHost.nativeElement
    // console.log('Esta imagen reventara /... ',this.elHost);
    // console.log(elNativo.src);
    
    elNativo.src = '../../../assets/img/imagenotfound.png' //'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png';
    
  }

  constructor(private elHost:ElementRef) { 

    // console.log(elHost);  
    
     
  }

}
