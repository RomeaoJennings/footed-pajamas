import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-container',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainerComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // TODO: Move this to a guard.
    const validCategories = ['adult', 'kid', 'toddler', 'infant', 'pet'];

    if (
      validCategories.findIndex(
        val => val === this.activatedRoute.snapshot.params.category
      ) === -1
    ) {
      this.router.navigate(['/']);
    }
  }
}
