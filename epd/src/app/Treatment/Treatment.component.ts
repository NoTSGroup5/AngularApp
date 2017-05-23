import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TreatmentService } from './Treatment.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Treatment',
	templateUrl: './Treatment.component.html',
	styleUrls: ['./Treatment.component.css'],
  providers: [TreatmentService]
})
export class TreatmentComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      id = new FormControl("", Validators.required);
  
      startDate = new FormControl("", Validators.required);
  
      endDate = new FormControl("", Validators.required);
  
      description = new FormControl("", Validators.required);
  
      logs = new FormControl("", Validators.required);
  


  constructor(private serviceTreatment:TreatmentService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          startDate:this.startDate,
        
    
        
          endDate:this.endDate,
        
    
        
          description:this.description,
        
    
        
          logs:this.logs
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceTreatment.getAll()
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
      $class: "nl.epd.blockchain.Treatment",
      
        
          "id":this.id.value,
        
      
        
          "startDate":this.startDate.value,
        
      
        
          "endDate":this.endDate.value,
        
      
        
          "description":this.description.value,
        
      
        
          "logs":this.logs.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "startDate":null,
        
      
        
          "endDate":null,
        
      
        
          "description":null,
        
      
        
          "logs":null
        
      
    });

    return this.serviceTreatment.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "startDate":null,
        
      
        
          "endDate":null,
        
      
        
          "description":null,
        
      
        
          "logs":null 
        
      
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
      $class: "nl.epd.blockchain.Treatment",
      
        
          
        
    
        
          
            "startDate":this.startDate.value,
          
        
    
        
          
            "endDate":this.endDate.value,
          
        
    
        
          
            "description":this.description.value,
          
        
    
        
          
            "logs":this.logs.value
          
        
    
    };

    return this.serviceTreatment.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceTreatment.deleteAsset(this.currentId)
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

    return this.serviceTreatment.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "startDate":null,
          
        
          
            "endDate":null,
          
        
          
            "description":null,
          
        
          
            "logs":null 
          
        
      };



      
        if(result.id){
          formObject.id = result.id;
        }else{
          formObject.id = null;
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
      
        if(result.description){
          formObject.description = result.description;
        }else{
          formObject.description = null;
        }
      
        if(result.logs){
          formObject.logs = result.logs;
        }else{
          formObject.logs = null;
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
        
      
        
          "startDate":null,
        
      
        
          "endDate":null,
        
      
        
          "description":null,
        
      
        
          "logs":null 
        
      
      });
  }

}
