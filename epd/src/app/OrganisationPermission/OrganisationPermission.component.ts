import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OrganisationPermissionService } from './OrganisationPermission.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-OrganisationPermission',
	templateUrl: './OrganisationPermission.component.html',
	styleUrls: ['./OrganisationPermission.component.css'],
  providers: [OrganisationPermissionService]
})
export class OrganisationPermissionComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      id = new FormControl("", Validators.required);
  
      organisation = new FormControl("", Validators.required);
  
      read = new FormControl("", Validators.required);
  
      write = new FormControl("", Validators.required);
  
      del = new FormControl("", Validators.required);
  


  constructor(private serviceOrganisationPermission:OrganisationPermissionService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          organisation:this.organisation,
        
    
        
          read:this.read,
        
    
        
          write:this.write,
        
    
        
          del:this.del
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceOrganisationPermission.getAll()
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
      $class: "nl.epd.blockchain.OrganisationPermission",
      
        
          "id":this.id.value,
        
      
        
          "organisation":this.organisation.value,
        
      
        
          "read":this.read.value,
        
      
        
          "write":this.write.value,
        
      
        
          "del":this.del.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "organisation":null,
        
      
        
          "read":null,
        
      
        
          "write":null,
        
      
        
          "del":null
        
      
    });

    return this.serviceOrganisationPermission.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "organisation":null,
        
      
        
          "read":null,
        
      
        
          "write":null,
        
      
        
          "del":null 
        
      
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
      $class: "nl.epd.blockchain.OrganisationPermission",
      
        
          
        
    
        
          
            "organisation":this.organisation.value,
          
        
    
        
          
            "read":this.read.value,
          
        
    
        
          
            "write":this.write.value,
          
        
    
        
          
            "del":this.del.value
          
        
    
    };

    return this.serviceOrganisationPermission.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceOrganisationPermission.deleteAsset(this.currentId)
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

    return this.serviceOrganisationPermission.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "organisation":null,
          
        
          
            "read":null,
          
        
          
            "write":null,
          
        
          
            "del":null 
          
        
      };



      
        if(result.id){
          formObject.id = result.id;
        }else{
          formObject.id = null;
        }
      
        if(result.organisation){
          formObject.organisation = result.organisation;
        }else{
          formObject.organisation = null;
        }
      
        if(result.read){
          formObject.read = result.read;
        }else{
          formObject.read = null;
        }
      
        if(result.write){
          formObject.write = result.write;
        }else{
          formObject.write = null;
        }
      
        if(result.del){
          formObject.del = result.del;
        }else{
          formObject.del = null;
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
        
      
        
          "organisation":null,
        
      
        
          "read":null,
        
      
        
          "write":null,
        
      
        
          "del":null 
        
      
      });
  }

}
