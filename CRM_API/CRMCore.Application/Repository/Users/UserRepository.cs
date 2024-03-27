using AutoMapper;
using CRMCore.Application.Interface.Users;
using CRMCore.EntityFrameWorkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMCore.Application.Repository.Users
{
    public class UserRepository : IUserRepository
    {
        private readonly CRMCoreDbContext db;
        private readonly IMapper mapper;

        public UserRepository(CRMCoreDbContext context, IMapper _mapper)
        {
            db = context;
            mapper = _mapper;
        }
    }
}
