import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { MedicalFile } from '../nl.epd.blockchain';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class MedicalFileService {

	
		private NAMESPACE: string = 'MedicalFile';
	



    constructor(private dataService: DataService<MedicalFile>) {
    };

    public getAll(): Observable<MedicalFile[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<MedicalFile> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<MedicalFile> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<MedicalFile> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<MedicalFile> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
