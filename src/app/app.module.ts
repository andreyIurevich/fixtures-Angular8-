import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { SearchInputComponent } from './pages/search-input/search-input.component';
import { LoaderContainerComponent } from './pages/loader-container/loader-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchResultComponent,
    SearchInputComponent,
    LoaderContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
