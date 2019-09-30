import { Patient } from './department.model';

export class GetListByDepartmentRequest {

    DepartmentId: number;
}


export class GetAppointmentSlotListRequest{
    DoctorId: number;
    AppointmentDate: Date;
}

export class GetListByDoctorRequest{
    DoctorId: number;
}

export class Appointment {

    ConsultationTime: Date;
    SlotTime: string;
    PatientId: number;
    DoctorId: number;
    Patient: Patient;
    CreditCardPayment: CreditCardPayment;
    AppointmentSlotId: number;
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

