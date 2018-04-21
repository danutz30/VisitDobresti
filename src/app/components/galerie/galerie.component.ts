import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galerie',
  // tslint:disable-next-line:use-host-property-decorator
  host: { '(window:keydown)': 'hotkeys($event)' },
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {
  @Input() datasource;
  jQuery: any;
  selectedImage;
  images;
  constructor() {
    this.images = [
      {
        'url': 'http://www.bihorinimagini.ro/wp-content/uploads/2015/03/Barajul-Vida-din-Luncasprie1.jpg'
      },
      { 'url': 'http://www.bihorinimagini.ro/wp-content/uploads/2014/05/IMG_3411-e1409997550747.jpg' },
      { 'url': 'http://www.bihorinimagini.ro/wp-content/uploads/2015/03/Barajul-Vida.jpg' },
      { 'url': 'http://www.bihorinimagini.ro/wp-content/uploads/2015/07/Dimineata-Lacul-Vida.jpg' },
      { 'url': 'https://i.pinimg.com/originals/75/cb/ec/75cbece35712b3d8813da63d05bea8b3.jpg' },
      { 'url': 'http://www.bihorinimagini.ro/wp-content/uploads/2015/03/Lacul-Vida-la-apus.jpg' },
      { 'url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Biserica_de_lemn_din_Lunca_Sprie01.jpg/1200px-Biserica_de_lemn_din_Lunca_Sprie01.jpg' },
      { 'url': 'https://s-media-cache-ak0.pinimg.com/originals/9d/67/fe/9d67fed296238d308e73ef84d0d04f2b.jpg' },
      { 'url': 'http://www.bihorinimagini.ro/wp-content/uploads/2015/05/Cu-bicicleta-pe-Cheile-Albioarei.jpg' },
      { 'url': 'https://s-media-cache-ak0.pinimg.com/originals/d4/8a/74/d48a7459ec67ad0756f457f21c2996b7.jpg' },
      { 'url': 'http://s4.postimg.cc/unfbis7i5/1_Saldabagiu_de_Munte_Bihor.jpg' },
      { 'url': 'https://i.pinimg.com/originals/c9/e0/3a/c9e03a22453873f1b0e59b589940458f.jpg' }
    ];
  }

  setSelectedImage(image) {
    this.selectedImage = image;
  }

  ngOnInit() {
    this.datasource = this.images;
  }

  navigate(forward) {
    const index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.datasource.length) {
      this.selectedImage = this.datasource[index];
    }
  }

  hotkeys(event) {
    if (this.selectedImage) {
      if (event.keyCode === 37) {
        this.navigate(false);
      } else if (event.keyCode === 39) {
        this.navigate(true);
      } else if (event.keyCode === 27) {
        this.jQuery('selectedImageModal').modal('hide');
      }
    }
  }

}
