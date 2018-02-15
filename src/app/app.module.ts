import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FrontComponent} from './front/front.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UploadComponent} from './upload/upload.component';
import {MediaService} from './services/media.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UploadComponent,
    ThumbnailPipe,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MediaService, ThumbnailPipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}