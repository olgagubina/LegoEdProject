import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishmentsFormDialogComponent } from './punishments-form-dialog.component';

describe('PunishmentsFormDialogComponent', () => {
  let component: PunishmentsFormDialogComponent;
  let fixture: ComponentFixture<PunishmentsFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunishmentsFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunishmentsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
