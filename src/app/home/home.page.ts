import { Component } from '@angular/core';
// import { NavController} from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


   constructor(private authService: AuthService) {
   }



  // openViewRecarga(){
  //   this.navCtrl.push(ViewRecargaPage, {}, {animate: true} );    
  // }
}
