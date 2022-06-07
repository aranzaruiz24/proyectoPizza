import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-nav-root',
  templateUrl: './nav-root.component.html',
  styleUrls: ['./nav-root.component.css']
})
export class NavRootComponent implements OnInit {

  constructor(private fire:FirebaseService, private router:Router) { }

  ngOnInit(): void {
  }
  salir(){
    this.fire.logout()
    .then(res =>{
      this.router.navigate(['/home']);
    })
  }
}
