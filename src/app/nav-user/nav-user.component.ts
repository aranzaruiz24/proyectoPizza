import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from '../interfaces/usuario.interface';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  @Input() usuario: Usuario;
  
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
