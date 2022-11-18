import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { GithubUser } from "./user.model"
import { UsersService } from "./users.service"

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  user$: Observable<GithubUser>

  ngOnInit(): void {
    this.user$ = this.usersService.getUser()
  }
}
