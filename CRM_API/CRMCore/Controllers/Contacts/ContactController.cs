using CRMCore.Application.Interface.Users;
using CRMCore.EntityFrameWorkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRMCore.Web.Controllers.Contacts
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IUserRepository IUser;
        private readonly CRMCoreDbContext db;

        public ContactController(IUserRepository user, CRMCoreDbContext crmCoreDbContext)
        {
            IUser = user;
            db = crmCoreDbContext;
        }
    }
}
