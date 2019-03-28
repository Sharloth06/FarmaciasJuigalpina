import { Component,OnInit } from '@angular/core';
import { Promocion } from './modelo.promociones';
import { PromocionesService } from './promociones.service';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';


interface MiCuenta {

  task: String;
  priority: Number;
  id : String;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage  {

  MicuentaCollection: AngularFirestoreCollection<MiCuenta>;
  Micuenta: Observable<MiCuenta[]>;

 
  constructor(public navCtrl: NavController,  private asf: AngularFirestore) {}

  ionViewDidEnter(){
   
    this.MicuentaCollection = this.asf.collection('Micuenta');
    this.Micuenta = this.MicuentaCollection.valueChanges();

  }
 
}


