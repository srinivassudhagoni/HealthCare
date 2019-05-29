namespace HealthCare.Controllers
{
    public class GetListRequest
    {
        public string SearchString { get; set; }        
    }

    public class GetListByDepartmentRequest
    {        
        public int DepartmentId { get; set; }
    }
}