import { Component, OnInit } from '@angular/core';
import { TwitchEmbed, TwitchEmbedLayout, TwitchPlayer } from 'twitch-player';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      let embed = new TwitchEmbed('twitch-player', {
        width: 1200,
        height: 720,
        channel: "Johno",
        layout: TwitchEmbedLayout.VIDEO_WITH_CHAT
      });
    }
  }




