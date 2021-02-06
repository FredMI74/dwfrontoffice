import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { FeatureModule } from './feature/feature.module';
import { AppRoutingModule } from './app-routing.module';
import { APIInterceptor } from './api.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ComponentsModule,
    FeatureModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
