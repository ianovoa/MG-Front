import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgFooterComponent } from './mg-footer.component';

describe('MgFooterComponent', () => {
  let component: MgFooterComponent;
  let fixture: ComponentFixture<MgFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
