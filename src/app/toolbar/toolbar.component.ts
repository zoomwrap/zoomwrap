import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './toolbar.component.html',
})

export class ToolbarComponent {
dropdownOpen = false;
menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  if (!this.menuOpen) {
    this.dropdownOpen = false;
  }
}

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}
closeDropdown() {
  this.dropdownOpen = false;
    this.menuOpen = false;
}
isDesktop(): boolean {
  return window.innerWidth >= 768;
}
ngOnInit() {
  window.addEventListener('resize', () => {
    if (this.isDesktop()) {
      this.dropdownOpen = false; // Luk dropdown på desktop ved resize
    }
  });
}
}
