using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CentriEstivi.Models
{
    public partial class CentriEstiviContext : DbContext
    {
        public virtual DbSet<Bambini> Bambini { get; set; }
        public virtual DbSet<Centri> Centri { get; set; }
        public virtual DbSet<Pagamenti> Pagamenti { get; set; }
        public virtual DbSet<Settimane> Settimane { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Data Source=.\;Initial Catalog=CentriEstivi;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bambini>(entity =>
            {
                entity.HasKey(e => e.IdBambino);

                entity.Property(e => e.AdultiAutorizzati)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.Aics)
                    .HasColumnName("AICS")
                    .HasColumnType("datetime");

                entity.Property(e => e.Bollo).HasDefaultValueSql("((10))");

                entity.Property(e => e.CertificatoMedico)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Cf)
                    .HasColumnName("CF")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Citta)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Cognome)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DataInserimento)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DataNascita).HasColumnType("datetime");

                entity.Property(e => e.DataScadenzaCertificato).HasColumnType("datetime");

                entity.Property(e => e.DataTesseramento).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Intolleranze)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Numero)
                    .HasMaxLength(7)
                    .IsUnicode(false);

                entity.Property(e => e.OrarioAutorizzato)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Provincia)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono1)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono2)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono3)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Telefono4)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Via)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Centri>(entity =>
            {
                entity.HasKey(e => e.IdCentro);

                entity.Property(e => e.DescrizioneCentro)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Pagamenti>(entity =>
            {
                entity.HasKey(e => e.IdPagamento);

                entity.Property(e => e.DataPagamento).HasColumnType("datetime");
            });

            modelBuilder.Entity<Settimane>(entity =>
            {
                entity.HasKey(e => e.IdBambino);

                entity.Property(e => e.IdBambino).ValueGeneratedNever();
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Cap)
                    .HasColumnName("CAP")
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Cf)
                    .HasColumnName("CF")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Citta)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Cognome)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Numero)
                    .HasMaxLength(7)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PasswordHash)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.PasswordSalt)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Telefono)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Via)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
