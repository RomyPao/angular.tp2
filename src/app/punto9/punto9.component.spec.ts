import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto9Component } from './punto9.component';

describe('Punto9Component', () => {
  let component: Punto9Component;
  let fixture: ComponentFixture<Punto9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
