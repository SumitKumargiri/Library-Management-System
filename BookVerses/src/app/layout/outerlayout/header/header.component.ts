import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isVisible = false;
  isShow = false;
  isLoginPopupVisible = false;
  isRegisterPopupVisible = false;

  constructor(private router: Router) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  openPopup() {
    this.isVisible = true;
  }
  openpopup(){
    this.isShow = true;
  }

  togglePopup(): void {
    this.isLoginPopupVisible = !this.isLoginPopupVisible;
    this.isRegisterPopupVisible = false; 
  }

  openPopuplr(type: 'login' | 'register'): void {
    if (type === 'login') {
      this.isLoginPopupVisible = true;
      this.isRegisterPopupVisible = false;
    } else {
      this.isRegisterPopupVisible = true;
      this.isLoginPopupVisible = false;
    }
  }

  navigateToPage(page: string): void {
    this.router.navigate([`/${page}`]);
    this.closePopups(); 
  }

  closePopups(): void {
    this.isLoginPopupVisible = false;
    this.isRegisterPopupVisible = false;
  }
}
