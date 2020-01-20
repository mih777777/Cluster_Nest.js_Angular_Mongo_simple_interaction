import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ItemComponent } from './components/item/item.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: 'items', component: ItemComponent },
      { path: 'items/id', component: ItemComponent }
      // { path: 'items/create', component: ItemComponent },
      // { path: 'items/id', component: ItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
