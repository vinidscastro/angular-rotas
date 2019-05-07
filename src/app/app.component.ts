import { Component } from '@angular/core';
import { CursosService } from './cursos/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curso:any;
  title = 'rotas';
  inscricao: Subscription;
  
  constructor(private cursosService: CursosService, private router: Router, private route: ActivatedRoute){}

  onBuscarCurso(idCurso: any){
    if( idCurso != ''){
      this.cursosService.getCurso(idCurso);
    console.log(idCurso);
    }else{
      console.log(this.route);
      return false;
    }
    this.router.navigate(['/curso/'+idCurso])
  }
}
