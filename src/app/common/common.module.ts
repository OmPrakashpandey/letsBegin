import { NgModule ,APP_INITIALIZER} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from './utils.service';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';;
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
import * as $ from "jquery";
import { CountDownComponent } from './count-down/count-down.component';
export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig().then((config)=> config);
};
@NgModule({
  declarations: [CountDownComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule ,
    MaterialModule,
    CountDownComponent
  ],
  providers:[UtilsService, {
    provide: APP_INITIALIZER,
    useFactory: configFactory,
    deps: [ConfigService],
    multi: true
  }]
})
export class RecurrentModule { }
