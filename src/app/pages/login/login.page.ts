import { Component, OnInit } from '@angular/core'
import {Storage} from '@ionic/storage';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  noteArr: any[] = [];
  key:string = 'auswahl';
  selection: FormGroup;


  constructor(
    private storage: Storage,
    private fb: FormBuilder
  ) { }




  saveData(d){
    this.storage.get('auswahl').then((val) => {
        this.noteArr.push(d.selectionInput);
        this.storage.set(this.key, this.noteArr);
    })
      
  }

 loadData(){
      this.storage.get('auswahl').then((val)=>{
        
     })
 }

  ngOnInit() {
    this.selection = this.fb.group({
      selectionInput: [""],
    })
  }

}
