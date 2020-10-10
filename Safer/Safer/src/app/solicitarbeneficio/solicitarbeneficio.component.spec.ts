import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarbeneficioComponent } from './solicitarbeneficio.component';

describe('SolicitarbeneficioComponent', () => {
  let component: SolicitarbeneficioComponent;
  let fixture: ComponentFixture<SolicitarbeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarbeneficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarbeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
