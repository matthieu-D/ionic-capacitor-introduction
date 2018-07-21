import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  async showConfirm() {
    await Plugins.Modals.confirm({
      title: 'Capacitor integration test',
      message: 'Is Capacitor working?'
    });
  }
}
