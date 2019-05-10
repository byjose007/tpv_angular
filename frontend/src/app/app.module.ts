import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


// loading spinner
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from  'ngx-ui-loader';
import { DashboarMainComponent } from './modules/dashboard/components/dashboar-main/dashboar-main.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboarMainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    // test


    //spinner loading
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule,
    SharedModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
