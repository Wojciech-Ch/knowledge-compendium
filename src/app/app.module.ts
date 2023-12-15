import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [AppComponent, LayoutComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
