import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header/header.component"
import { SearchBarComponent } from "./search-bar/search-bar.component"
import { UserDetailsComponent } from "./user-details/user-details.component";
import { CreatedAtPipe } from './user-details/created-at.pipe';
import { UserStatsComponent } from './user-details/user-stats/user-stats.component';
import { UserLinksComponent } from './user-details/user-links/user-links.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    UserDetailsComponent,
    CreatedAtPipe,
    UserStatsComponent,
    UserLinksComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
