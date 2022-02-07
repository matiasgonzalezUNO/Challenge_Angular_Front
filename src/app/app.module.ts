import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// lib externas
// import { ChartsModule } from 'ng2-charts';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule,
//   MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
//   MatSlideToggleModule } from '@angular/material';
// import { MatFormFieldModule } from '@angular/material/form-field';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

//Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [AppComponent, NopagefoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ComponentsModule,
    HttpClientModule,
    // MatFormFieldModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
