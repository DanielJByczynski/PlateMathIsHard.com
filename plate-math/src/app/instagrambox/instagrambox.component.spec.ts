import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramboxComponent } from './instagrambox.component';

describe('InstagramboxComponent', () => {
  let component: InstagramboxComponent;
  let fixture: ComponentFixture<InstagramboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
