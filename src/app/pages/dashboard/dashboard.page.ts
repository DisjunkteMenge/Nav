import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  // Methode zum "gehen" zur Seite details
  goDetail() {
    this.router.navigateByUrl('/details/42');
  }

  ngOnInit() {
  }

}
