import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule ,RouterLink} from '@angular/router';


@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
   items:{icon:string; title:string; link:string}[]=[
    {icon:'dashboard',title:'Dashboard', link:'dashboard'},
    {icon:'smb_share',title:'Content', link:'content'},
    {icon:'table_chart_view',title:'Analytic', link:'analytic'},
    {icon:'chat',title:'Comment', link:'comment'},

   ]
}
