import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTermoPage } from './view-termo.page';

describe('ViewTermoPage', () => {
  let component: ViewTermoPage;
  let fixture: ComponentFixture<ViewTermoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTermoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTermoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
