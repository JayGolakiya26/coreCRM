using CRMCore.Application.Interface.Users;
using CRMCore.EntityFrameWorkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRMCore.Web.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository IUser;
        private readonly CRMCoreDbContext db;

        public UserController(IUserRepository user, CRMCoreDbContext crmCoreDbContext)
        {
            IUser = user;
            db = crmCoreDbContext;
        }
    }
}
