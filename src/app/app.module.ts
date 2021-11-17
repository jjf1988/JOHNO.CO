import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { YoutubePlaylistComponent } from './components/youtube-playlist/youtube-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SponsorpageComponent } from './components/sponsorpage/sponsorpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { init } from 'emailjs-com';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    AboutmeComponent,
    YoutubePlaylistComponent,
    SponsorpageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
