import { ChangeDetectionStrategy, Component } from "@angular/core"
import { UsersService } from "../user-details/users.service"

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  constructor(private usersService: UsersService) {}

  handleSearch(value: string) {
    this.usersService.searchTerm.next(value)
  }
}
