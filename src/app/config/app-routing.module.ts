import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [{
  path: 'home',
  loadChildren: '../home/home.module#HomeModule'
}, {
  path: 'form',
  loadChildren: '../form/form.module#FormModule'
}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
