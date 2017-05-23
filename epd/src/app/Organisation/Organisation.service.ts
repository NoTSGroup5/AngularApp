import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Organisation } from '../nl.epd.blockchain';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class OrganisationService {

	
		private NAMESPACE: string = 'Organisation';
	



    constructor(private dataService: DataService<Organisation>) {
    };

    public getAll(): Observable<Organisation[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Organisation> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Organisation> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Organisation> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Organisation> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
