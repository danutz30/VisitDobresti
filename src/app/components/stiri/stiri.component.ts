import { AuthService } from './../../services/auth.service';
import { environment } from './../../../environments/environment';
import { StiriService } from './stiri.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';
@Component({
  selector: 'app-stiri',
  templateUrl: './stiri.component.html',
  styleUrls: ['./stiri.component.scss']
})
export class StiriComponent implements OnInit {
  newsForm: FormGroup;
  ckeditorContent = ``;
  newImage: any;
  newss: any;
  displayedNewss: any;
  show: any;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private formBuilder: FormBuilder,
    private newsService: StiriService,
    private authService: AuthService) {
    moment.locale('ro');
    this.newsForm = this.formBuilder.group({
      imagine: [{ value: '', disabled: false }],
      titlu: [null, Validators.required],
      descriere: [null, Validators.required],
      continut: [null, Validators.required],
    });
  }

  ngOnInit() {

    this.newsService.getNews().snapshotChanges().subscribe(res => {

      // this.newss = res;
      this.displayedNewss = [];
      res.forEach(element => {

        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.displayedNewss.push(y);
        this.newss = _.cloneDeep(this.displayedNewss);
      });

      this.newss.map(news => {

        news.image = environment.firebase.storageBucket + news.image;

      });

      this.newss.sort(function (a, b) {
        a = new Date(a.createdAt);
        b = new Date(b.createdAt);
        return a > b ? -1 : a < b ? 1 : 0;
      });


      // if (this.newss && this.newss.image) {
      //   this.newss.image = environment.firebase.storageBucket + this.newss.image;
      //   }
    });

  }

  addNews() {

    const data = {
      image: this.newsForm.get('imagine').value,
      title: this.newsForm.get('titlu').value,
      description: this.newsForm.get('descriere').value,
      content: this.ckeditorContent,
      createdAt: moment(new Date()).format()
    };

    if (this.newImage) {
      data.image = this.newImage;
    }

    if (this.newsForm.valid) {
      this.newsService.postNews(data);
    }
  }

  showEditor() {
    this.show = !this.show;
  }

  onSelectImage(event) {
    if (event.target && event.target.files && event.target.files.length) {
      this.newImage = event.target.files[0].name;
    }
  }

  onChange($event) {


  }

  onEditorChange($event) {


  }

  onReady($event) {


  }

  onFocus($event) {


  }

  onBlur($event) {


  }

  onContentDom($event) {


  }

  onFileUploadRequest($event) {


  }
}
