import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewDadosPage } from './view-dados.page';

describe('ViewDadosPage', () => {
  let component: ViewDadosPage;
  let fixture: ComponentFixture<ViewDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
