import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionControlComponent } from './missioncontrol/missioncontrol.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { MissionService } from './mission.service';
import {RouterModule} from '@angular/router';
import {MissionRoutes} from '../mission/mission.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MissionRoutes),
  ],
  declarations: [MissionControlComponent, AstronautComponent],
  providers:[MissionService]
})
export class MissionModule { }
