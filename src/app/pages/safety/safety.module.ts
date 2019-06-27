import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SafetyComponent } from './safety.component';
import { routing } from './safety.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    SafetyComponent
  ]
})
export class SafetyModule {}