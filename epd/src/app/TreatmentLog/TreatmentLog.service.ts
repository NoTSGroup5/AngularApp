import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { TreatmentLog } from '../nl.epd.blockchain';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TreatmentLogService {

	
		private NAMESPACE: string = 'TreatmentLog';
	



    constructor(private dataService: DataService<TreatmentLog>) {
    };

    public getAll(): Observable<TreatmentLog[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<TreatmentLog> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<TreatmentLog> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<TreatmentLog> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<TreatmentLog> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
