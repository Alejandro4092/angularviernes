import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menucomponent } from "./components/menucomponent/menucomponent";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Menucomponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angularviernes');
}
