import { Component, OnInit } from '@angular/core'
import {Storage} from '@ionic/storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {




  constructor(private storage: Storage) { }


    item:any;
    key:string = 'auswahl';


  saveData(){
      this.storage.set(this.key, this.item);
  }

 loadData(){
      this.storage.get('auswahl').then((val)=>{

     })
 }

  ngOnInit() {
      }

}
