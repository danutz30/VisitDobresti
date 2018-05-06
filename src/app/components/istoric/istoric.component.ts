import { AuthService } from './../../services/auth.service';
import { IstoricService } from './istoric.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-istoric',
  templateUrl: './istoric.component.html',
  styleUrls: ['./istoric.component.scss']
})
export class IstoricComponent implements OnInit {
  ckeditorContent = ``;
  show: boolean;
  htmlContent: any;
  html: any;
  constructor(public istoric: IstoricService,
  private authService: AuthService) { }

  ngOnInit() {
    this.istoric.getHistories().snapshotChanges().subscribe(item => {
      this.htmlContent = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.htmlContent.push(y);
        this.html = this.htmlContent[0].htmlContent;
      });
    });
  }

  postHistory() {
    this.istoric.postHistories(this.ckeditorContent);
  }
  showEditor() {
    this.show = !this.show;
  }

  onChange($event) {
    console.log('onChange: ');

  }

  onEditorChange($event) {
    console.log('onEditorChange: ');

  }

  onReady($event) {
    console.log('onReady: ');

  }

  onFocus($event) {
    console.log('onFocus: ');

  }

  onBlur($event) {
    console.log('onBlur: ');

  }

  onContentDom($event) {
    console.log('onContentDom: ');

  }

  onFileUploadRequest($event) {
    console.log('onFileUploadRequest: ');

  }
}
