import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorpageComponent } from './components/sponsorpage/sponsorpage.component';

const routes: Routes = [
  {path: "sponsors", component: SponsorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
