import { Component } from "@angular/core"
import { Observable } from "rxjs"
import { GithubUser } from "./user-details/user.model"
import { UsersService } from "./user-details/users.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private usersService: UsersService) {}

  user$: Observable<GithubUser>

  ngOnInit(): void {
    this.user$ = this.usersService.getUser()
  }
}
