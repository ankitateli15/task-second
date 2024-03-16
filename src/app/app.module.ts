import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import {  RouterModule } from "@angular/router";
import { OneComponent } from "./one/one.component";
import { AppRountingModule } from "./app.routing.module";
import { TwoComponent } from "./two/two.component";





@NgModule({
    declarations: 
    [AppComponent,
    HeaderComponent,
    OneComponent,
    TwoComponent

   

   
  
     
        
   
        
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule ,
        ReactiveFormsModule ,
        ReactiveFormsModule,
        HttpClientModule,
        AppRountingModule
        


        

        
        
    
    
      
     
        
        
    ],
    exports: [
        RouterModule
    ],
    providers: [
        
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    
}




