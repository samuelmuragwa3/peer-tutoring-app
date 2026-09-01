using Microsoft.EntityFrameworkCore;
using PeerTutoringApp.Models;

namespace PeerTutoringApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Entity sets — one per table
            public DbSet<Session> Sessions { get; set; }
            public DbSet<Participant> Participants { get; set; }
    }
}