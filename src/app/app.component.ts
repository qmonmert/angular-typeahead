import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeaheadDirective } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TypeaheadDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selected?: string;
  states: string[] = [
    'Alabama ?'
  ];
}
