using AutoMapper;
using CRMCore.Application.Dto.Contacts;
using CRMCore.Application.Dto.Users;
using CRMCore.EntityFrameWorkCore.Model.Contacts;
using CRMCore.EntityFrameWorkCore.Model.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace CRMCore.Application.Dto
{
    public class CRMCoreCustomMapper : Profile
    {
        public CRMCoreCustomMapper()
        {
            CreateMap<User, UserVM>().ReverseMap();
            CreateMap<Contact, ContactVM>().ReverseMap();
        }
    }
}
