import { Component, OnInit } from '@angular/core';

interface Image{
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-disenio',
  templateUrl: './disenio.component.html',
  styleUrls: ['./disenio.component.css']
})
export class DisenioComponent implements OnInit{

  public images: Image[] = [
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-1.jpg',
      imageAlt: '1'
    },
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-2.jpg',
      imageAlt: '2'
    },
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-3.jpg',
      imageAlt: '3'
    },
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-4.jpg',
      imageAlt: '4'
    },
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-5.jpg',
      imageAlt: '5'
    },
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-6.jpg',
      imageAlt: '6'
    },
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-7.jpg',
      imageAlt: '7'
    },
    {
      imageSrc: '../../../../assets/img/img-Proyect/diseño-img/diseño-8.jpg',
      imageAlt: '8'
    }
  ]

  getImages(): Image[] {
    return this.images;
  }
  
  isClicked = false;  /*Por defecto esta en false para que no se vea el carrousel  */
 
  /*Funcion para que aparezca el carrousel al hacer click */
  handleClick() {
    this.isClicked = !this.isClicked;
  }

  /*Igual que con isClicked pero para que el fondo se distorcione al hacer un click y vulva al default al hacer otro click*/
  clickBlur = false;

  blurClick() {
    this.clickBlur = !this.clickBlur;
  }
  

  private currentImageIndex: number = 0;
  private selectedIndex: number | null = null;
  showCarousel: boolean = false;

  getCurrentImage(): Image {
    return this.images[this.selectedIndex !== null ? this.selectedIndex : this.currentImageIndex];
  }

  goToNextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.selectedIndex = null;
    this.showCarousel = true;
  }

  goToPreviousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.selectedIndex = null;
  }

   setSelectedIndex(index: number): void {
    this.selectedIndex = index;
    this.showCarousel = true;
  }

  ngOnInit(): void {
    window.scrollTo(0, 200); // Scroll al principio
  }
}
