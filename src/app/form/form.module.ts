import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MyForm } from './form.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {path: '', component: MyForm}
]

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyForm]
})
export class FormModule {

}
