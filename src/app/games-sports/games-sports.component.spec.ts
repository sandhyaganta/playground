import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSportsComponent } from './games-sports.component';

describe('GamesSportsComponent', () => {
  let component: GamesSportsComponent;
  let fixture: ComponentFixture<GamesSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesSportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
