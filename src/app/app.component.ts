import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 style="color: steelblue; padding-left: 50%;">
  {{pageHeader}}
</h1>`
})
export class AppComponent {
  pageHeader = 'Employee Details';
}