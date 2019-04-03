import { Component, OnInit } from '@angular/core'
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage) { }

  ruecken:string;
  key:string = 'auswahl';


  saveData(){
      this.storage.set(this.key, this.ruecken);
  }

 loadData(){
      this.storage.get(this.key).then((val)=>{
          console.log('auswahl:', val)
     })
 }




  ngOnInit() {
  }

}
