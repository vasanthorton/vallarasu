import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasanthComponent } from './vasanth.component';

describe('VasanthComponent', () => {
  let component: VasanthComponent;
  let fixture: ComponentFixture<VasanthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VasanthComponent]
    });
    fixture = TestBed.createComponent(VasanthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
