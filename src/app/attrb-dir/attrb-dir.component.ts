import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attrb-dir',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './attrb-dir.component.html',
  styleUrl: './attrb-dir.component.css'
})
export class AttrbDirComponent {
  isLoggedIn: boolean=true;
}
