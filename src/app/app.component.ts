import { Component } from '@angular/core';
import { CustomerService } from './customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService]
})
export class AppComponent {
  title = 'AngularServicesBatchThree';
}
