
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/14/2021 13:56:34
-- Generated from EDMX file: C:\Users\Rubén\source\repos\proyecto-g1c-tursarg-dev-team\Proyecto TursArg\TursArg\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [BDTursArg];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[USUARIOS]', 'U') IS NOT NULL
    DROP TABLE [dbo].[USUARIOS];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'USUARIOS'
CREATE TABLE [dbo].[USUARIOS] (
    [idUsuario] int IDENTITY(1,1) NOT NULL,
    [urlFotoUsuario] varchar(100)  NULL,
    [nombreUsuario] nvarchar(60)  NOT NULL,
    [nombre] varchar(50)  NULL,
    [apellido] varchar(50)  NULL,
    [telefono] bigint  NULL,
    [contrasenia] varchar(150)  NOT NULL,
    [rolAdmin] bit  NULL,
    [email] varchar(100)  NULL,
    [mail] varchar(100)  NULL
);
GO

-- Creating table 'ATRACCIONES'
CREATE TABLE [dbo].[ATRACCIONES] (
    [idAtraccion] int IDENTITY(1,1) NOT NULL,
    [nombreAtraccion] varchar(50)  NULL,
    [direccionAtraccion] varchar(50)  NULL,
    [descripcionAtraccion] varchar(50)  NULL,
    [horarioAtraccion] varchar(50)  NULL,
    [tarifaAtraccion] varchar(50)  NULL,
    [serviciosAtraccion] varchar(50)  NULL,
    [urlUbicacionAtraccion] varchar(150)  NULL,
    [urlfotoAtraccion1] varchar(150)  NULL,
    [urlfotoAtraccion2] varchar(150)  NULL,
    [urlfotoAtraccion3] varchar(150)  NULL,
    [codPostal_Atraccion] int  NULL
);
GO

-- Creating table 'CHATS'
CREATE TABLE [dbo].[CHATS] (
    [idChat] int IDENTITY(1,1) NOT NULL,
    [fechaChat] datetime  NULL,
    [email] varchar(100)  NULL,
    [nombre] varchar(50)  NULL,
    [apellido] varchar(50)  NULL,
    [consulta] varchar(max)  NULL,
    [idUsuario_Chat] int  NULL
);
GO

-- Creating table 'CIUDADES'
CREATE TABLE [dbo].[CIUDADES] (
    [codPostal] int IDENTITY(1,1) NOT NULL,
    [descripcionCiudad] varchar(50)  NULL,
    [nombreCiudad] varchar(50)  NULL,
    [urlUbicacionCiudad] varchar(150)  NULL,
    [urlfotoCiudad1] varchar(150)  NULL,
    [urlfotoCiudad2] varchar(150)  NULL,
    [urlfotoCiudad3] varchar(150)  NULL,
    [idDepartamento_ciudad] int  NULL
);
GO

-- Creating table 'DEPARTAMENTOS'
CREATE TABLE [dbo].[DEPARTAMENTOS] (
    [idDepartamento] int IDENTITY(1,1) NOT NULL,
    [nombreDepartamento] varchar(50)  NULL
);
GO

-- Creating table 'HISTORIAL_CLIMATICO'
CREATE TABLE [dbo].[HISTORIAL_CLIMATICO] (
    [idClima] int IDENTITY(1,1) NOT NULL,
    [fechaClima] datetime  NULL,
    [tempMin] varchar(50)  NULL,
    [tempMax] varchar(50)  NULL,
    [estadoClima] varchar(50)  NULL,
    [codPostal_HistoClim] int  NULL
);
GO

-- Creating table 'ITINERARIOS'
CREATE TABLE [dbo].[ITINERARIOS] (
    [idItinerario] int IDENTITY(1,1) NOT NULL,
    [nombreItinerario] varchar(50)  NULL,
    [descripcionItinerario] varchar(50)  NULL
);
GO

-- Creating table 'PUBLICACIONES'
CREATE TABLE [dbo].[PUBLICACIONES] (
    [idPublicacion] int IDENTITY(1,1) NOT NULL,
    [fechaPublicacion] datetime  NULL,
    [texto] varchar(max)  NULL,
    [idUserPublicacion] int  NULL,
    [idTema_publicacion] int  NULL
);
GO

-- Creating table 'TEMAS_DE_FORO'
CREATE TABLE [dbo].[TEMAS_DE_FORO] (
    [idTema] int IDENTITY(1,1) NOT NULL,
    [nombreDeTema] varchar(50)  NULL,
    [idUserForo] int  NULL
);
GO

-- Creating table 'ITINERARIOS_ATRACCIONES'
CREATE TABLE [dbo].[ITINERARIOS_ATRACCIONES] (
    [ATRACCIONES_idAtraccion] int  NOT NULL,
    [ITINERARIOS_idItinerario] int  NOT NULL
);
GO

-- Creating table 'USUARIOS_CIUDADES'
CREATE TABLE [dbo].[USUARIOS_CIUDADES] (
    [CIUDADES_codPostal] int  NOT NULL,
    [USUARIOS_idUsuario] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [idUsuario] in table 'USUARIOS'
ALTER TABLE [dbo].[USUARIOS]
ADD CONSTRAINT [PK_USUARIOS]
    PRIMARY KEY CLUSTERED ([idUsuario] ASC);
GO

-- Creating primary key on [idAtraccion] in table 'ATRACCIONES'
ALTER TABLE [dbo].[ATRACCIONES]
ADD CONSTRAINT [PK_ATRACCIONES]
    PRIMARY KEY CLUSTERED ([idAtraccion] ASC);
GO

-- Creating primary key on [idChat] in table 'CHATS'
ALTER TABLE [dbo].[CHATS]
ADD CONSTRAINT [PK_CHATS]
    PRIMARY KEY CLUSTERED ([idChat] ASC);
GO

-- Creating primary key on [codPostal] in table 'CIUDADES'
ALTER TABLE [dbo].[CIUDADES]
ADD CONSTRAINT [PK_CIUDADES]
    PRIMARY KEY CLUSTERED ([codPostal] ASC);
GO

-- Creating primary key on [idDepartamento] in table 'DEPARTAMENTOS'
ALTER TABLE [dbo].[DEPARTAMENTOS]
ADD CONSTRAINT [PK_DEPARTAMENTOS]
    PRIMARY KEY CLUSTERED ([idDepartamento] ASC);
GO

-- Creating primary key on [idClima] in table 'HISTORIAL_CLIMATICO'
ALTER TABLE [dbo].[HISTORIAL_CLIMATICO]
ADD CONSTRAINT [PK_HISTORIAL_CLIMATICO]
    PRIMARY KEY CLUSTERED ([idClima] ASC);
GO

-- Creating primary key on [idItinerario] in table 'ITINERARIOS'
ALTER TABLE [dbo].[ITINERARIOS]
ADD CONSTRAINT [PK_ITINERARIOS]
    PRIMARY KEY CLUSTERED ([idItinerario] ASC);
GO

-- Creating primary key on [idPublicacion] in table 'PUBLICACIONES'
ALTER TABLE [dbo].[PUBLICACIONES]
ADD CONSTRAINT [PK_PUBLICACIONES]
    PRIMARY KEY CLUSTERED ([idPublicacion] ASC);
GO

-- Creating primary key on [idTema] in table 'TEMAS_DE_FORO'
ALTER TABLE [dbo].[TEMAS_DE_FORO]
ADD CONSTRAINT [PK_TEMAS_DE_FORO]
    PRIMARY KEY CLUSTERED ([idTema] ASC);
GO

-- Creating primary key on [ATRACCIONES_idAtraccion], [ITINERARIOS_idItinerario] in table 'ITINERARIOS_ATRACCIONES'
ALTER TABLE [dbo].[ITINERARIOS_ATRACCIONES]
ADD CONSTRAINT [PK_ITINERARIOS_ATRACCIONES]
    PRIMARY KEY CLUSTERED ([ATRACCIONES_idAtraccion], [ITINERARIOS_idItinerario] ASC);
GO

-- Creating primary key on [CIUDADES_codPostal], [USUARIOS_idUsuario] in table 'USUARIOS_CIUDADES'
ALTER TABLE [dbo].[USUARIOS_CIUDADES]
ADD CONSTRAINT [PK_USUARIOS_CIUDADES]
    PRIMARY KEY CLUSTERED ([CIUDADES_codPostal], [USUARIOS_idUsuario] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [codPostal_Atraccion] in table 'ATRACCIONES'
ALTER TABLE [dbo].[ATRACCIONES]
ADD CONSTRAINT [fk_fpostal_atracc]
    FOREIGN KEY ([codPostal_Atraccion])
    REFERENCES [dbo].[CIUDADES]
        ([codPostal])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'fk_fpostal_atracc'
CREATE INDEX [IX_fk_fpostal_atracc]
ON [dbo].[ATRACCIONES]
    ([codPostal_Atraccion]);
GO

-- Creating foreign key on [idUsuario_Chat] in table 'CHATS'
ALTER TABLE [dbo].[CHATS]
ADD CONSTRAINT [fk_fUsuChat]
    FOREIGN KEY ([idUsuario_Chat])
    REFERENCES [dbo].[USUARIOS]
        ([idUsuario])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'fk_fUsuChat'
CREATE INDEX [IX_fk_fUsuChat]
ON [dbo].[CHATS]
    ([idUsuario_Chat]);
GO

-- Creating foreign key on [codPostal_HistoClim] in table 'HISTORIAL_CLIMATICO'
ALTER TABLE [dbo].[HISTORIAL_CLIMATICO]
ADD CONSTRAINT [fk_fcodp_hclim]
    FOREIGN KEY ([codPostal_HistoClim])
    REFERENCES [dbo].[CIUDADES]
        ([codPostal])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'fk_fcodp_hclim'
CREATE INDEX [IX_fk_fcodp_hclim]
ON [dbo].[HISTORIAL_CLIMATICO]
    ([codPostal_HistoClim]);
GO

-- Creating foreign key on [idDepartamento_ciudad] in table 'CIUDADES'
ALTER TABLE [dbo].[CIUDADES]
ADD CONSTRAINT [fk_fdpto_c]
    FOREIGN KEY ([idDepartamento_ciudad])
    REFERENCES [dbo].[DEPARTAMENTOS]
        ([idDepartamento])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'fk_fdpto_c'
CREATE INDEX [IX_fk_fdpto_c]
ON [dbo].[CIUDADES]
    ([idDepartamento_ciudad]);
GO

-- Creating foreign key on [idUserPublicacion] in table 'PUBLICACIONES'
ALTER TABLE [dbo].[PUBLICACIONES]
ADD CONSTRAINT [fk_fid_User]
    FOREIGN KEY ([idUserPublicacion])
    REFERENCES [dbo].[USUARIOS]
        ([idUsuario])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'fk_fid_User'
CREATE INDEX [IX_fk_fid_User]
ON [dbo].[PUBLICACIONES]
    ([idUserPublicacion]);
GO

-- Creating foreign key on [idTema_publicacion] in table 'PUBLICACIONES'
ALTER TABLE [dbo].[PUBLICACIONES]
ADD CONSTRAINT [fk_ftema_publi]
    FOREIGN KEY ([idTema_publicacion])
    REFERENCES [dbo].[TEMAS_DE_FORO]
        ([idTema])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'fk_ftema_publi'
CREATE INDEX [IX_fk_ftema_publi]
ON [dbo].[PUBLICACIONES]
    ([idTema_publicacion]);
GO

-- Creating foreign key on [idUserForo] in table 'TEMAS_DE_FORO'
ALTER TABLE [dbo].[TEMAS_DE_FORO]
ADD CONSTRAINT [fk_cut]
    FOREIGN KEY ([idUserForo])
    REFERENCES [dbo].[USUARIOS]
        ([idUsuario])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'fk_cut'
CREATE INDEX [IX_fk_cut]
ON [dbo].[TEMAS_DE_FORO]
    ([idUserForo]);
GO

-- Creating foreign key on [ATRACCIONES_idAtraccion] in table 'ITINERARIOS_ATRACCIONES'
ALTER TABLE [dbo].[ITINERARIOS_ATRACCIONES]
ADD CONSTRAINT [FK_ITINERARIOS_ATRACCIONES_ATRACCIONES]
    FOREIGN KEY ([ATRACCIONES_idAtraccion])
    REFERENCES [dbo].[ATRACCIONES]
        ([idAtraccion])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [ITINERARIOS_idItinerario] in table 'ITINERARIOS_ATRACCIONES'
ALTER TABLE [dbo].[ITINERARIOS_ATRACCIONES]
ADD CONSTRAINT [FK_ITINERARIOS_ATRACCIONES_ITINERARIOS]
    FOREIGN KEY ([ITINERARIOS_idItinerario])
    REFERENCES [dbo].[ITINERARIOS]
        ([idItinerario])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ITINERARIOS_ATRACCIONES_ITINERARIOS'
CREATE INDEX [IX_FK_ITINERARIOS_ATRACCIONES_ITINERARIOS]
ON [dbo].[ITINERARIOS_ATRACCIONES]
    ([ITINERARIOS_idItinerario]);
GO

-- Creating foreign key on [CIUDADES_codPostal] in table 'USUARIOS_CIUDADES'
ALTER TABLE [dbo].[USUARIOS_CIUDADES]
ADD CONSTRAINT [FK_USUARIOS_CIUDADES_CIUDADES]
    FOREIGN KEY ([CIUDADES_codPostal])
    REFERENCES [dbo].[CIUDADES]
        ([codPostal])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [USUARIOS_idUsuario] in table 'USUARIOS_CIUDADES'
ALTER TABLE [dbo].[USUARIOS_CIUDADES]
ADD CONSTRAINT [FK_USUARIOS_CIUDADES_USUARIOS]
    FOREIGN KEY ([USUARIOS_idUsuario])
    REFERENCES [dbo].[USUARIOS]
        ([idUsuario])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_USUARIOS_CIUDADES_USUARIOS'
CREATE INDEX [IX_FK_USUARIOS_CIUDADES_USUARIOS]
ON [dbo].[USUARIOS_CIUDADES]
    ([USUARIOS_idUsuario]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------