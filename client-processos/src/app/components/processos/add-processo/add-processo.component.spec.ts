import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessoComponent } from './add-processo.component';

describe('AddProcessoComponent', () => {
  let component: AddProcessoComponent;
  let fixture: ComponentFixture<AddProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
