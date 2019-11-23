import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gif-app';
  searchStatus :boolean= true;
  routes;
  constructor(
    private route: ActivatedRoute, 
    location: Location,
    private router: Router
    ) {
      router.events.subscribe((val) => {
        if(location.path() != ''){
          this.routes = location.path();
          this.searchStatus=false;
        } else {
          this.routes = 'Home'
          this.searchStatus=true;
        }
      });
     }
    ngOnInit() {
      
  }
}
