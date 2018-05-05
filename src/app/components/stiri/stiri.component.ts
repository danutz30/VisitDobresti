import { StiriService } from './stiri.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-stiri',
  templateUrl: './stiri.component.html',
  styleUrls: ['./stiri.component.scss']
})
export class StiriComponent implements OnInit {
  newsForm: FormGroup;
  ckeditorContent = ``;
  newImage: any;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private formBuilder: FormBuilder,
    private newsService: StiriService) {
    this.newsForm = this.formBuilder.group({
      imagine: [{ value: '', disabled: false }],
      titlu: [null, Validators.required],
      descriere: [null, Validators.required],
      continut: [null, Validators.required],
    });

    this.newsService.getNews().snapshotChanges().subscribe(res => {

    });
  }

  ngOnInit() {

  }

  addNews() {
    console.log('this.newImage: ', this.newImage);
    const data = {
      image: this.newsForm.get('imagine').value,
      title: this.newsForm.get('titlu').value,
      description: this.newsForm.get('descriere').value,
      content: this.ckeditorContent,
      createdAt: moment(new Date()).format()
    };
    
    // if (this.newImage) {
    //   console.log(this.newImage);
    //   data.image = this.newImage;
    // }

    if (this.newsForm.valid) {
      this.newsService.postNews(data);
    }
  }

  onSelectImage(event) {
    if (event.target && event.target.files && event.target.files.length) {
      this.newImage = event.target.files[0];
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
