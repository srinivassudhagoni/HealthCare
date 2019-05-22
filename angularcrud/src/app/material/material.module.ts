import { NgModule } from '@angular/core';
import { MatButtonModule,MatButtonToggleModule,MatIconModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
const MaterialComponents = [ MatButtonModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatFormFieldModule ];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
