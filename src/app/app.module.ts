import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './components/acasa/acasa.component';
import { IstoricComponent } from './components/istoric/istoric.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BlogComponent } from './components/blog/blog.component';

const appRoutes: Routes = [
  { path: 'acasa', component: AcasaComponent },
  { path: '',   redirectTo: '/acasa', pathMatch: 'full' },
  { path: 'istoric', component: IstoricComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AcasaComponent,
    IstoricComponent,
    GalerieComponent,
    ContactComponent,
    PageNotFoundComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
