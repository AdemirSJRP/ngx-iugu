import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

import { NgxMaskModule } from 'ngx-mask';
import { NgxIuguModule } from 'projects/ngx-iugu/src/public-api';

import { FormComponent } from './form.component';
import { environment } from 'src/environments/environment';
import { FormRoutingModule } from './form-routing.module';
import { ModalComponent } from './modal/modal.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { ErrorsPipe } from './pipes/errors/errors.pipe';

@NgModule({
  declarations: [FormComponent, ModalComponent, ErrorsPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    NgxMaskModule.forRoot({
      validation: true,
    }),
    NgxIuguModule.footRoot({
      testMode: !environment.production,
    }),
  ],
  exports: [FormComponent],
})
export class FormModule {}
