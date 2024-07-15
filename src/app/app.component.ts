import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from "./header/header.component";
import { AngDirDeepDiveComponent } from "./ang-dir-deep-dive/ang-dir-deep-dive.component"
import { AttrbDirComponent } from "./attrb-dir/attrb-dir.component" 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, AngDirDeepDiveComponent, AttrbDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'MyFirstApp loded dynamically';
  imgURL: string = 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSYMUVWs4YZszvRIA9Mah87LfUDQJKzGiL84SxYAowgelFmqLul_27TqEndaAdqI1h-MTdgcpuwDYiPpwg7a-VoVYVEDCJPgGkJIK3uUcM'
  isDisabled: boolean=true;
  isActive = true;
}
