import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTrocaIMPage } from './view-troca-i-m.page';

describe('ViewTrocaIMPage', () => {
  let component: ViewTrocaIMPage;
  let fixture: ComponentFixture<ViewTrocaIMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrocaIMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTrocaIMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
