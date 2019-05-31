using System;

namespace HealthCare.Controllers
{
    public class GetListRequest
    {
        public string SearchString { get; set; }        
    }

    public class GetListByDepartmentRequest
    {        
        public int DepartmentId { get; set; }
        public DateTime? AppointmentDate { get; set; }
    }

    public class GetAppointmentSlotListRequest
    {
        public int DoctorId { get; set; }
        public DateTime AppointmentDate { get; set; }
    }
}