import { NgModule } from '@angular/core';
import { MatButtonModule,MatButtonToggleModule,MatIconModule, MatNativeDateModule, MatInputModule,
   MatTableModule,MatCell, MatHeaderCell, MatCheckbox } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';


const MaterialComponents = [ MatButtonModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatFormFieldModule,
MatRadioModule,MatStepperModule,MatDatepickerModule,MatDialogModule,MatSelectModule,MatToolbarModule,MatNativeDateModule,
MatInputModule,MatTableModule];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
