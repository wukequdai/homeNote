import { Component, OnInit ,Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo02',
    templateUrl: 'demo02.component.html'
})
export class demo02Component implements OnInit {
    @Input() userAge:any;

    list:number[] = [10,20,30,40,50];
    isMemeber:boolean = false;

    userName = "zhangSan";
    order = {userAddr:''};
    constructor() { }

    ngOnInit() { }

    send=function(){
        console.log('已经拿到数据了');
    }

}