export class Department 
{
    Id: number;
    Name: string;
}

export class GetListRequest 
{
    SearchString: string;
}

export class Doctor
{
     Id: number;
     ResourceType: ResourceType;
     FirstName: string;
     LastName: string;
     SpecializedIn:string;
     ResourceTypeId:number
}

export class ResourceType
{
    Id: number;
    Name: string;
}
