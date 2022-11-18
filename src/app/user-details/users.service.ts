import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { GithubUser } from "./user.model"

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(userName: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`https://api.github.com/users/${userName}`)
  }
}
