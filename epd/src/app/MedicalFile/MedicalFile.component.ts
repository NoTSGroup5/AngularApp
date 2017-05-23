import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MedicalFileService } from './MedicalFile.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-MedicalFile',
	templateUrl: './MedicalFile.component.html',
	styleUrls: ['./MedicalFile.component.css'],
  providers: [MedicalFileService]
})
export class MedicalFileComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      id = new FormControl("", Validators.required);
  
      owner = new FormControl("", Validators.required);
  
      mentors = new FormControl("", Validators.required);
  
      permissions = new FormControl("", Validators.required);
  
      visits = new FormControl("", Validators.required);
  
      allergies = new FormControl("", Validators.required);
  
      treatments = new FormControl("", Validators.required);
  
      medicine = new FormControl("", Validators.required);
  


  constructor(private serviceMedicalFile:MedicalFileService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          owner:this.owner,
        
    
        
          mentors:this.mentors,
        
    
        
          permissions:this.permissions,
        
    
        
          visits:this.visits,
        
    
        
          allergies:this.allergies,
        
    
        
          treatments:this.treatments,
        
    
        
          medicine:this.medicine
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceMedicalFile.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "nl.epd.blockchain.MedicalFile",
      
        
          "id":this.id.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "mentors":this.mentors.value,
        
      
        
          "permissions":this.permissions.value,
        
      
        
          "visits":this.visits.value,
        
      
        
          "allergies":this.allergies.value,
        
      
        
          "treatments":this.treatments.value,
        
      
        
          "medicine":this.medicine.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "owner":null,
        
      
        
          "mentors":null,
        
      
        
          "permissions":null,
        
      
        
          "visits":null,
        
      
        
          "allergies":null,
        
      
        
          "treatments":null,
        
      
        
          "medicine":null
        
      
    });

    return this.serviceMedicalFile.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "owner":null,
        
      
        
          "mentors":null,
        
      
        
          "permissions":null,
        
      
        
          "visits":null,
        
      
        
          "allergies":null,
        
      
        
          "treatments":null,
        
      
        
          "medicine":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "nl.epd.blockchain.MedicalFile",
      
        
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "mentors":this.mentors.value,
          
        
    
        
          
            "permissions":this.permissions.value,
          
        
    
        
          
            "visits":this.visits.value,
          
        
    
        
          
            "allergies":this.allergies.value,
          
        
    
        
          
            "treatments":this.treatments.value,
          
        
    
        
          
            "medicine":this.medicine.value
          
        
    
    };

    return this.serviceMedicalFile.updateAsset(form.get("id").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceMedicalFile.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceMedicalFile.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "owner":null,
          
        
          
            "mentors":null,
          
        
          
            "permissions":null,
          
        
          
            "visits":null,
          
        
          
            "allergies":null,
          
        
          
            "treatments":null,
          
        
          
            "medicine":null 
          
        
      };



      
        if(result.id){
          formObject.id = result.id;
        }else{
          formObject.id = null;
        }
      
        if(result.owner){
          formObject.owner = result.owner;
        }else{
          formObject.owner = null;
        }
      
        if(result.mentors){
          formObject.mentors = result.mentors;
        }else{
          formObject.mentors = null;
        }
      
        if(result.permissions){
          formObject.permissions = result.permissions;
        }else{
          formObject.permissions = null;
        }
      
        if(result.visits){
          formObject.visits = result.visits;
        }else{
          formObject.visits = null;
        }
      
        if(result.allergies){
          formObject.allergies = result.allergies;
        }else{
          formObject.allergies = null;
        }
      
        if(result.treatments){
          formObject.treatments = result.treatments;
        }else{
          formObject.treatments = null;
        }
      
        if(result.medicine){
          formObject.medicine = result.medicine;
        }else{
          formObject.medicine = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "owner":null,
        
      
        
          "mentors":null,
        
      
        
          "permissions":null,
        
      
        
          "visits":null,
        
      
        
          "allergies":null,
        
      
        
          "treatments":null,
        
      
        
          "medicine":null 
        
      
      });
  }

}
