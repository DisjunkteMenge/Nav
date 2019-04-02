import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

 id = null;

    // ActivatedRoute für übergeben der id.
  constructor(private route: ActivatedRoute) { }

  // ngOnInit = Was sehe ich beim gehen auf die Seite.
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
