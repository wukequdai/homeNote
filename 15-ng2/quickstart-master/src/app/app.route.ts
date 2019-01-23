import {Routes,Router,RouterModule} 
from '@angular/router';
import { demo01Component } from './demo01/app.demo01'
import { demo02Component } from './demo02/app.demo02'
import { NgModule } from '@angular/core'

const routes:Routes = [
    {path:'demo01',component:demo01Component},
    {path:'demo02',component:demo02Component},
    {path:'',redirectTo:'/demo01',pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{};
