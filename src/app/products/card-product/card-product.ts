import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-card-product',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './card-product.html',
  styleUrl: './card-product.scss',
})
export class CardProduct {}
