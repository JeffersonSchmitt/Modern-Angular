import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interface/products/product';
@Component({
  selector: 'app-card-product',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-product.html',
  styleUrl: './card-product.scss',
})
export class CardProduct {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Add to Cart');
  readonly addToCart = output<Product>();

  protected onAddToCart(): void {
    this.addToCart.emit(this.product());
  }
}
