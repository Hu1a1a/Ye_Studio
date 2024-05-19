import { Component } from '@angular/core';

@Component({
  selector: 'app-homexx',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class oldHomeComponent {

  Product: { Title: string, Description: string, src: string, url: string }[] = [
    {
      Title: "WhyUON",
      Description: "Why·U·ON. Why are you online?",
      src: "./assets/urlimg/web_01_logo.png",
      url: "https://whyuon.com/"
    }, {
      Title: "Sandberg Estates",
      Description: "Luxury Real Estate Agency in Mallorca",
      src: "https://sandberg-estates.com/assets/icons/Logo_White.svg",
      url: "https://sandberg-estates.com/"
    }, {
      Title: "Asyslink",
      Description: "",
      src: "https://asyslink.com/imagenes/logo.png",
      url: "https://asyslink.com/"
    }, {
      Title: "Villa Marina",
      Description: "a 20 metros del mar con piscina privada",
      src: "./assets/urlimg/Villa Marina.png",
      url: "https://hu1a1a.github.io/VillaMarina/",
    },
  ]
} 
