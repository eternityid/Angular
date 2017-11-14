import { MissionControlComponent} from './missioncontrol/missioncontrol.component';
import {Routes} from '@angular/router';

export const MissionRoutes:Routes=[
    {
        path:'mission',
        children:[{
            path:'',
            component:MissionControlComponent
        }]
    }]
