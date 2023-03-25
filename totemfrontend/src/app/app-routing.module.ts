import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewtagComponent } from './newtag/newtag.component';
const routes: Routes = [
  { path: '', component: HomeComponent},


  { path: 'newtag', component: NewtagComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
