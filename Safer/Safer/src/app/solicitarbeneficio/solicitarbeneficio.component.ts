import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-solicitarbeneficio',
  templateUrl: './solicitarbeneficio.component.html',
  styleUrls: ['./solicitarbeneficio.component.css']
})
export class SolicitarbeneficioComponent implements OnInit {

  user: User = new User();
  senha: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/home'])
        alert("Usuário cadastrado com sucesso!")
      })
    } else {
      alert("Suas senhas não conferem")
    }
  }

 

}
