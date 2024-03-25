import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // URL base da API
  private baseUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) { }

  // Método para obter todas as cartas
  getAllCards(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  // Método para obter uma única página de cartas
  getSinglePageOfCards(page: number, pageSize: number): Observable<any> {
    const url = `${this.baseUrl}?page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(url);
  }

  // Método para filtrar as cartas por consulta
  filterCardsByQuery(query: string): Observable<any> {
    const url = `${this.baseUrl}?q=${query}`;
    return this.http.get<any>(url);
  }

  // Método para ordenar as cartas por data de lançamento descendente
  orderByReleaseDateDescending(): Observable<any> {
    const url = `${this.baseUrl}?orderBy=-set.releaseDate`;
    return this.http.get<any>(url);
  }
}
