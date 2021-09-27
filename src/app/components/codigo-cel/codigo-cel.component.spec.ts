import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoCelComponent } from './codigo-cel.component';

describe('CodigoCelComponent', () => {
  let component: CodigoCelComponent;
  let fixture: ComponentFixture<CodigoCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoCelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
