import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleComponentComponent } from './little-component.component';

describe('LittleComponentComponent', () => {
  let component: LittleComponentComponent;
  let fixture: ComponentFixture<LittleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LittleComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hi', () => {
    expect(component.nm).toBe('hi')
  });
});
