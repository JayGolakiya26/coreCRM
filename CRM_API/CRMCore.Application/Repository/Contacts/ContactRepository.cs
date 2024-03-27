using AutoMapper;
using CRMCore.Application.Interface.Contacts;
using CRMCore.EntityFrameWorkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMCore.Application.Repository.Contacts
{
    public class ContactRepository : IContactRepository
    {
        private readonly CRMCoreDbContext db;
        private readonly IMapper mapper;

        public ContactRepository(CRMCoreDbContext context, IMapper _mapper)
        {
            db = context;
            mapper = _mapper;
        }
    }
}
