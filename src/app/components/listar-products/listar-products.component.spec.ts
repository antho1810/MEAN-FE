import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductsComponent } from './listar-products.component';

describe('ListarProductsComponent', () => {
  let component: ListarProductsComponent;
  let fixture: ComponentFixture<ListarProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
