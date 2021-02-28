import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellButtonRendererComponent } from './cell-button-renderer.component';

describe('CellButtonRendererComponent', () => {
  let component: CellButtonRendererComponent;
  let fixture: ComponentFixture<CellButtonRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellButtonRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
