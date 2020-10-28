import { VideosComponent } from './chats/videos.component';
import { ImagesComponent } from './chats/images.component';
import { ErrorComponent } from './error/error.component';
import { ChatsComponent } from './chats/chats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatGuard } from './chats/chat.guard';

// ng g g chat

const chatRoutes: Routes = [
  { path: 'images', component: ImagesComponent },
  { path: 'videos', component: VideosComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chats/:chatWith', component: ChatsComponent, children: chatRoutes, canActivate: [ChatGuard] },
  { path: 'chats', redirectTo: 'chats/1111', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
