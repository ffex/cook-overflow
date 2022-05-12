import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cook-overflow';
  items: MenuItem[] = [];

  username: string | undefined = undefined;
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    


      this.authService.getCurrentSessionPromise().then((isAuthenticated) => {
        if (isAuthenticated) {
          this.isAuthenticated = true;
          this.authService.getUserPromise().then((response) => {

            this.username = response.name;

          }, function (error) {
            console.log(error); // Failure
          });
        }
      }, function (error) {
        console.log(error); // Failure
      })
    
    this.items = [
      {
        label: 'Cook Overflow',
        routerLink: ["/"]
      }
    ];
  }

  logout(e: any) {
    this.authService.logout();
  }

}
