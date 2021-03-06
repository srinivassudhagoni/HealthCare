USE [HealthCare]
GO
/****** Object:  Table [dbo].[Appointment]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Appointment](
	[Id] [int] NOT NULL,
	[ConsultationTime] [datetime] NULL,
	[PatientId] [int] IDENTITY(1,1) NOT NULL,
	[DoctorId] [int] NOT NULL,
 CONSTRAINT [PK_Appointment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Doctor]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Doctor](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ResourceTypeId] [int] NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[SpecializedIn] [nvarchar](50) NULL,
 CONSTRAINT [PK_DoctorsList_Table] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DoctorAddress]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DoctorAddress](
	[Id] [int] NOT NULL,
	[DoctorId] [int] IDENTITY(1,1) NOT NULL,
	[AddressLine1] [nvarchar](50) NULL,
	[AddressLine2] [nvarchar](50) NULL,
	[City] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[Pincode] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
 CONSTRAINT [PK_DoctorsAddress_Table] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Doctorleave]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Doctorleave](
	[Id] [int] NOT NULL,
	[DoctorId] [int] IDENTITY(1,1) NOT NULL,
	[From] [date] NULL,
	[To] [date] NULL,
 CONSTRAINT [PK_Doctorleaves] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DoctorSpecialized]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DoctorSpecialized](
	[Id] [int] NOT NULL,
	[DoctorId] [int] IDENTITY(1,1) NOT NULL,
	[SpecializedId] [int] NOT NULL,
 CONSTRAINT [PK_DoctorSpecialized] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Patient]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Patient](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Patient] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ResourceType]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResourceType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_ResourceTypeId_Table] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Specialization]    Script Date: 24-05-2019 09:55:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Specialization](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Specialization_Table] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Department] ON 
GO
INSERT [dbo].[Department] ([Id], [Name]) VALUES (28, N'oncology')
GO
INSERT [dbo].[Department] ([Id], [Name]) VALUES (31, N'radiology')
GO
INSERT [dbo].[Department] ([Id], [Name]) VALUES (32, N'psycology')
GO
INSERT [dbo].[Department] ([Id], [Name]) VALUES (34, N'Dermatologist')
GO
SET IDENTITY_INSERT [dbo].[Department] OFF
GO
SET IDENTITY_INSERT [dbo].[Doctor] ON 
GO
INSERT [dbo].[Doctor] ([Id], [ResourceTypeId], [FirstName], [LastName], [SpecializedIn]) VALUES (1, 1, N'Krishna', N'Reddy', N'Cardiology')
GO
INSERT [dbo].[Doctor] ([Id], [ResourceTypeId], [FirstName], [LastName], [SpecializedIn]) VALUES (2, 2, N'Arjun', N'Patel', N'Oncology')
GO
SET IDENTITY_INSERT [dbo].[Doctor] OFF
GO
SET IDENTITY_INSERT [dbo].[ResourceType] ON 
GO
INSERT [dbo].[ResourceType] ([Id], [Name]) VALUES (1, N'Full-Time')
GO
INSERT [dbo].[ResourceType] ([Id], [Name]) VALUES (2, N'Part-Time')
GO
SET IDENTITY_INSERT [dbo].[ResourceType] OFF
GO
ALTER TABLE [dbo].[Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_Doctor] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctor] ([Id])
GO
ALTER TABLE [dbo].[Appointment] CHECK CONSTRAINT [FK_Appointment_Doctor]
GO
ALTER TABLE [dbo].[Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_Patient] FOREIGN KEY([PatientId])
REFERENCES [dbo].[Patient] ([Id])
GO
ALTER TABLE [dbo].[Appointment] CHECK CONSTRAINT [FK_Appointment_Patient]
GO
ALTER TABLE [dbo].[Doctor]  WITH CHECK ADD  CONSTRAINT [FK_Doctor_Doctor] FOREIGN KEY([Id])
REFERENCES [dbo].[Doctor] ([Id])
GO
ALTER TABLE [dbo].[Doctor] CHECK CONSTRAINT [FK_Doctor_Doctor]
GO
ALTER TABLE [dbo].[Doctor]  WITH CHECK ADD  CONSTRAINT [FK_Doctor_ResourceType] FOREIGN KEY([ResourceTypeId])
REFERENCES [dbo].[ResourceType] ([Id])
GO
ALTER TABLE [dbo].[Doctor] CHECK CONSTRAINT [FK_Doctor_ResourceType]
GO
ALTER TABLE [dbo].[DoctorAddress]  WITH CHECK ADD  CONSTRAINT [FK_DoctorAddress_Doctor] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctor] ([Id])
GO
ALTER TABLE [dbo].[DoctorAddress] CHECK CONSTRAINT [FK_DoctorAddress_Doctor]
GO
ALTER TABLE [dbo].[Doctorleave]  WITH CHECK ADD  CONSTRAINT [FK_Doctorleave_Doctor] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctor] ([Id])
GO
ALTER TABLE [dbo].[Doctorleave] CHECK CONSTRAINT [FK_Doctorleave_Doctor]
GO
ALTER TABLE [dbo].[DoctorSpecialized]  WITH CHECK ADD  CONSTRAINT [FK_DoctorSpecialized_Doctor] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctor] ([Id])
GO
ALTER TABLE [dbo].[DoctorSpecialized] CHECK CONSTRAINT [FK_DoctorSpecialized_Doctor]
GO
ALTER TABLE [dbo].[DoctorSpecialized]  WITH CHECK ADD  CONSTRAINT [FK_DoctorSpecialized_Specialization] FOREIGN KEY([SpecializedId])
REFERENCES [dbo].[Specialization] ([Id])
GO
ALTER TABLE [dbo].[DoctorSpecialized] CHECK CONSTRAINT [FK_DoctorSpecialized_Specialization]
GO
