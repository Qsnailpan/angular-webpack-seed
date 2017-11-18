import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import Home from './home'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {path: '', component: Home}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Home]
})
export class HomeModule {

}
