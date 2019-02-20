import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { PostClientComponent } from './post-client/post-client.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { Task1Service } from './task1.service';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { TaskRestMockervice } from './service/TaskRestMockService';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PostClientComponent,
    PostDetailComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Task1Service,
    TaskRestMockervice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
