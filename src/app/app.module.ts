import { StiriService } from './components/stiri/stiri.service';
import { IstoricService } from './components/istoric/istoric.service';
import { StatusesService } from './components/blog/status.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { CKEditorModule } from 'ng2-ckeditor';
import { StiriComponent } from './components/stiri/stiri.component';
import { StiriDetaliateComponent } from './components/stiri/stiri-detaliate/stiri-detaliate.component';

const appRoutes: Routes = [
  { path: 'acasa', component: AcasaComponent },
  { path: '', redirectTo: '/acasa', pathMatch: 'full' },
  { path: 'stiri', component: StiriComponent },
  { path: 'stiri/:id/detalii', component: StiriDetaliateComponent },
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
    BlogComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    StiriComponent,
    StiriDetaliateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MomentModule,
    CKEditorModule

  ],
  providers: [
    StatusesService,
    IstoricService,
    StiriService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
