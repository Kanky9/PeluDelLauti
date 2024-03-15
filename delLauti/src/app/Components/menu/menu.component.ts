import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  isClicked: boolean = false; 
  
  ngOnInit(): void {

  }
  
  onElementClick() {
    this.isClicked = !this.isClicked;
  }

  scrollToBottomTurnos() {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }

  scrollToBottomAyuda() {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }
}