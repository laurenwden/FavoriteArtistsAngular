import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfunctionComponent } from './mapfunction.component';

describe('MapfunctionComponent', () => {
  let component: MapfunctionComponent;
  let fixture: ComponentFixture<MapfunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
