import { Component, OnInit } from '@angular/core'
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage) { }

    item:String[] = [];
    key:string = 'auswahl';


  saveData(){
      this.storage.set(this.key, this.item);

  }

 loadData(){
      this.storage.get(this.key).then((val)=>{
        return this.item;
     })
 }


  ngOnInit() {
      }

}
