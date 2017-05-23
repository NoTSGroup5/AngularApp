import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Visit } from '../nl.epd.blockchain';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class VisitService {

	
		private NAMESPACE: string = 'Visit';
	



    constructor(private dataService: DataService<Visit>) {
    };

    public getAll(): Observable<Visit[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Visit> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Visit> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Visit> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Visit> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
