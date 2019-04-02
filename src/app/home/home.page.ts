import { Component,OnInit } from '@angular/core';
import { Promocion } from './modelo.promociones';
import { PromocionesService } from './promociones.service';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
// import { Observable } from 'rxjs/observable';

import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';




interface ToDo{

  task:string;
  priority:number;
  id?: string;


}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage  {

todoCollection: AngularFirestoreCollection<ToDo>
//todo: Observable<ToDo[]>;

  constructor(public navCtrl: NavController,  private asf: AngularFirestore) {}
  
  ionViewDiEnter(){

this.todoCollection = this.asf.collection('todo', ref => ref.orderBy('priority'));
//this.todo = this.todoCollection.valueChanges();
  }
 


}


