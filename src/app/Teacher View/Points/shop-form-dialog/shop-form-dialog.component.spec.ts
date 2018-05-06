import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFormDialogComponent } from './shop-form-dialog.component';

describe('ShopFormDialogComponent', () => {
  let component: ShopFormDialogComponent;
  let fixture: ComponentFixture<ShopFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
