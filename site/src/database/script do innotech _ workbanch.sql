create database INNO;
use INNO;
 
create table empresa (
idEmpresa int primary key auto_increment,
nome varchar (60),
nomeFantasia varchar (45),
cnpj char (14),
emailContato varchar (45)
); 

create table usuario (
idUsuario int primary key auto_increment,
nomeU varchar (50),
sobrenome varchar (50),
email varchar (50),
senha varchar (50),
tel char (14),
fkEmpresa int,
constraint fkEmpresa foreign key (fkEmpresa)
	references empresa (idEmpresa),
fkLider int,
constraint fkLider foreign key (fkLider)
	references usuario (idUsuario)
);

create table TipoSensor (
idTipo int primary key auto_increment,
nome varchar (30)
);

create table ideal (
idIdeal int primary key auto_increment,
tempIdeal double,
umidIdeal double,
fkTipo int
);

create table endereco (
idEndereco int primary key auto_increment,
numero int,
complemento varchar (30),
CEP char (8),
rua varchar (45),
bairro varchar (45),
cidade varchar (45),
estado char (2),
fkEmpresa int,
constraint fkEmpresa2 foreign key (fkEmpresa)
	references empresa (idEmpresa));

create table sensor (
idSensor int primary key auto_increment,
lugar varchar (45),
statusSensor varchar (20),
dtHora datetime,
fkEndereco int,
fkIdeal int
,fkTipo int,
constraint fkEndereco_ foreign key (fkEndereco)
	references endereco (idEndereco),
constraint fkIdeal_ foreign key (fkIdeal)
	references ideal (idIdeal),
constraint fkTipo_ foreign key (fkTipo)
    references TipoSensor(idTipo)
);

create table dadosSensor (
idDados int primary key auto_increment,
temperatura double,
umidade double,
dataHora datetime,
fkSensor int,
constraint fkSensor foreign key (fkSensor)
	references sensor (idSensor)
);

select*from usuario 
join empresa on usuario.fkEmpresa = idEmpresa 
join endereco on endereco.fkEmpresa =idEmpresa 
join Sensor on sensor.fkEndereco = idEndereco
join tipoSensor on fkTipo = idtipo
join ideal on fkIdeal = idIdeal
join dadosSensor on fkSensor = idSensor;