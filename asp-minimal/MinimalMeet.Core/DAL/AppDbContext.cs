using Microsoft.EntityFrameworkCore;
using MinimalMeet.Core.Entities;

namespace MinimalMeet.Core.DAL;

public class AppDbContext : DbContext
{
    public DbSet<Meeting> Meetings { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Meeting>()
            .ToTable("Meetings")
            .HasKey(e => e.Id);

        modelBuilder.Entity<Meeting>()
            .Property(m => m.BeginAt)
            .HasColumnType("timestamptz");

        modelBuilder.Entity<Meeting>()
            .Property(m => m.Description)
            .IsRequired(false);

        modelBuilder.Entity<Meeting>()
            .Property(m => m.Location)
            .IsRequired(false);

        base.OnModelCreating(modelBuilder);
    }
}
