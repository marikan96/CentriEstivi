using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CentriEstivi.Models
{
  public class CentriEstiviCustomContext : CentriEstiviContext
  {

    public virtual DbSet<v_Bambini> v_Bambini { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<v_Bambini>(entity =>
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

        entity.Property(e => e.DescrizioneCentro)
           .IsRequired()
           .HasMaxLength(150)
           .IsUnicode(false);
      });

      base.OnModelCreating(modelBuilder);
    }
  }
}
