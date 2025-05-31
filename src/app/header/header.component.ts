import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule] 
})
export class HeaderComponent {
  @Input() cartItemCount: number = 0;
  @Input() isLoggedIn: boolean = false;
  @Input() userName: string = '';
  
  @Output() loginClick = new EventEmitter<void>();
  @Output() cartClick = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();
  
  searchTerm: string = '';

  onLoginClick() {
    this.loginClick.emit();
  }
  
  onCartClick() {
    this.cartClick.emit();
  }
  
  onLogout() {
    this.logout.emit();
  }
  
  onSearch() { 
    if (this.searchTerm.trim()) {
      this.search.emit(this.searchTerm.trim());
    }
  }
}