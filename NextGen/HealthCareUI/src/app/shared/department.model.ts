export class Department {
    Id: number;
    Name: string;
}

export class GetListRequest {
    SearchString: string;
}

export class Doctor {
    Id: number;
    ResourceType: ResourceType;
    FirstName: string;
    LastName: string;
    SpecializedIn: string;
    ResourceTypeId: number;
    DepartmentId: number;
    Department: Department;
    OpenAppointmentSlots: OpenAppointmentSlot[]
}

export class ResourceType {
    Id: number;
    Name: string;
}

export class Patient {
    Id: number;
    FirstName: string;
    LasttName: string;
    Email: string;
    MobileNumber: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    State: string;
    Country: string;
}

export class OpenAppointmentSlot {
    Id: number;
    From: string;
    To: string;
    DoctorId: number;
}

export class Schedule
{
    appointmentDate : Date;
    slotId : number
}
