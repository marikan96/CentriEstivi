import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewallComponent } from './edit-viewall.component';

describe('EditViewallComponent', () => {
  let component: EditViewallComponent;
  let fixture: ComponentFixture<EditViewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditViewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
