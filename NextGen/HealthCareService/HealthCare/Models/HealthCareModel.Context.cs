﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HealthCare.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class HealthCareEntities : DbContext
    {
        public HealthCareEntities()
            : base("name=HealthCareEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<DoctorAddress> DoctorAddresses { get; set; }
        public virtual DbSet<Doctorleave> Doctorleaves { get; set; }
        public virtual DbSet<DoctorSpecialized> DoctorSpecializeds { get; set; }
        public virtual DbSet<ResourceType> ResourceTypes { get; set; }
        public virtual DbSet<Specialization> Specializations { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
        public virtual DbSet<CreditCardPayment> CreditCardPayments { get; set; }
    }
}
