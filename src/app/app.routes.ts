import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommentComponent } from './comment/comment.component';
import { AnalyticComponent } from './analytic/analytic.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
{path:'dashboard', component:DashboardComponent},
//{path:'**', component:PagenotfoundComponent}, //** if no path is matching
{path:'comment', component:CommentComponent},
{path:'analytic',component:AnalyticComponent},
{path:'content',component:ContentComponent}

];


