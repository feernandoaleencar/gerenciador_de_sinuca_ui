import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinucaListarComponent } from './sinuca-listar.component';

describe('SinucaListarComponent', () => {
  let component: SinucaListarComponent;
  let fixture: ComponentFixture<SinucaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinucaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinucaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
