import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  `,
})

//  <demo01></demo01>
  // <demo02 [userAge]=age></demo02>
export class AppComponent  { 
  name = 'Angular';
  age = 20;
 }
