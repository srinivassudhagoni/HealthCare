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
    public class DoctorController : ApiController
    {
        private HealthCareEntities db = new HealthCareEntities();

        // GET: api/Doctors 
        [HttpPost]
        [ActionName("GetFilteredList")]
        public ICollection<Doctor> GetFilteredList(GetListRequest request)
        {
            var query = db.Doctors.AsQueryable();

            if (!string.IsNullOrEmpty(request.SearchString))
                query = query.Where(x => x.FirstName.Contains(request.SearchString));

            return query.ToList();
        }

        [HttpPost]
        [ActionName("GetListByDepartment")]
        public ICollection<Doctor> GetListByDepartment(GetListByDepartmentRequest request)
        {
            var query = db.Doctors.AsQueryable();

            if (request.DepartmentId == 0) return query.ToList();

            query = query.Where(x => x.DepartmentId == request.DepartmentId);

            return query.ToList();
        }

        [HttpGet]
        [ActionName("GetList")]
        public IQueryable<Doctor> GetList()
        {
            return db.Doctors;
        }

        [HttpGet]
        // GET: api/Doctors/5
        [ResponseType(typeof(Doctor))]
        [ActionName("Get")]
        public IHttpActionResult GetDoctor(int id)
        {
            Doctor Doctor = db.Doctors.Find(id);
            if (Doctor == null)
            {
                return NotFound();
            }

            return Ok(Doctor);
        }

        [HttpPost]
        // POST: api/Doctors
        [ResponseType(typeof(Doctor))]
        [ActionName("Persist")]
        public IHttpActionResult Persist(Doctor doctor)
        {
            if (doctor.Id == 0)
                db.Doctors.Add(doctor);

            if (doctor.Id > 0)
            {
                var doctorEntity = db.Doctors.FirstOrDefault(x => x.Id == doctor.Id);
                doctorEntity.FirstName = doctor.FirstName;
                doctorEntity.LastName = doctor.LastName;
                doctorEntity.ResourceTypeId = doctor.ResourceTypeId;
                if (doctor.ResourceTypeId == 0)
                    doctorEntity.ResourceType = doctor.ResourceType ?? new ResourceType { Id = 1, Name = "FullTime" };
                doctorEntity.SpecializedIn = doctor.SpecializedIn;
                doctorEntity.DepartmentId = doctor.DepartmentId;

            }

            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = doctor.Id }, doctor);
        }

        [HttpDelete]
        // DELETE: api/Doctors/5
        [ResponseType(typeof(Doctor))]
        [ActionName("DeleteDoctor")]
        public IHttpActionResult DeleteDoctor(int id)
        {
            Doctor department = db.Doctors.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            db.Doctors.Remove(department);
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

        private bool DoctorExists(int id)
        {
            return db.Doctors.Count(e => e.Id == id) > 0;
        }
    }
}