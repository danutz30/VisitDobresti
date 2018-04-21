// import { Injectable } from '@angular/core';
// // import { FirebaseListObservable } from 'angularfire2/database-deprecated';
// // import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import 'rxjs/add/operator/map';
// / Import the required packages to the service
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as moment from 'moment';

@Injectable()
export class StatusesService {

  // Flag to see if status update is in progress
  private inProgress: boolean;

  // Possible available reactions
  private reactions: string[] = ['like', 'love', 'dislike'];

  // All the statuses available
  public statuses: AngularFireList<any>;

  // The maimum length and minimum length of a status
  public maxLength = 1500;
  public minLength = 0;

  // Flag that determines if the status text is valid or nah
  public statusTextValid: boolean;

  // Class constructor, injects the angular fire database as this.af
  constructor(private af: AngularFireDatabase) { }

  // ----------------------------------------------------------------------
  // Method to post the status to Firebase
  // ----------------------------------------------------------------------

  post(status: string) {
    if (!this.updating()) {
      this.inProgress = true;
      const payload = { text: status, like: 0, dislike: 0, love: 0, createdAt: moment(new Date()).format() };
      this.statuses.push(payload).then(snapshot => {
        this.inProgress = false;
      });
    }
  }

  // ----------------------------------------------------------------------
  // Method to send a reaction to a status to Firebase
  // ----------------------------------------------------------------------

  react(reaction: string, status) {
    if (this.reactions.indexOf(reaction)) {
      const reactions: any = {};
      const count: number = isNaN(parseInt(status[reaction], 1)) ? 0 : parseInt(status[reaction], 1);
      reactions[reaction] = count + 1;
      this.statuses.update(status.$key, reactions);
    }
  }

  // ----------------------------------------------------------------------
  // Method to get the recent statuses from Firebase
  // ----------------------------------------------------------------------

  recent(amount: number) {
    this.statuses = this.af.list('statuses');
    return this.statuses;
  }

  // ----------------------------------------------------------------------
  // Method to check the validity of a status update
  // ----------------------------------------------------------------------

  valid(status: string): boolean {
    if (status) {
      return status.length >= this.minLength && status.length <= this.maxLength;
    }
  }

  // ----------------------------------------------------------------------
  // Method to check the in progress flag
  // ----------------------------------------------------------------------

  updating(): boolean {
    return this.inProgress;
  }
}
