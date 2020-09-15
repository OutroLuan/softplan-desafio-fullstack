import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsuarioProcessoComponent } from './add-usuario-processo.component';

describe('AddUsuarioProcessoComponent', () => {
  let component: AddUsuarioProcessoComponent;
  let fixture: ComponentFixture<AddUsuarioProcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsuarioProcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsuarioProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
