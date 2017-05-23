import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { MedicalFileComponent } from './MedicalFile/MedicalFile.component';
import { MedicineComponent } from './Medicine/Medicine.component';
import { VisitComponent } from './Visit/Visit.component';
import { TreatmentComponent } from './Treatment/Treatment.component';
import { TreatmentLogComponent } from './TreatmentLog/TreatmentLog.component';
import { OrganisationComponent } from './Organisation/Organisation.component';
import { OrganisationTypeComponent } from './OrganisationType/OrganisationType.component';
import { OrganisationPermissionComponent } from './OrganisationPermission/OrganisationPermission.component';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    MedicalFileComponent,
		MedicineComponent,
		VisitComponent,
		TreatmentComponent,
		TreatmentLogComponent,
		OrganisationComponent,
		OrganisationTypeComponent,
		
    OrganisationPermissionComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
