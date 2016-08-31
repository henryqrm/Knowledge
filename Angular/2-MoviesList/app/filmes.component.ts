import { Component } from '@angular/core';
import { FilmeService } from './filmes.service';
@Component({
    selector: 'filmes',
    template: `<h2>{{titulo}}</h2>
    <ul>
        <li *ngFor="let filme of filmes">{{filme}}</li>
    </ul>
    `,
    providers:[FilmeService]
})
export class FilmesCompoent {
    titulo: string;
    filmes:string[];
    constructor(Filmes: FilmeService){
        this.titulo = 'Lista de filmes';
        this.filmes = Filmes.getFilmes();
    }
}