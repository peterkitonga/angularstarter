import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Anonymous } from './anonymous';

describe('Anonymous', () => {
  let component: Anonymous;
  let fixture: ComponentFixture<Anonymous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anonymous],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Anonymous);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
