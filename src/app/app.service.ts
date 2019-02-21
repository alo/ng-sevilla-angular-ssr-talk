import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() {}

  getData() {
    return {
      name: 'ngSevilla',
      description: `
        Trabajas con <b>Angular</b> o AngularJS y te gustaría compartir tu experiencia? tener un grupo de personas al que preguntar dudas? asistir a eventos de difusión para estar al tanto de todo lo que se mueve en el desarrollo con Angular?
        Si eres de Sevilla, pasas por aquí de ven en cuando o simplemente quieres enterarte de las actividades del grupo <b>únete a nosotros</b>.
      `,
      position: 'Angular Community Group',
      profilePic: {
        src: 'assets/ngSevilla.png',
        alt: 'Foto del grupo ngSevilla'
      },
      socialLinks: [
        {
          icon: 'fa-svg fa-meetup',
          link: 'https://www.meetup.com/es-ES/ngSevilla/'
        },
        {
          icon: 'fa-svg fa-twitter',
          link: 'https://twitter.com/ngsevilla'
        },
        {
          icon: 'fa-svg fa-github',
          link: 'https://github.com/ngsevilla'
        }
      ],
      projects: [
        {
          title: 'Angular SSR',
          desc: `Angular SSR, Performance + SEO
          Diferencias entre renderizado en cliente y SSR (server side rendering) con Angular Universal. Se analizará en qué casos merece la pena y cómo afecta al SEO y la performance de tu web.`,
          subtitle: '21/02/2019',
          imgSrc: 'assets/universal.png',
          imgAlt: 'logo universal',
          socialLinks: [
            {
              icon: 'fa-svg fa-meetup',
              link: 'https://www.meetup.com/es-ES/ngSevilla/events/258572535/'
            },
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/aloDev'
            },
            {
              icon: 'fa-svg fa-linkedin',
              link: 'https://www.linkedin.com/in/alodev'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/alo'
            }
          ]
        },
        {
          title: 'Angular 7 Forms',
          subtitle: '24/01/2019',
          desc: `Hay varias maneras de afrontar los formularios en Angular, la más interesante quizás sean los formularios reactivos. También echaremos un ojo a los Json Schema Form a ver qué nos aportan.`,
          imgSrc: 'assets/angular.png',
          imgAlt: 'logo angular',
          socialLinks: [
            {
              icon: 'fa-svg fa-meetup',
              link: 'https://www.meetup.com/es-ES/ngSevilla/events/256866918/'
            },
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/serrapos'
            },
            {
              icon: 'fa-svg fa-linkedin',
              link: 'https://www.linkedin.com/in/sergio-raposo-vargas'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/serrapos'
            }
          ]
        },
        {
          title: 'Reactive Programming',
          desc: `Una de las grandes novedades a partir de la v2 de Angular es el uso de la librería RxJS dentro del core.
          Veremos en qué consiste la Programación Reactiva y con un ejercicio práctico del uso dentro de nuestras aplicaciones.`,
          imgSrc: 'assets/rxjs.jpg',
          subtitle: '18/08/2018',
          imgAlt: 'Logo reactive',
          socialLinks: [
            {
              icon: 'fa-svg fa-meetup',
              link: 'https://www.meetup.com/almeriajs/'
            },
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/almeriajs'
            },
            {
              icon: 'fa-svg fa-linkedin',
              link: 'https://www.linkedin.com/in/marcos-alberto-ginel-calder%C3%B3n-30bb68100/'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/MarcosGinel'
            }
            
          ]
        }
      ],
      title: 'ngSevilla',
      metas: [
        {
          name: 'author',
          content: 'ngSevilla'
        },
        {
          name: 'keywords',
          content: 'angular, sevilla, seo, friendly, software, community'
        },
        {
          name: 'description',
          content:
            'Comunidad de Angular de Sevilla, todos son bienvenidos a charlar de cualquier tecnología y/o metodología de desarrollo web!'
        },
        {
          name: 'copyright',
          content: 'ngSevilla'
        },
        {
          property: 'og:title',
          content: 'ngSevilla'
        },
        {
          property: 'og:description',
          content:
            'Comunidad de Angular de Sevilla, todos son bienvenidos a charlar de cualquier tecnología y/o metodología de desarrollo web!'
        },
        {
          property: 'og:image',
          content: 'https://pbs.twimg.com/profile_images/876728287967543297/5MpxO60C_200x200.jpg'
        },
        {
          property: 'og:url',
          content: 'https://www.meetup.com/es-ES/ngSevilla/'
        },
        {
          property: 'og:site_name',
          content: 'ngSevilla'
        },
        {
          name: 'twitter:title',
          content: 'ngSevilla'
        },
        {
          name: 'twitter:description',
          content:
            'Comunidad de Angular de Sevilla, todos son bienvenidos a charlar de cualquier tecnología y/o metodología de desarrollo web!'
        },
        {
          name: 'twitter:image',
          content: 'https://pbs.twimg.com/profile_images/876728287967543297/5MpxO60C_200x200.jpg'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    };
  }
}
