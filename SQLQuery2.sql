create database turismoG1_3
use turismoG1_3

-- tabla ROLES
create table ROLES(
idRol int NOT NULL IDENTITY (1,1),
nombreRol varchar(50),
constraint pk_cr primary key(idRol)
)

-- tabla USUARIOS ACTOR
create table USUARIOS(
idUsuario int NOT NULL IDENTITY (1,1),
urlFotoUsuario varchar(100),
nombreUsuario varchar(50),
nombre varchar(50),
apellido varchar(50),
telefono bigint,
email varchar(100),
contrasenia varchar(50),
idRol_usuario int,
constraint pk_cu primary key(idUsuario),
constraint fk_fRol_usuario foreign key(idRol_usuario) references ROLES (idRol)
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
constraint pk_cc primary key(idChat),
)

-- tabla TEMAS_DE_FORO
create table TEMAS_DE_FORO(
idTema int NOT NULL IDENTITY (1,1),
nombreDeTema varchar(50),
constraint pk_ct primary key(idTema)
)

-- tabla PUBLICACION
create table PUBLICACIONES(
idPublicacion int NOT NULL IDENTITY (1,1),
fechaPublicacion date,
texto text,
idTema_publicacion int, -- HACE REFERENCIA A LA RELACION CON TEMA_DE_FORO
constraint pk_cp primary key(idPublicacion),
constraint fk_ftema_publi foreign key(idTema_publicacion) references TEMAS_DE_FORO (idTema)
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
descripcionCiudad varchar(50),
nombreCiudad varchar(50),
urlUbicacionCiudad varchar(150),
urlfotoCiudad1 varchar(150),
urlfotoCiudad2 varchar(150),
urlfotoCiudad3 varchar(150),
idDepartamento_ciudad int,
constraint pk_cpostal primary key(codPostal),
constraint fk_fdpto_c foreign key(idDepartamento_ciudad) references DEPARTAMENTOS(idDepartamento)
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
idAtraccion_Itinerario int,
constraint pk_citi primary key(idItinerario),
constraint fk_fAtracc foreign key(idAtraccion_Itinerario) references ATRACCIONES (idAtraccion)
)



--tabla HISORIAL CLIMATICO
create table HISTORIALCLIMATICO(
idClima int,
fechaClima date,
tempMin varchar(50),
tempMax varchar(50),
estadoClima varchar(50),
codPostal_HistoClim int,
constraint pk_cidClima_1 primary key(idClima),
constraint fk_fcodp_hclim foreign key(codPostal_HistoClim) references CIUDADES (codPostal)
)

-- tablas para las relaciones muchos a muchos (son 3)
-- relacion de las tablas usuarios - conversaciones_chat

create table USUARIOS_TEMADEFORO(
idUsuario_5 int,
idTema_2 int,
constraint fk_fusu_5 foreign key(idUsuario_5) references USUARIOS (idUsuario),
constraint fk_ftema_2 foreign key(idTema_2) references TEMAS_DE_FORO (idTema)
)

create table USUARIOS_CIUDAD(
idUsuario_6 int,
codPostal_5 int,
constraint fk_fusu_6 foreign key(idUsuario_6) references USUARIOS (idUsuario),
constraint fk_fpostal_5 foreign key(codPostal_5) references CIUDADES (codPostal)
)