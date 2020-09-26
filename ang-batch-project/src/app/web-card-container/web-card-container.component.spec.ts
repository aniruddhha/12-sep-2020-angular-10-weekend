import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCardContainerComponent } from './web-card-container.component';

describe('WebCardContainerComponent', () => {
  let component: WebCardContainerComponent;
  let fixture: ComponentFixture<WebCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
