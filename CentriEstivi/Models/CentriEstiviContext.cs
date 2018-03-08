using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CentriEstivi.Models
{
  public partial class CentriEstiviContext : DbContext
  {
    public virtual DbSet<Users> Users { get; set; }



    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        optionsBuilder.UseSqlServer(@"Server=DESKTOP-TP30ME5\SQLExpress;;Database=CentriEstivi;Trusted_Connection=True;");
      }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Users>(entity =>
      {
        entity.Property(e => e.Cap)
                  .HasColumnName("CAP")
                  .HasMaxLength(5)
                  .IsUnicode(false);

        entity.Property(e => e.City)
                  .HasMaxLength(30)
                  .IsUnicode(false);

        entity.Property(e => e.Code)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.Email)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.Name)
                  .IsRequired()
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.Password)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.PasswordHash).HasMaxLength(255);

        entity.Property(e => e.PasswordSalt).HasMaxLength(255);

        entity.Property(e => e.Street)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.StreetNr)
                  .HasMaxLength(4)
                  .IsUnicode(false);

        entity.Property(e => e.Surname)
                  .HasMaxLength(50)
                  .IsUnicode(false);

        entity.Property(e => e.Telephone)
                  .HasMaxLength(15)
                  .IsUnicode(false);
      });
    }
  }
}
