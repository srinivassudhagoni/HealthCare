import { NgModule } from '@angular/core';
import { MatButtonModule,MatButtonToggleModule,MatIconModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';

const MaterialComponents = [ MatButtonModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatFormFieldModule,
MatRadioModule ];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
