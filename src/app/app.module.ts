import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { AppRoutingModule } from './app-routing.module';

/*
 * Application modules
 */
import { ToasterModule } from 'angular2-toaster';
import { FirebaseModule } from './firebase/firebase.module';
import { NotFoundModule } from './not-found/not-found-module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { HousesModule } from './houses/houses.module';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    FirebaseModule,
    HomeModule,
    UsersModule,
    HousesModule,
    NotFoundModule,
    AppRoutingModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule { }

