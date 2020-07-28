import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSatuComponent } from './admin-satu.component';

describe('AdminSatuComponent', () => {
  let component: AdminSatuComponent;
  let fixture: ComponentFixture<AdminSatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
