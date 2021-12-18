import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgNavBarComponent } from './mg-nav-bar.component';

describe('MgNavBarComponent', () => {
  let component: MgNavBarComponent;
  let fixture: ComponentFixture<MgNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
