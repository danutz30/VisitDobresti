import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.changePosition();
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: '-50%', left: '40%' });
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.dialogRef.close();
        this.router.navigate(['acasa']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
