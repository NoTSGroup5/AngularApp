import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { MedicalFileComponent } from './MedicalFile/MedicalFile.component';
import { MedicineComponent } from './Medicine/Medicine.component';
import { VisitComponent } from './Visit/Visit.component';
import { TreatmentComponent } from './Treatment/Treatment.component';
import { TreatmentLogComponent } from './TreatmentLog/TreatmentLog.component';
import { OrganisationComponent } from './Organisation/Organisation.component';
import { OrganisationTypeComponent } from './OrganisationType/OrganisationType.component';
import { OrganisationPermissionComponent } from './OrganisationPermission/OrganisationPermission.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'MedicalFile', component: MedicalFileComponent},
		
		{ path: 'Medicine', component: MedicineComponent},
		
		{ path: 'Visit', component: VisitComponent},
		
		{ path: 'Treatment', component: TreatmentComponent},
		
		{ path: 'TreatmentLog', component: TreatmentLogComponent},
		
		{ path: 'Organisation', component: OrganisationComponent},
		
		{ path: 'OrganisationType', component: OrganisationTypeComponent},
		
		{ path: 'OrganisationPermission', component: OrganisationPermissionComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
