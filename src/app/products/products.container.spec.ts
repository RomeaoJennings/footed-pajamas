import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsContainerComponent } from './products.container';
import { ProductsComponent } from './products.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { AppStoreModule } from '../store/app-store.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../routing/app-routing.module';
import { HomeComponent } from '../core/home/home.component';

describe('ProductsContainerComponent', () => {
  let component: ProductsContainerComponent;
  let fixture: ComponentFixture<ProductsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsContainerComponent,
        ProductsComponent,
        ProductsRowComponent,
        HomeComponent
      ],
      imports: [
        AppStoreModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
