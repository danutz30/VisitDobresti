import { Component, OnInit } from '@angular/core';
import { StatusesService } from './status.service';
import * as moment from 'moment';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  // Status text
  public statusText: string;

  // The status available
  public statuses: any[];

  posts: any;
  // Flag to see if a new status can be added or nah
  public canPostStatus: boolean;

  // ---------------------------------------------------------
  // Class constructor, injects StatusService as this.status
  // ---------------------------------------------------------

  constructor(public status: StatusesService) {
    moment.locale('ro');
  }

  // ---------------------------------------------------------
  // ngOnInit is automatically fired on intialisation
  // ---------------------------------------------------------

  ngOnInit() {
    // Get 50 of the most recent statuses
    this.status.recent(50).snapshotChanges().subscribe(item => {

      this.posts = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.posts.push(y);
        this.posts.sort(function (a, b) {
          a = new Date(a.createdAt);
          b = new Date(b.createdAt);
          return a > b ? -1 : a < b ? 1 : 0;
        });
      });
      console.log('this.posts: ', this.posts);
    });
  }
  // ---------------------------------------------------------
  // Get the status of the text if it's valid or nah
  // ---------------------------------------------------------

  typingStatus() {
    if (this.status.valid(this.statusText) && this.status.updating() === false) {
      this.canPostStatus = true;
    }
  }

  // ---------------------------------------------------------
  // Post a status if it is valid
  // ---------------------------------------------------------

  postStatus() {
    if (this.status.valid(this.statusText) && this.statusText.length > 0) {
      this.status.post(this.statusText);
      this.statusText = null;
    }
  }

  // ---------------------------------------------------------
  // React to an existing post
  // ---------------------------------------------------------

  react(reaction: string, status) {
    this.status.react(reaction, status);
  }
}

