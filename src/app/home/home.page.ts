import { Component } from '@angular/core';
import { ContactService, Contact, ContactList } from '../contact.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts: ContactList[];

  constructor(public navCtrl: NavController, private ContactService: ContactService, private toast: ToastController) { 
 
}
ionViewDidEnter() {
  this.ContactService.getAll()
  .then((result) => {
    this.contacts = result; 
  });
}

addContact() {
  this.navCtrl.navigateForward('EditContactPage');
}

editContact(item: ContactList) {
  this.navCtrl.navigateForward('EditContactPage'); //{ key: item.key, contact: item.contact});

}

removeContact(item: ContactList){
  this.ContactService.remove(item.key)
  .then(() => {
    let index = this.contacts.indexOf(item);
    this.contacts.splice(index, 1);
      //  this.toast.create({ message: 'Contato removido.', duration: 3000, position: 'bottom' }).present();
   
  })
}
}
