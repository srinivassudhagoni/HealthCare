import { Patient } from './department.model';

export class GetListByDepartmentRequest {

    DepartmentId: number;
}

export class Appointment {

    ConsultationTime: Date;
    PatientId: number;
    DoctorId: number;
    Patient: Patient;
    CreditCardPayment: CreditCardPayment;
}

export class CreditCardPayment{

    Id: number;
    CardNumber: string;
    ExpirationDate: Date;
    CustomerName: string;
    CVV: string;
}

export class PersistAppointmentRequest{
    Appointment: Appointment;
}

