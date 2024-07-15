import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrbDirComponent } from './attrb-dir.component';

describe('AttrbDirComponent', () => {
  let component: AttrbDirComponent;
  let fixture: ComponentFixture<AttrbDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttrbDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrbDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
