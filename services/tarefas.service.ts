import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/modulos';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private readonly Url = "http://localhost:5000/tarefa"

  constructor(private httpClient: HttpClient) {

}

adicionarTarefa(novaTarefa: Tarefa): Observable<Tarefa> {
  return this.httpClient.post<Tarefa>(this.Url, novaTarefa);
}


lerTodas(): Observable<Tarefa[]>{
  return this.httpClient.get<Tarefa[]>(this.Url);
}

lerConcluidas(): Observable<Tarefa[]>{
  return this.httpClient.get<Tarefa[]>(this.Url + "/concluidas")
}

deletaTarefas(id: number | undefined): Observable<Tarefa>{
  return this.httpClient.delete<Tarefa>(`${this.Url}/delete/${id}`)

}

concluirTarefa(id: number | undefined, tarefa : Tarefa): Observable<Tarefa>{
  return this.httpClient.put<Tarefa>(`${this.Url}/concluir/${id}`, tarefa)
}

desmarcaTarefa(id: number | undefined, tarefa: Tarefa): Observable<Tarefa>{
  return this.httpClient.put<Tarefa>(`${this.Url}/desmarcar/${id}`,tarefa)
}

editaTarefa( tarefa: Tarefa): Observable<Tarefa>{
  const url = `${this.Url}/${tarefa.id}`
  return this.httpClient.put<Tarefa>(url,tarefa)
}

lerPorId(id: string): Observable<Tarefa>{
  return this.httpClient.get<Tarefa>(`${this.Url}/${id}`)

}

}
