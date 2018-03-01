import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishItemsComponent } from './punish-items.component';

describe('PunishItemsComponent', () => {
  let component: PunishItemsComponent;
  let fixture: ComponentFixture<PunishItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunishItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunishItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
