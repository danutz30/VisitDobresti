import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as moment from 'moment';

@Injectable()
export class IstoricService {
    private inProgress: boolean;

    private basePath = '/histories';
    // All the statuses available
    public histories: AngularFireList<any>;

    constructor(private af: AngularFireDatabase) {
    }

    getHistories() {
        this.histories = this.af.list(this.basePath);
        return this.histories;
    }

    postHistories(historic: any) {
        const payload = {
            htmlContent: historic,
            createdAt: moment(new Date()).format()
        };
        this.histories.push(payload);
    }

    updateHistories(historic: any) {
    
    }
}
