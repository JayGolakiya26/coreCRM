using CRMCore.EntityFrameWorkCore.Model.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMCore.EntityFrameWorkCore.Model.Contacts
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        public string ContactName { get; set; }
        public string Account { get; set; }
        public string Email { get; set; }
        public string MobilePhone { get; set; }
        public string Country { get; set; }


        public virtual int UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User Users { get; set; }
    }
}
