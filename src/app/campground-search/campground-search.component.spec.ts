import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgroundSearchComponent } from './campground-search.component';

describe('CampgroundSearchComponent', () => {
  let component: CampgroundSearchComponent;
  let fixture: ComponentFixture<CampgroundSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampgroundSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampgroundSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
