import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {using} from "rxjs";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {ServiceComponent} from "./components/pages/service/service.component";
import {CareerComponent} from "./components/pages/career/career.component";
import {SubsidiariesComponent} from "./components/pages/subsidiaries/subsidiaries.component";
import {ContactComponent} from "./components/pages/contact/contact.component";
import {ConstructionComponent} from "./components/pages/construction/construction.component";
import {EntertainmentComponent} from "./components/pages/entertainment/entertainment.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'career', component: CareerComponent},
  {path: 'subsidiaries', component: SubsidiariesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'service/construction', component: ConstructionComponent},
  {path: 'service/entertainment', component: EntertainmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
