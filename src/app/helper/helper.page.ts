<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';
=======
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

@Component({
  selector: 'app-helper',
  templateUrl: './helper.page.html',
  styleUrls: ['./helper.page.scss'],
})
export class HelperPage implements OnInit {
<<<<<<< HEAD
  @Input() cart_number: string;
  @Input() cart_type: string;
  public personne : User;
  constructor(public modalCtrl:ModalController,public httpclient:HttpClient,public navParams: NavParams) {

    this.getUser(navParams.get('cart_number'));
   }
=======

  constructor(public modalCtrl:ModalController) { }
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

  ngOnInit() {
  }

  fermer(){
    this.modalCtrl.dismiss();
  }

<<<<<<< HEAD
  async getUser(cni){
    await this.httpclient.get<any>('http://sosante.ifcad.info/web/user/read_one_by_cni.php',{
            params: {
              cni: cni
            },
          }).subscribe(
          (res) => {
            this.personne = new User([new Contact (res.contact.records[0].id,res.contact.records[0].nom,res.contact.records[0].numero,res.contact.records[0].utilisateur), new Contact (res.contact.records[1].id,res.contact.records[1].nom,res.contact.records[1].numero,res.contact.records[1].utilisateur)],res.prenom,res.nom,res.date_naissance,res.lieu_naissance,res.genre,res.avatar,res.numero,res.poids,res.adresse,res.fiche,res.id);
          },
        (error) => {
          
        }
        );
    }

=======
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

}
