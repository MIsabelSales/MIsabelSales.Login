import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCelComponent } from './validar-cel.component';

describe('ValidarCelComponent', () => {
  let component: ValidarCelComponent;
  let fixture: ComponentFixture<ValidarCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarCelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
