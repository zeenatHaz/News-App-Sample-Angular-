import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContentsComponent } from './sub-contents.component';

describe('SubContentsComponent', () => {
  let component: SubContentsComponent;
  let fixture: ComponentFixture<SubContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
