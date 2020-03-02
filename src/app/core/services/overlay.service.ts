import { Injectable } from '@angular/core';
import { AlertOptions, LoadingOptions,ToastOptions  } from '@ionic/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  async alert(options?: AlertOptions): Promise<HTMLIonAlertElement>{
    const alert = await this.alertCtrl.create(options);
    await alert.present();
    return alert;
  }

  async loading(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      message: 'SO4 TECHNOLOGY...',
      ...options
    });
    await loading.present();
    return loading;
  }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      position: 'bottom',
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'OK',
      ...options
    });
    await toast.present();
    return toast;
  }
}
