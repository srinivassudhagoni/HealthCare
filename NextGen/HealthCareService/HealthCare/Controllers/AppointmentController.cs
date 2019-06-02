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
    public class AppointmentController : ApiController
    {
        private HealthCareEntities db = new HealthCareEntities();
        private ICollection<OpenAppointmentSlot> _AvailableSolts;

        // GET: api/Appointments 
        [HttpPost]
        [ActionName("GetListByDoctor")]
        public ICollection<Appointment> GetListByDoctor(GetListByDoctorRequest request)
        {
            var query = db.Appointments.AsQueryable();

            if (request.DoctorId != 0)
                query = query.Where(x => x.DoctorId == request.DoctorId);

            return query.ToList();
        }

        [HttpPost]
        [ActionName("GetListByPatient")]
        public ICollection<Appointment> GetListByPatient(GetListByPatientRequest request)
        {
            var query = db.Appointments.AsQueryable();

            if (request.PatientId == 0) return query.ToList();

            query = query.Where(x => x.PatientId == request.PatientId);

            return query.ToList();
        }

        [HttpGet]
        [ActionName("GetList")]
        public IQueryable<Appointment> GetList()
        {
            return db.Appointments;
        }

        [HttpGet]
        // GET: api/Appointments/5
        [ResponseType(typeof(Appointment))]
        [ActionName("Get")]
        public IHttpActionResult GetAppointment(int id)
        {
            Appointment Appointment = db.Appointments.Find(id);
            if (Appointment == null)
            {
                return NotFound();
            }

            return Ok(Appointment);
        }

        [HttpPost]
        // POST: api/Appointments
        [ResponseType(typeof(Appointment))]
        [ActionName("Persist")]
        public IHttpActionResult Persist(PersistAppointmentRequest request)
        {
            if (request.Appointment.Id == 0)
                db.Appointments.Add(request.Appointment);

            if (request.Appointment.Id > 0)
            {
                var appointmentEntity = db.Appointments.FirstOrDefault(x => x.Id == request.Appointment.Id);
                appointmentEntity.DoctorId = request.Appointment.DoctorId;
                appointmentEntity.PatientId = request.Appointment.PatientId;
                appointmentEntity.ConsultationTime = request.Appointment.ConsultationTime;
                if (request.Appointment.PatientId == 0)
                    appointmentEntity.Patient = request.Appointment.Patient;
                if (request.Appointment.CreditCardPayment != null)
                    appointmentEntity.CreditCardPayment = request.Appointment.CreditCardPayment;
            }

            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = request.Appointment.Id }, request.Appointment);
        }

        [HttpPost]
        [ActionName("GetDoctorListByDepartment")]
        public ICollection<Doctor> GetDoctorListByDepartment(GetListByDepartmentRequest request)
        {
            var query = db.Doctors.AsQueryable();

            if (request.DepartmentId == 0) return query.ToList();

            query = query.Where(x => x.DepartmentId == request.DepartmentId);

            var doctorList = query.ToList();

            return getOpenSlotByDoctorPerGivenDate(doctorList,
                  new GetAppointmentSlotListRequest { AppointmentDate = request.AppointmentDate ?? DateTime.Now.Date.AddDays(1) },
               doctorList.Select(x => x.Id).ToList());


        }

        // GET: api/Doctors 
        [HttpPost]
        [ActionName("GetAppointmentSlotList")]
        public ICollection<Doctor> GetAppointmentSlotList(GetAppointmentSlotListRequest request)
        {
            var doctorList = db.Doctors.Where(x => x.Id == request.DoctorId).ToList();
            return getOpenSlotByDoctorPerGivenDate(doctorList, request);
        }

        private ICollection<Doctor> getOpenSlotByDoctorPerGivenDate(ICollection<Doctor> doctorList, GetAppointmentSlotListRequest request, ICollection<int> doctorIdList = null)
        {

            var query = db.Appointments.Where(x => x.ConsultationTime.Value != null && x.ConsultationTime.Value == request.AppointmentDate);

            query = doctorIdList != null ?
                query = query.Where(x => doctorIdList.Contains(x.DoctorId)) : query.Where(x => x.DoctorId == request.DoctorId);

            var doctorAppointmentList = query.ToList();
            var appointmentSlotList = db.AppointmentSlots.ToList();
            var availableSolts = filterAvailableSolts(doctorAppointmentList, appointmentSlotList);

            return doctorList.Select(x => new Doctor
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName,
                SpecializedIn = x.SpecializedIn,
                DepartmentId = x.DepartmentId,
                OpenAppointmentSlots = getOpenSlotList(availableSolts, x.Id)
            }).ToList();
        }

        private ICollection<OpenAppointmentSlot> getOpenSlotList(ICollection<OpenAppointmentSlot> availableSolts, int id)
        {
            var slots = availableSolts.Where(x => x.DoctorId.HasValue && x.DoctorId.Value == id).ToList();

            return slots.Any() ? slots : availableSolts;
        }

        private ICollection<OpenAppointmentSlot> filterAvailableSolts(List<Appointment> doctorAppointmentList, List<AppointmentSlot> appointmentSlotList)
        {

            return appointmentSlotList.GroupJoin(doctorAppointmentList,
                   slot => slot.Id,
                   app => app.AppointmentSlotId, (slot, app) => new OpenAppointmentSlot { Id = slot.Id, From = slot.From, To = slot.To, DoctorId = app.FirstOrDefault()?.DoctorId })
                .Where(x => !x.DoctorId.HasValue)
                .ToList();
        }


        [HttpDelete]
        // DELETE: api/Appointments/5
        [ResponseType(typeof(Appointment))]
        [ActionName("DeleteAppointment")]
        public IHttpActionResult DeleteAppointment(int id)
        {
            Appointment department = db.Appointments.Find(id);
            if (department == null)
            {
                return NotFound();
            }

            db.Appointments.Remove(department);
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

        private bool AppointmentExists(int id)
        {
            return db.Appointments.Count(e => e.Id == id) > 0;
        }
    }
}