import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view-recarga',
  templateUrl: './view-recarga.page.html',
  styleUrls: ['./view-recarga.page.scss'],
})
export class ViewRecargaPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }


}
