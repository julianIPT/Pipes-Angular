import { NgModule } from '@angular/core';

import {FieldsetModule} from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule

  ],
  imports: [

  ]
})
export class PrimeNgModule { }
