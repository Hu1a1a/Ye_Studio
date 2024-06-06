import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class ProyectosComponente {
  Proyectos: { name: string, url: string, img: string }[] = [
    {
      name: "Clara Fuertes",
      url: "https://claranutricion.com/",
      img: "assets/urlimg/ClaraFuertes.png"
    },
    {
      name: "WhyUOn",
      url: "https://whyuon.com/",
      img: "assets/urlimg/whyuon.png"
    },
    {
      name: "Luxury Real Estate Agency in Mallorca",
      url: "https://sandberg-estates.com/",
      img: "assets/urlimg/sandberg.jpg"
    },
    {
      name: "Asyslink",
      url: "https://asyslink.com/",
      img: "assets/urlimg/asyslink.png"
    },
    {
      name: "WoofTools",
      url: "https://www.wooftools.io/",
      img: "assets/urlimg/WoofTools.png"
    },
    {
      name: "Viajes Mundomania",
      url: "https://www.viajesmundomania.com/",
      img: "assets/urlimg/mundomania.png"
    },
  ]
  Link(url:string){
    window.open(url,'_blank');
  }
}
