import { Injectable } from '@angular/core';
import { ngSevillaWebData } from './models/ngSevillaWebData';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  constructor() {}

  getData(): ngSevillaWebData {
    return {
      groupInfo: {
        name: 'ngSevilla',
        description: `
          Trabajas con Angular o AngularJS y te gustaría compartir tu experiencia? tener un grupo de personas al que preguntar dudas? asistir a eventos de difusión para estar al tanto de todo lo que se mueve en el desarrollo con Angular?
          Si eres de Sevilla apunta y únete a nosotros, pronto iremos informando de todos nuestros eventos.
        `,
        imgSrc: 'ngSevilla.jpg'
      },
      meetups: [
        {
          title: 'Formularios reactivos con Angular 7',
          date: new Date(2019, 0, 23, 19, 0),
          description: `
          Todo lo que veremos:
            - Tipos de formularios en Angular
            - Formularios Reactivos
            - Json Schema Form
          `,
          imgSrc: ''
        },
        {
          title: 'Angular, interfaces, frameworks y guías de estilo',
          date: new Date(20190101),
          description: `
            Hoy en día no podemos negar que el diseño de un aplicación es tan importante para la experiencia de usuario como la propia funcionalidad. 
            Nos ayuda a crear imagen de marca y a dar un toque de distinción a nuestro producto.
            “El diseño es un plan para ordenar elementos de la mejor manera posible con un propósito particular”
            (Charles Eames, arquitecto, diseñador y director de cine estadounidense, 1907-1978).
          `,
          imgSrc: ''
        },
        {
          title: 'Programación Reactiva en Angular (RxJs)',
          date: new Date(20190101),
          description: `
            Va siendo hora de arrancar con la nueva comunidad Angular en Sevilla. ngSevilla nace con la intención de compartir conocimientos y buenos ratos alrededor de este importante framework el en mundo del desarrollo web.
            En esta primera sesión veremos una de las grandes novedades a partir de la versión 2 de Angular como es el uso de la librería RxJS dentro del propio core del framework.
            Veremos en qué consiste la Programación Reactiva y haremos un ejercicio práctico del uso dentro de nuestras aplicaciones Angular.
          `,
          imgSrc: ''
        }
      ]
    };
  }
}
