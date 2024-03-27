using CRMCore.EntityFrameWorkCore.Model.Contacts;
using CRMCore.EntityFrameWorkCore.Model.Users;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMCore.EntityFrameWorkCore
{
    public class CRMCoreDbContext : DbContext
    {
        public CRMCoreDbContext(DbContextOptions<CRMCoreDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Contact> Contacts { get; set; }

    }
}
