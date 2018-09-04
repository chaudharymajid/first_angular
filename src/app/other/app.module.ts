import {Component} from "@angular/core";

@Component({
    selector: 'my-typo',
    template: `<input type = 'text' [(ngModel)] = 'userText'/>
               <typo [word] = 'userText'></typo>`
})

export class printMyTypo{
    userText: string = "This is crazy";
}