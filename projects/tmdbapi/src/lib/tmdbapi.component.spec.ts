import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbapiComponent } from './tmdbapi.component';

describe('TmdbapiComponent', () => {
  let component: TmdbapiComponent;
  let fixture: ComponentFixture<TmdbapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdbapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
