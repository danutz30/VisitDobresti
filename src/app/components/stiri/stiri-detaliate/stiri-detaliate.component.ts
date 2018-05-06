import { StiriService } from './../stiri.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-stiri-detaliate',
  templateUrl: './stiri-detaliate.component.html',
  styleUrls: ['./stiri-detaliate.component.scss']
})
export class StiriDetaliateComponent implements OnInit {
  newss: any;
  displayedNewss: any;
  newsId: any;
  content: any;
  constructor(private newsService: StiriService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.newsId = params.id;
    });
  }

  ngOnInit() {
    this.newsService.getNews().snapshotChanges().subscribe(res => {
      this.displayedNewss = [];
      res.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.displayedNewss.push(y);
        this.newss = _.cloneDeep(this.displayedNewss);
      });
      this.content = this.newss.filter(item => item.$key === this.newsId)[0];
      console.log('this.content: ', this.content.content);
    });
  }
}
