import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // TODO: Move this to a guard.
    const validCategories = ['adults', 'kids', 'toddlers', 'infants', 'pets'];

    if (
      validCategories.findIndex(
        val => val === this.activatedRoute.snapshot.params.category
      ) === -1
    ) {
      this.router.navigate(['/']);
    }
  }
}
