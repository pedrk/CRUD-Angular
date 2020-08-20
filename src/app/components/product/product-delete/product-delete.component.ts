import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id)
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto Deletado com sucesso')
    })
    this.router.navigate(['/produtos'])
  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }

}
