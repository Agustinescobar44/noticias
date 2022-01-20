import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  listNews:any[] = []
  loading = false;

  constructor (private _noticiaService: NoticiasService){

  }

  buscarNoticias(parameters:any){
    this.loading = true;
    this.listNews = []
    this._noticiaService.getNews(parameters).subscribe({
      next: d =>{
        this.listNews = d.articles
        this.loading = false;
        
      },
      error: e =>{
        console.log(e);
        this.loading = false;
        
      }
    })
    
  }
}
