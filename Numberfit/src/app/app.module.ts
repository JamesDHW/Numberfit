import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment }        from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar }    from '@ionic-native/status-bar/ngx';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { ScreenOrientation }  from '@ionic-native/screen-orientation/ngx';
import { NativeStorage }      from '@ionic-native/native-storage/ngx';
import { HTTP }               from '@ionic-native/http/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    NativeStorage,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
