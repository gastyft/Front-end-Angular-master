import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEdadComponent } from './boton-edad.component';

describe('BotonEdadComponent', () => {
  let component: BotonEdadComponent;
  let fixture: ComponentFixture<BotonEdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEdadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
