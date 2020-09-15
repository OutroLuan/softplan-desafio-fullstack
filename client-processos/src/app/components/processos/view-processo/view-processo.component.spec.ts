import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessoComponent } from './view-processo.component';

describe('ViewProcessoComponent', () => {
  let component: ViewProcessoComponent;
  let fixture: ComponentFixture<ViewProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
