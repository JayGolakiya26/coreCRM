using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMCore.Application.Dto.Users
{
    public class UserVM
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public String MobileNumber { get; set; }
    }
}
