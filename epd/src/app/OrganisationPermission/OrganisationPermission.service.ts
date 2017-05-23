import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { OrganisationPermission } from '../nl.epd.blockchain';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class OrganisationPermissionService {

	
		private NAMESPACE: string = 'OrganisationPermission';
	



    constructor(private dataService: DataService<OrganisationPermission>) {
    };

    public getAll(): Observable<OrganisationPermission[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<OrganisationPermission> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<OrganisationPermission> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<OrganisationPermission> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<OrganisationPermission> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
