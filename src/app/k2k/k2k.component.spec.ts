import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K2kComponent } from './k2k.component';

describe('K2kComponent', () => {
  let component: K2kComponent;
  let fixture: ComponentFixture<K2kComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K2kComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K2kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
