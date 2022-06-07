import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoqrComponent } from './codigoqr.component';

describe('CodigoqrComponent', () => {
  let component: CodigoqrComponent;
  let fixture: ComponentFixture<CodigoqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoqrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
