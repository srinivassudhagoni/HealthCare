//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Doctor
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Doctor()
        {
            this.Appointments = new HashSet<Appointment>();
            this.DoctorAddresses = new HashSet<DoctorAddress>();
            this.Doctorleaves = new HashSet<Doctorleave>();
            this.DoctorSpecializeds = new HashSet<DoctorSpecialized>();
        }
    
        public int Id { get; set; }
        public int ResourceTypeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SpecializedIn { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Appointment> Appointments { get; set; }
        public virtual Doctor Doctor1 { get; set; }
        public virtual Doctor Doctor2 { get; set; }
        public virtual ResourceType ResourceType { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DoctorAddress> DoctorAddresses { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Doctorleave> Doctorleaves { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DoctorSpecialized> DoctorSpecializeds { get; set; }
    }
}
