import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDuaComponent } from './admin-dua.component';

describe('AdminDuaComponent', () => {
  let component: AdminDuaComponent;
  let fixture: ComponentFixture<AdminDuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
