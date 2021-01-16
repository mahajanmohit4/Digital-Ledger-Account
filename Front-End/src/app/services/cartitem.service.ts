import { Injectable } from '@angular/core';
import { Cart } from '../classes/cart';
import { Cartitems } from '../classes/cartitems';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {

  carts: Cart[] | any;
  products: Product[] | any; 
  
  cartitem: Cartitems[] = [];
  
  constructor() { }
}
