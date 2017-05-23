// export namespace nl.epd.blockchain{
   export class MedicalFile {
      id: string;
      owner: Patient;
      mentors: Patient[];
      permissions: OrganisationPermission[];
      visits: Visit[];
      allergies: string[];
      treatments: Treatment[];
      medicine: Medicine[];
   }
   export class Medicine {
      id: string;
      name: string;
      startDate: number;
      endDate: number;
      reason: string;
      dosage: string;
   }
   export class Visit {
      id: string;
      date: number;
      description: string;
      organisation: Organisation;
   }
   export class Treatment {
      id: string;
      startDate: number;
      endDate: number;
      description: string;
      logs: TreatmentLog[];
   }
   export class TreatmentLog {
      id: string;
      date: number;
      description: string;
   }
   export class Organisation {
      id: string;
      name: string;
      city: string;
      zipCode: string;
      street: string;
      houseNumber: string;
      houseNumberExtra: string;
      organisationType: OrganisationType;
   }
   export class OrganisationType {
      id: string;
      name: string;
      description: string;
   }
   export class OrganisationPermission {
      id: string;
      organisation: Organisation;
      read: boolean;
      write: boolean;
      del: boolean;
   }
   export class Patient {
      bsn: string;
      firstName: string;
      namePrefix: string;
      lastName: string;
      email: string;
      telephoneNumber: string;
      birthday: string;
      gender: string;
      city: string;
      zipCode: string;
      street: string;
      houseNumber: string;
      houseNumberExtra: string;
   }
   export class HealthCareProfessional {
      bsn: string;
      firstName: string;
      namePrefix: string;
      lastName: string;
   }
   export class PatientCreate {
      transactionId: string;
      patient: Patient;
      timestamp: Date;
   }
// }
