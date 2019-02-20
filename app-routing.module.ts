import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostClientComponent } from './post-client/post-client.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {path: 'post-client', component: PostClientComponent },
  {path: 'posts/:userId', component: PostDetailComponent},
  {
    path: 'posts',
    component: PostClientComponent,
    data: { title: 'Posts'}
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
