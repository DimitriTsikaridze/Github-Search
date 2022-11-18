import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject, Observable, switchMap } from "rxjs"
import { GithubUser } from "./user.model"

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  searchTerm = new BehaviorSubject<string>("octocat")

  getUser(): Observable<GithubUser> {
    return this.searchTerm.pipe(
      switchMap((searchTerm) => this.readUser(searchTerm))
    )
  }

  private readUser(userName: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`https://api.github.com/users/${userName}`)
  }
}
