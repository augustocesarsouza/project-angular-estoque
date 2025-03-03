import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouWouldLikeReceiverNewsComponent } from './you-would-like-receiver-news.component';

describe('YouWouldLikeReceiverNewsComponent', () => {
  let component: YouWouldLikeReceiverNewsComponent;
  let fixture: ComponentFixture<YouWouldLikeReceiverNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YouWouldLikeReceiverNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouWouldLikeReceiverNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
