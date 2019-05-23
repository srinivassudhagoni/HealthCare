using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using HealthCare.Models;

namespace HealthCare.Controllers
{
    public class DepartmentsController : ApiController
    {
        private HealthCareEntities db = new HealthCareEntities();

        // GET: api/Departments 
        [HttpPost]
        [ActionName("GetFilteredList")]
        public ICollection<Department> GetFilteredList(GetListRequest request)
        {
            var query = db.Departments.AsQueryable();

            if (!string.IsNullOrEmpty(request.SearchString))
                query = query.Where(x => x.Name.Contains(request.SearchString));

            return query.ToList();
        }

        [HttpGet]
        [ActionName("GetList")]
        public IQueryable<Department> GetList()
        {
            return db.Departments;
        }

        [HttpGet]
        // GET: api/Departments/5
        [ResponseType(typeof(Department))]
        [ActionName("Get")]
        public IHttpActionResult GetDepartment(int id)
        {
            Department department = db.Departments.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            return Ok(department);
        }

        [HttpPost]
        // POST: api/Departments
        [ResponseType(typeof(Department))]
        [ActionName("Persist")]
        public IHttpActionResult Persist(Department department)
        {
            if (department.Id == 0)
                db.Departments.Add(department);

            if (department.Id > 0)
            {
                var departmentEntity = db.Departments.FirstOrDefault(x => x.Id == department.Id);
                departmentEntity.Name = department.Name;
            }

            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = department.Id }, department);
        }

        [HttpDelete]
        // DELETE: api/Departments/5
        [ResponseType(typeof(Department))]
        [ActionName("DeleteDepartment")]
        public IHttpActionResult DeleteDepartment(int id)
        {
            Department department = db.Departments.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            db.Departments.Remove(department);
            db.SaveChanges();

            return Ok(department);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DepartmentExists(int id)
        {
            return db.Departments.Count(e => e.Id == id) > 0;
        }
    }
}