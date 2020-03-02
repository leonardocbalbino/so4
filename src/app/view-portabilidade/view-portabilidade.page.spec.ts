import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPortabilidadePage } from './view-portabilidade.page';

describe('ViewPortabilidadePage', () => {
  let component: ViewPortabilidadePage;
  let fixture: ComponentFixture<ViewPortabilidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPortabilidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPortabilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
