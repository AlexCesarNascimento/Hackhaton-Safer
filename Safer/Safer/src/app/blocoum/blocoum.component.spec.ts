import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoumComponent } from './blocoum.component';

describe('BlocoumComponent', () => {
  let component: BlocoumComponent;
  let fixture: ComponentFixture<BlocoumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocoumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
