import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPageRoutingModule } from './groups-routing.module';

import { GroupsPage } from './groups.page';
import { DetailsPageRoutingModule } from './details/details-routing.module';
import { DetailsPage } from './details/details.page';
import { DetailsPageModule } from './details/details.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPageRoutingModule,
    DetailsPageRoutingModule,
    DetailsPageModule
  ],
  declarations: [GroupsPage]
})
export class GroupsPageModule { }
