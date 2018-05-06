import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  images;
  today: number = Date.now();
  user: any;
  constructor(public dialog: MatDialog,
    private authService: AuthService, ) {
      this.authService.user.subscribe(res => {
        console.log('res: ', res);
      this.user = res;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      autoFocus: false,
      height: '290px',
      width: '350px',
      minWidth: '350px',
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
