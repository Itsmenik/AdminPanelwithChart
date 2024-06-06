
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PageheaderComponent,SidenavComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-project';

}
