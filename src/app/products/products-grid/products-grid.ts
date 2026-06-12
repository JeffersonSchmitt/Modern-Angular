import { CartService } from './../../service/cart-service/cart-service';
import { Component, computed, inject, signal } from '@angular/core';
import { CardProduct } from '../card-product/card-product';
import { Product } from '../../interface/products/product';
import { MatIcon } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products-grid',
  imports: [CardProduct, MatIcon, MatBadgeModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  private cartService!: CartService;

  ProductsGrid(cartService: CartService) {
    this.cartService = cartService;
  }

  protected readonly searchTerm = signal('');
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description:
        'High-quality wireless headphones with noise cancellation and premium sound quality.',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description:
        'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with powerful bass and 12-hour battery life.',
      price: 79.99,
      originalPrice: 99.99,
    },
  ]);
  private readonly CartService = inject(CartService);

  //protected readonly filteredProducts = signal<Product[]>(this.products());
  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.products();
    return this.products().filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term),
    );
  });

  protected onAddToCart(product: Product): void {
    this.CartService.addToCart(product);
  }
}
