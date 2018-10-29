import { Component, NgZone } from '@angular/core';

import { Platform } from 'ionic-angular';

declare var ApiAIPromises: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  answer = [];
  question: any = '';

  constructor(public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
      ApiAIPromises.init({
        clientAccessToken: "3c6dabfc347549a6a445bf465bf3072b"
      })
      // .then(result => console.log(result));

    });
  }
ask(question) {
  ApiAIPromises.requestText({
    query: question
  })
  .then(({result: {fulfillment: {speech}}}) => {
     this.ngZone.run(()=> {
       this.answer = speech;
     });
    })}}
