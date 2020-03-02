import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Criar Conta'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)])

  constructor(private route: ActivatedRoute, private authService: AuthService, private fb: FormBuilder, private overlayService: OverlayService, private navCtrl: NavController) { }

  ngOnInit():void {
    this.createForm();
  }

  // COLOCAR PRA RECEBER NUMERO
private createForm(): void {
  this.authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

get email(): FormControl {
  return <FormControl>this.authForm.get('email');
}

get name(): FormControl {
  return <FormControl>this.authForm.get('name');
}

get password(): FormControl {
  return <FormControl>this.authForm.get('password');
}
// Aula 22
changeAuthAction(): void{
  this.configs.isSignIn = !this.configs.isSignIn;
  const { isSignIn } = this.configs;
  this.configs.action = isSignIn ? 'Login' : 'Sign up';
  this.configs.actionChange = isSignIn ? 'Criar Conta' : 'Already have an account';
  !isSignIn
    ? this.authForm.addControl('name', this.nameControl)
    : this.authForm.removeControl('name');
  }

async onSubmit(provider: AuthProvider): Promise<void>{
  const loading = await this.overlayService.loading();
  try{
    const credentials = await this.authService.authenticate({
      inSignIn: this.configs.isSignIn,
      user: this.authForm.value,
      provider
    });
    this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/home');
  }catch (e) {
    console.log('Auth error: ', e)
    await this.overlayService.toast({
      message: e.message
    });
  } finally {
    loading.dismiss();
  }
}

}
