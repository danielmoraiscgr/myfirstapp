import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular'; // IonicPage removido
import { ContactService, Contact } from '../contact.service';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage {
  model: Contact;
  key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ContactService: ContactService, private toast: ToastController) {
       if (this.navParams.data.contact && this.navParams.data.key) {
           this.model = this.navParams.data.contact;

       }
       else {
          this.model = new Contact();
       }
     }

     save() {
          this.saveContact()
          .then(() => {
            //this.toast.create({ message: 'Contato salvo. ', duration: 3000, position: 'bottom' }).present();
            //this.navCtrl.pop();
          })
          .catch(() => {
            //this.toast.create({ message: 'Erro ao salvar o contato', duration: 3000, position: 'bottom'}).present();
            
          });
     }

     private saveContact(){
       if (this.key) {
           return this.ContactService.update(this.key, this.model);

       }
       else {
         return this.ContactService.insert(this.model);

       }
     }
  /**
   * ngOnInit() { 
  } **/

}
