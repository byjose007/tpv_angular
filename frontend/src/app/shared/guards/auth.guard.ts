import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    // public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  // canActivate() {

  //   // if ( this._usuarioService.estaLogueado() ) {
  //   //   return true;
  //   // } else {
  //   //   console.log( 'Bloqueado por guard' );
  //   //   this.router.navigate(['/login']);
  //   //   return false;
  //   // }


  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;

    }

  }
}
