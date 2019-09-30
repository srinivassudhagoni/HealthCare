import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatCell, MatHeaderCell } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';



const MaterialComponents = [ MatButtonModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatFormFieldModule,
MatRadioModule,MatStepperModule,MatDatepickerModule,MatDialogModule,MatSelectModule,MatToolbarModule,MatNativeDateModule,
MatInputModule,MatTableModule,MatMomentDateModule,MatExpansionModule,MatPaginatorModule,MatTabsModule];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
