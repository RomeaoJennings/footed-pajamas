import { Component } from '@angular/core';
import { DbBuildService } from './db/db-build.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'footed-pajamas';

  constructor(private dbBuilder: DbBuildService) {
    // dbBuilder.buildProductsDb();
  }
}
