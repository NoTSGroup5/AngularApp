import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { OrganisationType } from '../nl.epd.blockchain';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class OrganisationTypeService {

	
		private NAMESPACE: string = 'OrganisationType';
	



    constructor(private dataService: DataService<OrganisationType>) {
    };

    public getAll(): Observable<OrganisationType[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<OrganisationType> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<OrganisationType> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<OrganisationType> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<OrganisationType> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
