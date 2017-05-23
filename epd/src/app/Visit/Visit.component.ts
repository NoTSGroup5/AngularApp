import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VisitService } from './Visit.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Visit',
	templateUrl: './Visit.component.html',
	styleUrls: ['./Visit.component.css'],
  providers: [VisitService]
})
export class VisitComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      id = new FormControl("", Validators.required);
  
      date = new FormControl("", Validators.required);
  
      description = new FormControl("", Validators.required);
  
      organisation = new FormControl("", Validators.required);
  


  constructor(private serviceVisit:VisitService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          date:this.date,
        
    
        
          description:this.description,
        
    
        
          organisation:this.organisation
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceVisit.getAll()
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
      $class: "nl.epd.blockchain.Visit",
      
        
          "id":this.id.value,
        
      
        
          "date":this.date.value,
        
      
        
          "description":this.description.value,
        
      
        
          "organisation":this.organisation.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "date":null,
        
      
        
          "description":null,
        
      
        
          "organisation":null
        
      
    });

    return this.serviceVisit.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "date":null,
        
      
        
          "description":null,
        
      
        
          "organisation":null 
        
      
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
      $class: "nl.epd.blockchain.Visit",
      
        
          
        
    
        
          
            "date":this.date.value,
          
        
    
        
          
            "description":this.description.value,
          
        
    
        
          
            "organisation":this.organisation.value
          
        
    
    };

    return this.serviceVisit.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceVisit.deleteAsset(this.currentId)
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

    return this.serviceVisit.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "date":null,
          
        
          
            "description":null,
          
        
          
            "organisation":null 
          
        
      };



      
        if(result.id){
          formObject.id = result.id;
        }else{
          formObject.id = null;
        }
      
        if(result.date){
          formObject.date = result.date;
        }else{
          formObject.date = null;
        }
      
        if(result.description){
          formObject.description = result.description;
        }else{
          formObject.description = null;
        }
      
        if(result.organisation){
          formObject.organisation = result.organisation;
        }else{
          formObject.organisation = null;
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
        
      
        
          "date":null,
        
      
        
          "description":null,
        
      
        
          "organisation":null 
        
      
      });
  }

}
