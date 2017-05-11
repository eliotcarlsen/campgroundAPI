import { Component } from '@angular/core';
import { ApiKey } from '../../api-key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiKey]
})
export class AppComponent {
  title = 'app works!';
}
