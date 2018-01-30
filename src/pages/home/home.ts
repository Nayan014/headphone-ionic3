import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.audioInit();
  }

  audioJackStatus(){
    console.log('checking headphone');
    try {
      (<any>window).HeadsetDetection.detect(function(detected){
        if(detected){
          alert('Headphone connected')
        }
        else{
          alert('No Headphone Found.')
        }
      })
    } catch (error) {
      alert(error); 
    }
  }

  audioInit(){
    try {
        document.addEventListener('deviceready', function() {
            (<any>window).HeadsetDetection.registerRemoteEvents(function(status) {
                switch (status) {
                  case 'headsetAdded':
                    alert('Headset connected');
                  break;
                  case 'headsetRemoved':
                    alert('Headset removed');
                  break;
                };
            });
        }, false);
      } catch (error) {
        alert(error);
      }    
  }
}
