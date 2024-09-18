import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxIuguModule } from 'projects/ngx-iugu/src/public-api';

import { FormComponent } from './form.component';
import { environment } from 'src/environments/environment';
import { FormRoutingModule } from './form-routing.module';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorsPipe } from './pipes/errors/errors.pipe';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

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
    NgxMaskDirective,
    NgxMaskPipe,
    NgxIuguModule.forRoot({
      testMode: !environment.production,
    }),
  ],
  providers: [provideNgxMask()],
  exports: [FormComponent],
})
export class FormModule {}
