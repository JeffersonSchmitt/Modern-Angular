import { Injectable, signal } from '@angular/core';
import { Product } from '../../interface/products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<Product[]>([]);

  addToCart(product: Product): void {
    this.cartItems.update((items) => [...items, product]);
  }

  getCartItems(): Product[] {
    return this.cartItems();
  }
}
