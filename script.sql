USE [master]
GO
/****** Object:  Database [CentriEstivi]    Script Date: 22/03/2018 16:02:16 ******/
CREATE DATABASE [CentriEstivi]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CentriEstivi', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\CentriEstivi.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CentriEstivi_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\CentriEstivi_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [CentriEstivi] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CentriEstivi].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CentriEstivi] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CentriEstivi] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CentriEstivi] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CentriEstivi] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CentriEstivi] SET ARITHABORT OFF 
GO
ALTER DATABASE [CentriEstivi] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CentriEstivi] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CentriEstivi] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CentriEstivi] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CentriEstivi] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CentriEstivi] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CentriEstivi] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CentriEstivi] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CentriEstivi] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CentriEstivi] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CentriEstivi] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CentriEstivi] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CentriEstivi] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CentriEstivi] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CentriEstivi] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CentriEstivi] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CentriEstivi] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CentriEstivi] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CentriEstivi] SET  MULTI_USER 
GO
ALTER DATABASE [CentriEstivi] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CentriEstivi] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CentriEstivi] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CentriEstivi] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CentriEstivi] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CentriEstivi] SET QUERY_STORE = OFF
GO
USE [CentriEstivi]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [CentriEstivi]
GO
/****** Object:  Table [dbo].[Bambini]    Script Date: 22/03/2018 16:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bambini](
	[IdBambino] [int] IDENTITY(1,1) NOT NULL,
	[IdCentro] [int] NOT NULL,
	[Cognome] [varchar](50) NOT NULL,
	[Nome] [varchar](50) NOT NULL,
	[DataNascita] [datetime] NOT NULL,
	[Citta] [varchar](50) NOT NULL,
	[Via] [varchar](100) NOT NULL,
	[Numero] [varchar](7) NULL,
	[Provincia] [varchar](2) NULL,
	[CF] [varchar](20) NULL,
	[CertificatoMedico] [varchar](100) NULL,
	[DataScadenzaCertificato] [datetime] NULL,
	[Intolleranze] [varchar](200) NULL,
	[Bollo] [float] NOT NULL,
	[ImpostaBollo] [float] NULL,
	[Totale] [float] NOT NULL,
	[DaPagare] [float] NULL,
	[AICS] [datetime] NULL,
	[AdultiAutorizzati] [varchar](150) NULL,
	[OrarioAutorizzato] [varchar](10) NULL,
	[Telefono1] [varchar](15) NULL,
	[Telefono2] [varchar](15) NULL,
	[Telefono3] [varchar](15) NULL,
	[Telefono4] [varchar](15) NULL,
	[Email] [varchar](50) NULL,
	[DataTesseramento] [datetime] NULL,
	[DataInserimento] [datetime] NOT NULL,
 CONSTRAINT [PK_Children] PRIMARY KEY CLUSTERED 
(
	[IdBambino] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Centri]    Script Date: 22/03/2018 16:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Centri](
	[IdCentro] [int] IDENTITY(1,1) NOT NULL,
	[DescrizioneCentro] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Centri] PRIMARY KEY CLUSTERED 
(
	[IdCentro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pagamenti]    Script Date: 22/03/2018 16:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pagamenti](
	[IdPagamento] [int] IDENTITY(1,1) NOT NULL,
	[DataPagamento] [datetime] NOT NULL,
	[Importo] [float] NOT NULL,
	[IdBambino] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Settimane]    Script Date: 22/03/2018 16:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Settimane](
	[IdBambino] [int] NOT NULL,
	[Settimana1] [bit] NOT NULL,
	[Settimana2] [bit] NOT NULL,
	[Settimana3] [bit] NOT NULL,
	[Settimana4] [bit] NOT NULL,
	[Settimana5] [bit] NOT NULL,
	[Settimana6] [bit] NOT NULL,
	[Settimana7] [bit] NOT NULL,
	[Settimana8] [bit] NOT NULL,
	[Settimana9] [bit] NOT NULL,
	[Settimana10] [bit] NOT NULL,
	[Settimana11] [bit] NOT NULL,
	[Settimana12] [bit] NOT NULL,
	[GiornataIntera1] [bit] NOT NULL,
	[GiornataIntera2] [bit] NOT NULL,
	[GiornataIntera3] [bit] NOT NULL,
	[GiornataIntera4] [bit] NOT NULL,
	[GiornataIntera5] [bit] NOT NULL,
	[GiornataIntera6] [bit] NOT NULL,
	[GiornataIntera7] [bit] NOT NULL,
	[GiornataIntera8] [bit] NOT NULL,
	[GiornataIntera9] [bit] NOT NULL,
	[GiornataIntera10] [bit] NOT NULL,
	[GiornataIntera11] [bit] NOT NULL,
	[GiornataIntera12] [bit] NOT NULL,
 CONSTRAINT [PK_Settimane] PRIMARY KEY CLUSTERED 
(
	[IdBambino] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 22/03/2018 16:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Nome] [varchar](50) NOT NULL,
	[Cognome] [varchar](50) NULL,
	[Via] [varchar](50) NULL,
	[Numero] [varchar](7) NULL,
	[CAP] [varchar](5) NULL,
	[Citta] [varchar](30) NULL,
	[Password] [varchar](50) NULL,
	[CF] [varchar](50) NULL,
	[Telefono] [varchar](15) NULL,
	[PasswordHash] [varbinary](255) NOT NULL,
	[PasswordSalt] [varbinary](255) NOT NULL,
	[IsAdmin] [bit] NOT NULL,
	[IdCentro] [bit] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE view [dbo].[v_Bambini] as 
SELECT b.*  , c.DescrizioneCentro
 FROM Bambini AS b
 LEFT JOIN Centri AS c on b.IdBambino=c.IdCentro
GO

CREATE view [dbo].[v_Pagamenti] as 
SELECT p.*, b.Cognome, b.Nome, b.CF, b.IdCentro
 FROM Pagamenti AS p
 LEFT JOIN Bambini AS b on p.IdBambino=b.IdBambino
GO


ALTER TABLE [dbo].[Bambini] ADD  CONSTRAINT [DF_Child_Fee]  DEFAULT ((10)) FOR [Bollo]
GO
ALTER TABLE [dbo].[Bambini] ADD  CONSTRAINT [DF_Bambini_DataInserimento]  DEFAULT (getdate()) FOR [DataInserimento]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Settimane_Settimana1]  DEFAULT ((0)) FOR [Settimana1]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana11]  DEFAULT ((0)) FOR [Settimana2]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana12]  DEFAULT ((0)) FOR [Settimana3]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana13]  DEFAULT ((0)) FOR [Settimana4]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana14]  DEFAULT ((0)) FOR [Settimana5]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana112]  DEFAULT ((0)) FOR [Settimana6]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana111]  DEFAULT ((0)) FOR [Settimana7]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana110]  DEFAULT ((0)) FOR [Settimana8]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana19]  DEFAULT ((0)) FOR [Settimana9]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana18]  DEFAULT ((0)) FOR [Settimana10]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana17]  DEFAULT ((0)) FOR [Settimana11]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_Settimana16]  DEFAULT ((0)) FOR [Settimana12]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Settimane_GiornataIntera1]  DEFAULT ((0)) FOR [GiornataIntera1]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera110]  DEFAULT ((0)) FOR [GiornataIntera2]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera19]  DEFAULT ((0)) FOR [GiornataIntera3]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera18]  DEFAULT ((0)) FOR [GiornataIntera4]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera17]  DEFAULT ((0)) FOR [GiornataIntera5]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera16]  DEFAULT ((0)) FOR [GiornataIntera6]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera15]  DEFAULT ((0)) FOR [GiornataIntera7]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera14]  DEFAULT ((0)) FOR [GiornataIntera8]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera13]  DEFAULT ((0)) FOR [GiornataIntera9]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera12]  DEFAULT ((0)) FOR [GiornataIntera10]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera111]  DEFAULT ((0)) FOR [GiornataIntera11]
GO
ALTER TABLE [dbo].[Settimane] ADD  CONSTRAINT [DF_Table_1_GiornataIntera11]  DEFAULT ((0)) FOR [GiornataIntera12]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsAdmin]  DEFAULT ((0)) FOR [IsAdmin]
GO

insert into [dbo].[Users] (
	   [Email]
      ,Nome
      ,Cognome     
      ,[PasswordHash]
      ,[PasswordSalt])
	  VALUES
	  ( 'aaa',
		'aaa',
		'aaa',
0x840F539058250CAF6B29A1E0701C6DC2A5E6C59B334875360EA6DF9128B1EF2987FD6F3E954BBF0222E0F76CAD5302D537561D8AB7F232ADD5FFD02CF454980F,
0x7276BE5ACF068D6B9CA47703832D1299C4C194B4F6B07CD584538D8CF4400CCB442F19C1513DEA0F30FDEEA78627226788EDBA1670D746DB152CFDF208A6D9729DA840FCC8696643A1848CF67B59A74495AC416C193F9CE6AEA7806CDFC287033C64C3623FF54465DAE8CFB78D04D24FF5F560EFAFD1D7E346B20493BF2FB08B
)
GO


USE [master]
GO
ALTER DATABASE [CentriEstivi] SET  READ_WRITE 
GO
