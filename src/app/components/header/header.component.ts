import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    firstName : string = "sourav";
    date : Number = 26;
    inputType : string = "button";
    selectedField : string = "start"

    showMessage() {
      alert("Wlecome to my blog");
    }
}
