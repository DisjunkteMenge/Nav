import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    constructor(private router: Router, private storage: Storage) {
    }

    key:string = 'auswahl';
    item = '';


    // Methode zum "gehen" zur Seite details
    goDetail() {
        this.router.navigateByUrl('/details/42');
    }


    ngOnInit() {
        this.storage.get(this.key).then((val) => {
            this.item = val;
        });

    }
}
