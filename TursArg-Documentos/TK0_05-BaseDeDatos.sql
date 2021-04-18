
create BDTursArg
use BDTursAgr


-- tabla USUARIOS ACTOR
create table USUARIOS(
idUsuario int NOT NULL IDENTITY (1,1),
urlFotoUsuario varchar(100),
nombreUsuario varchar(50),
nombre varchar(50),
apellido varchar(50),
telefono bigint,
<<<<<<< HEAD
email varchar(100),
contrasenia varchar(260),
=======
mail varchar(100),
contrasenia varchar(50),
>>>>>>> b2e3e16fe7d0e91e0ea46217598e9245144f7c9d
rolAdmin bit,
constraint pk_cu primary key(idUsuario),
)

-- tabla CHATS,  para guardar la consulta que envia el usuario
create table CHATS(
idChat int NOT NULL IDENTITY (1,1),
fechaChat date,
-- cuando se responda el email, se guardara esa respuesta en el campo...
email varchar(100),
nombre varchar(50),
apellido varchar(50),
consulta text,
idUsuario_Chat int,
constraint pk_cc primary key(idChat),
constraint fk_fUsuChat foreign key(idUsuario_Chat) references USUARIOS (idUsuario)
)

-- tabla TEMAS_DE_FORO
create table TEMAS_DE_FORO(
idTema int NOT NULL IDENTITY (1,1),
nombreDeTema varchar(50),
idUserForo int,
constraint pk_ct primary key(idTema),
constraint fk_cut foreign key(idUserForo) references USUARIOS (idUsuario)
)

-- tabla PUBLICACION
create table PUBLICACIONES(
idPublicacion int NOT NULL IDENTITY (1,1),
fechaPublicacion date,
texto text,
idUserPublicacion int,
idTema_publicacion int, -- HACE REFERENCIA A LA RELACION CON TEMA_DE_FORO
constraint pk_cp primary key(idPublicacion),
constraint fk_ftema_publi foreign key(idTema_publicacion) references TEMAS_DE_FORO (idTema),
constraint fk_fid_User foreign key(idUserPublicacion) references USUARIOS (idUsuario)
)

-- tabla DEPARTAMENTOS
create table DEPARTAMENTOS(
idDepartamento int NOT NULL IDENTITY (1,1),
nombreDepartamento varchar(50),
constraint pk_cd primary key(idDepartamento)
)

-- tabla CIUDADES
create table CIUDADES(
codPostal int NOT NULL IDENTITY (1,1),
descripcionCiudad varchar(100),
nombreCiudad varchar(50),
urlUbicacionCiudad varchar(150),
urlfotoCiudad1 varchar(150),
urlfotoCiudad2 varchar(150),
urlfotoCiudad3 varchar(150)
)


-- tabla ATRACCIONES
create table ATRACCIONES(
idAtraccion int NOT NULL IDENTITY (1,1),
nombreAtraccion varchar(50),
direccionAtraccion varchar(50),
descripcionAtraccion varchar(50),
horarioAtraccion varchar(50),
tarifaAtraccion varchar(50),
serviciosAtraccion varchar(50),
urlUbicacionAtraccion varchar(150),
urlfotoAtraccion1 varchar(150),
urlfotoAtraccion2 varchar(150),
urlfotoAtraccion3 varchar(150),
codPostal_Atraccion int,
constraint pk_catracc primary key(idAtraccion),
constraint fk_fpostal_atracc foreign key (codPostal_Atraccion) references CIUDADES (codPostal)
)



-- tabla ITINERARIOS
create table ITINERARIOS(
idItinerario int NOT NULL IDENTITY (1,1),
nombreItinerario varchar(50),
descripcionItinerario varchar(50),
constraint pk_citi primary key(idItinerario),
)



--tabla HISORIAL CLIMATICO
create table HISTORIAL_CLIMATICO(
idClima int NOT NULL IDENTITY (1,1),
fechaClima date,
tempMin varchar(50),
tempMax varchar(50),
estadoClima varchar(50),
codPostal_HistoClim int,
constraint pk_cidClima_1 primary key(idClima),
constraint fk_fcodp_hclim foreign key(codPostal_HistoClim) references CIUDADES (codPostal)
)

-- tablas para las relaciones muchos a muchos (son 3)

-- relacion de las tablas USUARIOS CIUDADES
create table USUARIOS_CIUDADES(
idUsuario_codPostal int NOT NULL,
codPostal_idUsuario int NOT NULL,
constraint fk_fUsuPos foreign key(idUsuario_codPostal) references USUARIOS(idUsuario),
constraint fk_fPosUsu foreign key(codPostal_idUsuario) references CIUDADES (codPostal)
)

-- relacion de las tablas ITINERARIOS_ATRACCIONES
create table ITINERARIOS_ATRACCIONES(
idItinerario_idAtraccion int NOT NULL,
idAtraccion_idItinerario int NOT NULL,
constraint fk_fItiAtra foreign key(idItinerario_idAtraccion) references ITINERARIOS (idItinerario),
constraint fk_fAtraIti foreign key(idAtraccion_idItinerario) references ATRACCIONES (idAtraccion)
)

