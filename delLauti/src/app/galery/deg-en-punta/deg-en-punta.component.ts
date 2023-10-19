import { Component, OnInit } from '@angular/core';

interface Image{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-deg-en-punta',
  templateUrl: './deg-en-punta.component.html',
  styleUrls: ['./deg-en-punta.component.css']
})
export class DegEnPuntaComponent implements OnInit {

  public images: Image[] = [
    {
      imageSrc: '../../../assets/img/img-Proyect/enPunta-img/enPunta-1.jpg',
      imageAlt: '1'
    },
    {
      imageSrc: '../../../assets/img/img-Proyect/enPunta-img/enPunta-2.jpg',
      imageAlt: '2'
    },
    {
      imageSrc: '../../../assets/img/img-Proyect/enPunta-img/enPunta-3.jpg',
      imageAlt: '3'
    },
    {
      imageSrc: '../../../assets/img/img-Proyect/enPunta-img/enPunta-4.jpg',
      imageAlt: '4'
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