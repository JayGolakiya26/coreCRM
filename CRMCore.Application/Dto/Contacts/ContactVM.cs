using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMCore.Application.Dto.Contacts
{
    public class ContactVM
    {
        public int Id { get; set; }
        public string ContactName { get; set; }
        public string Account { get; set; }
        public string Email { get; set; }
        public string MobilePhone { get; set; }
        public string Country { get; set; }
    }
}
