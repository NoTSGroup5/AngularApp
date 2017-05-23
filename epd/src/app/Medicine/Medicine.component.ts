import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MedicineService } from './Medicine.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Medicine',
	templateUrl: './Medicine.component.html',
	styleUrls: ['./Medicine.component.css'],
  providers: [MedicineService]
})
export class MedicineComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      id = new FormControl("", Validators.required);
  
      name = new FormControl("", Validators.required);
  
      startDate = new FormControl("", Validators.required);
  
      endDate = new FormControl("", Validators.required);
  
      reason = new FormControl("", Validators.required);
  
      dosage = new FormControl("", Validators.required);
  


  constructor(private serviceMedicine:MedicineService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          name:this.name,
        
    
        
          startDate:this.startDate,
        
    
        
          endDate:this.endDate,
        
    
        
          reason:this.reason,
        
    
        
          dosage:this.dosage
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceMedicine.getAll()
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
      $class: "nl.epd.blockchain.Medicine",
      
        
          "id":this.id.value,
        
      
        
          "name":this.name.value,
        
      
        
          "startDate":this.startDate.value,
        
      
        
          "endDate":this.endDate.value,
        
      
        
          "reason":this.reason.value,
        
      
        
          "dosage":this.dosage.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "name":null,
        
      
        
          "startDate":null,
        
      
        
          "endDate":null,
        
      
        
          "reason":null,
        
      
        
          "dosage":null
        
      
    });

    return this.serviceMedicine.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "name":null,
        
      
        
          "startDate":null,
        
      
        
          "endDate":null,
        
      
        
          "reason":null,
        
      
        
          "dosage":null 
        
      
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
      $class: "nl.epd.blockchain.Medicine",
      
        
          
        
    
        
          
            "name":this.name.value,
          
        
    
        
          
            "startDate":this.startDate.value,
          
        
    
        
          
            "endDate":this.endDate.value,
          
        
    
        
          
            "reason":this.reason.value,
          
        
    
        
          
            "dosage":this.dosage.value
          
        
    
    };

    return this.serviceMedicine.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceMedicine.deleteAsset(this.currentId)
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

    return this.serviceMedicine.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "name":null,
          
        
          
            "startDate":null,
          
        
          
            "endDate":null,
          
        
          
            "reason":null,
          
        
          
            "dosage":null 
          
        
      };



      
        if(result.id){
          formObject.id = result.id;
        }else{
          formObject.id = null;
        }
      
        if(result.name){
          formObject.name = result.name;
        }else{
          formObject.name = null;
        }
      
        if(result.startDate){
          formObject.startDate = result.startDate;
        }else{
          formObject.startDate = null;
        }
      
        if(result.endDate){
          formObject.endDate = result.endDate;
        }else{
          formObject.endDate = null;
        }
      
        if(result.reason){
          formObject.reason = result.reason;
        }else{
          formObject.reason = null;
        }
      
        if(result.dosage){
          formObject.dosage = result.dosage;
        }else{
          formObject.dosage = null;
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
        
      
        
          "name":null,
        
      
        
          "startDate":null,
        
      
        
          "endDate":null,
        
      
        
          "reason":null,
        
      
        
          "dosage":null 
        
      
      });
  }

}
