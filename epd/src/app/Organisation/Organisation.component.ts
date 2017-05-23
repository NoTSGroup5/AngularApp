import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OrganisationService } from './Organisation.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Organisation',
	templateUrl: './Organisation.component.html',
	styleUrls: ['./Organisation.component.css'],
  providers: [OrganisationService]
})
export class OrganisationComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      id = new FormControl("", Validators.required);
  
      name = new FormControl("", Validators.required);
  
      city = new FormControl("", Validators.required);
  
      zipCode = new FormControl("", Validators.required);
  
      street = new FormControl("", Validators.required);
  
      houseNumber = new FormControl("", Validators.required);
  
      houseNumberExtra = new FormControl("", Validators.required);
  
      organisationType = new FormControl("", Validators.required);
  


  constructor(private serviceOrganisation:OrganisationService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          name:this.name,
        
    
        
          city:this.city,
        
    
        
          zipCode:this.zipCode,
        
    
        
          street:this.street,
        
    
        
          houseNumber:this.houseNumber,
        
    
        
          houseNumberExtra:this.houseNumberExtra,
        
    
        
          organisationType:this.organisationType
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceOrganisation.getAll()
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
      $class: "nl.epd.blockchain.Organisation",
      
        
          "id":this.id.value,
        
      
        
          "name":this.name.value,
        
      
        
          "city":this.city.value,
        
      
        
          "zipCode":this.zipCode.value,
        
      
        
          "street":this.street.value,
        
      
        
          "houseNumber":this.houseNumber.value,
        
      
        
          "houseNumberExtra":this.houseNumberExtra.value,
        
      
        
          "organisationType":this.organisationType.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "name":null,
        
      
        
          "city":null,
        
      
        
          "zipCode":null,
        
      
        
          "street":null,
        
      
        
          "houseNumber":null,
        
      
        
          "houseNumberExtra":null,
        
      
        
          "organisationType":null
        
      
    });

    return this.serviceOrganisation.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "name":null,
        
      
        
          "city":null,
        
      
        
          "zipCode":null,
        
      
        
          "street":null,
        
      
        
          "houseNumber":null,
        
      
        
          "houseNumberExtra":null,
        
      
        
          "organisationType":null 
        
      
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
      $class: "nl.epd.blockchain.Organisation",
      
        
          
        
    
        
          
            "name":this.name.value,
          
        
    
        
          
            "city":this.city.value,
          
        
    
        
          
            "zipCode":this.zipCode.value,
          
        
    
        
          
            "street":this.street.value,
          
        
    
        
          
            "houseNumber":this.houseNumber.value,
          
        
    
        
          
            "houseNumberExtra":this.houseNumberExtra.value,
          
        
    
        
          
            "organisationType":this.organisationType.value
          
        
    
    };

    return this.serviceOrganisation.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceOrganisation.deleteAsset(this.currentId)
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

    return this.serviceOrganisation.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "name":null,
          
        
          
            "city":null,
          
        
          
            "zipCode":null,
          
        
          
            "street":null,
          
        
          
            "houseNumber":null,
          
        
          
            "houseNumberExtra":null,
          
        
          
            "organisationType":null 
          
        
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
      
        if(result.city){
          formObject.city = result.city;
        }else{
          formObject.city = null;
        }
      
        if(result.zipCode){
          formObject.zipCode = result.zipCode;
        }else{
          formObject.zipCode = null;
        }
      
        if(result.street){
          formObject.street = result.street;
        }else{
          formObject.street = null;
        }
      
        if(result.houseNumber){
          formObject.houseNumber = result.houseNumber;
        }else{
          formObject.houseNumber = null;
        }
      
        if(result.houseNumberExtra){
          formObject.houseNumberExtra = result.houseNumberExtra;
        }else{
          formObject.houseNumberExtra = null;
        }
      
        if(result.organisationType){
          formObject.organisationType = result.organisationType;
        }else{
          formObject.organisationType = null;
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
        
      
        
          "city":null,
        
      
        
          "zipCode":null,
        
      
        
          "street":null,
        
      
        
          "houseNumber":null,
        
      
        
          "houseNumberExtra":null,
        
      
        
          "organisationType":null 
        
      
      });
  }

}
