import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { PromiseComponent } from './promise/promise.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path: 'promise', component: PromiseComponent},
  {path:'**',redirectTo:'promise'}
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 
 
}
