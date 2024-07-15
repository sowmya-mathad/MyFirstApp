import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDirDeepDiveComponent } from './ang-dir-deep-dive.component';

describe('AngDirDeepDiveComponent', () => {
  let component: AngDirDeepDiveComponent;
  let fixture: ComponentFixture<AngDirDeepDiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngDirDeepDiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngDirDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
