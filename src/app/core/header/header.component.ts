import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount = 0;
  searchTerm = '';
  constructor(private router: Router) {}
  onLoginClick() {
    this.router.navigate(['/login']);
    // Lógica para mostrar modal de login
    console.log('Login clicked');
  }

  onRegisterClick() {

    // Lógica para mostrar modal de registro
    console.log('Register clicked');
  }

  onCartClick() {
    // Lógica para mostrar carrito
    console.log('Cart clicked');
  }

  onSearchClick() {
    // Lógica para búsqueda
    console.log('Search clicked:', this.searchTerm);
  }

  onCategoryClick(category: string) {
    // Lógica para navegación por categoría
    console.log('Category clicked:', category);
  }
}
