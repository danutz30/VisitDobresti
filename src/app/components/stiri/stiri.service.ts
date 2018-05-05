import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as moment from 'moment';

@Injectable()
export class StiriService {

    private basePath = '/news';
    // All the statuses available
    public news: AngularFireList<any>;

    constructor(private af: AngularFireDatabase) {
    }

    getNews() {
        this.news = this.af.list(this.basePath);
        return this.news;
    }

    postNews(news: any) {
        const payload = {
            image: news.image,
            title: news.title,
            description: news.description,
            content: news.content,
            createdAt: moment(new Date()).format()
        };
        this.news.push(payload);
    }

    // updateHistories(historic: any) {

    // }
}
