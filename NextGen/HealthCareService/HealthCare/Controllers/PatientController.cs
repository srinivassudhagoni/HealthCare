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
    public class PatientController : ApiController
    {
        private HealthCareEntities db = new HealthCareEntities();

        // GET: api/Patients 
        [HttpPost]
        [ActionName("GetFilteredList")]
        public ICollection<Patient> GetFilteredList(GetListRequest request)
        {
            var query = db.Patients.AsQueryable();

            if (!string.IsNullOrEmpty(request.SearchString))
                query = query.Where(x => x.FirstName.Contains(request.SearchString));

            return query.ToList();
        }
      

        [HttpGet]
        [ActionName("GetList")]
        public IQueryable<Patient> GetList()
        {
            return db.Patients;
        }

        [HttpGet]
        // GET: api/Patients/5
        [ResponseType(typeof(Patient))]
        [ActionName("Get")]
        public IHttpActionResult GetPatient(int id)
        {
            Patient Patient = db.Patients.Find(id);
            if (Patient == null)
            {
                return NotFound();
            }

            return Ok(Patient);
        }

        [HttpPost]
        // POST: api/Patients
        [ResponseType(typeof(Patient))]
        [ActionName("Persist")]
        public IHttpActionResult Persist(Patient patient)
        {
            if (patient.Id == 0)
                db.Patients.Add(patient);

            if (patient.Id > 0)
            {
                var patientEntity = db.Patients.FirstOrDefault(x => x.Id == patient.Id);
                patientEntity.FirstName = patient.FirstName;
                patientEntity.LastName = patient.LastName;
                patientEntity.AddressLine1 = patient.AddressLine1;
                patientEntity.AddressLine2 = patient.AddressLine2;
                patientEntity.MobileNumber = patient.MobileNumber;
                patientEntity.State = patient.State;
                patientEntity.Email = patient.Email;
                patientEntity.City = patient.City;
                patientEntity.Country = patient.Country;

            }

            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = patient.Id }, patient);
        }

        [HttpDelete]
        // DELETE: api/Patients/5
        [ResponseType(typeof(Patient))]
        [ActionName("DeletePatient")]
        public IHttpActionResult DeletePatient(int id)
        {
            Patient department = db.Patients.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            db.Patients.Remove(department);
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

        private bool PatientExists(int id)
        {
            return db.Patients.Count(e => e.Id == id) > 0;
        }
    }
}