import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JscreatorComponent } from './jscreator.component';

describe('JscreatorComponent', () => {
  let component: JscreatorComponent;
  let fixture: ComponentFixture<JscreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JscreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JscreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
