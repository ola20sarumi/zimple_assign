import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturePageComponent } from './picture-page/picture-page.component';

const routes: Routes = [
  {path: 'breed/:breedName', component: PicturePageComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
