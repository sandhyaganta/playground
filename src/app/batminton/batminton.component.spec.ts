import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmintonComponent } from './batminton.component';

describe('BatmintonComponent', () => {
  let component: BatmintonComponent;
  let fixture: ComponentFixture<BatmintonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatmintonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatmintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
