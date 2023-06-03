drop database INNO;
create database INNO;
use INNO;
 
create table empresa (
idEmpresa int primary key auto_increment,
nome varchar (60),
nomeFantasia varchar (45),
cnpj char (14),
emailContato varchar (45)
); 

insert  into empresa values
(null,'padadarias amaro','Padaria Santa Maria','12345678911234','santamaria.padaria@gmail.com'),
(null,'BONIERworking','Bonier Breakfast','12347892382743','bonier@gmail.com'),
(null,'NekoKōhī','NekoBēkarī','82703820291241','nekonekoni@gmail.com');

create table usuario (
idUsuario int primary key auto_increment,
nomeU varchar (50),
email varchar (50),
cpf char(11),
senha varchar (50),
tel char (14),
fkEmpresa int,
fkLider int,
constraint fkEmpresa foreign key (fkEmpresa)
	references empresa (idEmpresa),
constraint fkLider foreign key (fkLider)
	references usuario (idUsuario)
);
insert into usuario values
(null,'Violeta','vio@gmail.com','11111111111','1212','(11) 1212-1212',3,null),
(null,'Gabriel','ga@gmail.com','22222222222','3242','(11) 4442-5647',3,1),
(null,'Samuel','sa@gmail.com','33333333333','23423','(11) 1546-1647',2,null),
(null,'Safira','saf@gmail.com','4444444444','12341','(11) 4325-1232',1,null);



create table TipoSensor (
idTipo int primary key auto_increment,
nome varchar (30)
);

insert into TipoSensor values
(null,'dht11');

create table ideal (
idIdeal int primary key auto_increment,
tempIdealMax double,
tempIdealMin double,
umidIdealMax double,
umidIdealMin double
);


insert into ideal values
(null,'25','5','60','50');


create table endereco (
idEndereco int primary key auto_increment,
numero int,
complemento varchar (30),
CEP char (8),
logradouro varchar(45),
bairro varchar (45),
cidade varchar (45),
estado char (2),
fkEmpresa int,
constraint fkEmpresa2 foreign key (fkEmpresa)
	references empresa (idEmpresa));

insert into endereco values
(null,'12','null','32619874','null','Bela Vista','São Paulo','SP','1'),
(null,'24','null','32619874','null','Bela Vista','São Paulo','SP','3'),
(null,'14','null','93826251','null','Pinheiros','São Paulo','SP','2'),
(null,'18','null','19281263','null','Jardins','São Paulo','SP','3');

create table setor(
fkEndereco int,
idSetor int,
nome varchar (45),
constraint fkEndSet foreign key (fkEndereco) references endereco (idEndereco),
constraint setorizacao primary key (fkEndereco, idSetor)
);

insert into setor values
('1',1,'bolos'),
('1',2,'pâes'),
('1',3,'pães doces'),
('2',1,'pães'),
('2',2,'doces'),
('3',1,'bolos'),
('3',2,'bolos'),
('3',3,'pães'),
('2',3,'pães doces'),
('4',1,'bolos'),
('4',2,'bolos'),
('4',3,'pães');


create table sensor (
idSensor int primary key auto_increment,
lugar varchar (45),
statusSensor varchar (20),
dtHora datetime,
fkEndereco int,
fkSetor int,
fkIdeal int
,fkTipo int,
constraint setorizacao_de_sensores foreign key(fkEndereco,fkSetor)
    references setor (fkEndereco,idSetor),
constraint fkIdeal_ foreign key (fkIdeal)
	references ideal (idIdeal),
constraint fkTipo_ foreign key (fkTipo)
    references TipoSensor(idTipo)
);
 
insert into sensor values
(null,'armazem','funcionamento','2022-12-24 00:12:12',1,1,1,1),
(null,'exposição1','funcionamento','2022-12-24 00:12:12',1,1,1,1),
(null,'exposição2','funcionamento','2022-12-24 00:12:12',1,2,1,1),
(null,'armazem2','funcionamento','2022-12-24 00:12:12',1,3,1,1),
(null,'armazem','funcionamento','2022-12-24 00:12:12',2,2,1,1),
(null,'exposição1','funcionamento','2022-12-24 00:12:12',2,1,1,1),
(null,'exposição2','funcionamento','2022-12-24 00:12:12',2,2,1,1),
(null,'armazem2','funcionamento','2022-12-24 00:12:12',2,2,1,1),  
(null,'armazem','funcionamento','2022-12-24 00:12:12',3,1,1,1),
(null,'exposição1','funcionamento','2022-12-24 00:12:12',3,1,1,1),
(null,'exposição2','funcionamento','2022-12-24 00:12:12',3,2,1,1),
(null,'armazem2','funcionamento','2022-12-24 00:12:12',3,2,1,1),
(null,'armazem3','funcionamento','2022-12-24 00:12:12',4,1,1,1),
(null,'exposição4','funcionamento','2022-12-24 00:12:12',4,2,1,1),
(null,'armazem5','funcionamento','2022-12-24 00:12:12',4,3,1,1),
(null,'armazem6','funcionamento','2022-12-24 00:12:12',4,3,1,1); 

create table dadosSensor (
idDados int primary key auto_increment,
temperatura double,
umidade double,
dataHora datetime,
fkSensor int,
constraint fkSensor foreign key (fkSensor)
	references sensor (idSensor));

insert into dadosSensor values
(null,22.3, 43.5, '2023-04-20 10:15:00', 1),
(null,21.8, 44.2, '2023-04-20 10:20:00', 2),
(null,23.2, 42.8, '2023-04-20 10:25:00', 3),
(null,20.5, 46.1, '2023-04-20 10:30:00', 4),
(null,24.1, 41.2, '2023-04-20 10:35:00', 5),
(null,22.9, 43.7, '2023-04-20 10:40:00', 1),
(null,21.4, 44.9, '2023-04-20 10:45:00', 2),
(null,23.8, 42.1, '2023-04-20 10:50:00', 3),
(null,20.1, 46.7, '2023-04-20 10:55:00', 4),
(null,24.5, 40.8, '2023-04-20 11:00:00', 5),
(null,22.6, 43.1, '2023-04-20 11:05:00', 1),
(null,21.9, 44.6, '2023-04-20 11:10:00', 2),
(null,23.3, 42.5, '2023-04-20 11:15:00', 3),
(null,20.8, 45.5, '2023-04-20 11:20:00', 4),
(null,24.3, 41.6, '2023-04-20 11:25:00', 5),
(null,22.7, 43.4, '2023-04-20 11:30:00', 1),
(null,21.5, 44.1, '2023-04-20 11:35:00', 2),
(null,23.7, 42.3, '2023-04-20 11:40:00', 3),
(null,23.2, 42.8, '2023-04-20 10:25:00', 3),
(null,20.5, 46.1, '2023-04-20 10:30:00', 4),
(null,24.1, 41.2, '2023-04-20 10:35:00', 5),
(null,22.9, 43.7, '2023-04-20 10:40:00', 6),
(null,21.4, 44.9, '2023-04-20 10:45:00', 6),
(null,23.8, 42.1, '2023-04-20 10:50:00', 7),
(null,20.1, 46.7, '2023-04-20 10:55:00', 7),
(null,24.5, 40.8, '2023-04-20 11:00:00', 8),
(null,22.6, 43.1, '2023-04-20 11:05:00', 7),
(null,21.9, 44.6, '2023-04-20 11:10:00', 7),
(null,23.3, 42.5, '2023-04-20 11:15:00', 8),
(null,20.8, 45.5, '2023-04-20 11:20:00', 9),
(null,24.3, 41.6, '2023-04-20 11:25:00', 10),
(null,22.7, 43.4, '2023-04-20 11:30:00', 10),
(null,21.5, 44.1, '2023-04-20 11:35:00', 14),
(null,23.7, 42.3, '2023-04-20 11:40:00', 12),
(null,22.3, 43.5, '2023-04-20 10:15:00', 13),
(null,21.8, 44.2, '2023-04-20 10:20:00', 16),
(null,23.2, 42.8, '2023-04-20 10:25:00', 16),
(null,20.5, 46.1, '2023-04-20 10:30:00', 15),
(null,24.1, 41.2, '2023-04-20 10:35:00', 14),
(null,22.9, 43.7, '2023-04-20 10:40:00', 11),
(null,21.4, 44.9, '2023-04-20 10:45:00', 12),
(null,23.8, 42.1, '2023-04-20 10:50:00', 13),
(null,20.1, 46.7, '2023-04-20 10:55:00', 14),
(null,24.5, 40.8, '2023-04-20 11:00:00', 15),
(null,22.6, 43.1, '2023-04-20 11:05:00', 11),
(null,21.9, 44.6, '2023-04-20 11:10:00', 12),
(null,23.3, 42.5, '2023-04-20 11:15:00', 13),
(null,20.8, 45.5, '2023-04-20 11:20:00', 14),
(null,24.3, 41.6, '2023-04-20 11:25:00', 15),
(null,22.7, 43.4, '2023-04-20 11:30:00', 11),
(null,21.5, 44.1, '2023-04-20 11:35:00', 12),
(null,23.7, 42.3, '2023-04-20 11:40:00', 13),
(null,23.2, 42.8, '2023-04-20 10:25:00', 13),
(null,20.5, 46.1, '2023-04-20 10:30:00', 14),
(null,24.1, 41.2, '2023-04-20 10:35:00', 15),
(null,22.9, 43.7, '2023-04-20 10:40:00', 16),
(null,21.4, 44.9, '2023-04-20 10:45:00', 16),
(null,23.8, 42.1, '2023-04-20 10:50:00', 13),
(null,20.1, 46.7, '2023-04-20 10:55:00', 13),
(null,24.5, 40.8, '2023-04-20 11:00:00', 12),
(null,22.6, 43.1, '2023-04-20 11:05:00', 16),
(null,21.9, 44.6, '2023-04-20 11:10:00', 9),
(null,23.3, 42.5, '2023-04-20 11:15:00', 9),
(null,20.8, 45.5, '2023-04-20 11:20:00', 9),
(null,24.3, 41.6, '2023-04-20 11:25:00', 9),
(null,22.7, 43.4, '2023-04-20 11:30:00', 9),
(null,21.5, 44.1, '2023-04-20 11:35:00', 16),
(null,23.7, 42.3, '2023-04-20 11:40:00', 9);


select*from usuario 
join empresa on usuario.fkEmpresa = idEmpresa 
join endereco on endereco.fkEmpresa =idEmpresa
join setor on setor.fkEndereco = idEndereco
join Sensor on sensor.fkSetor = idSetor
join tipoSensor on fkTipo = idtipo
join ideal on fkIdeal = idIdeal
join dadosSensor on fkSensor = idSensor;


select*from usuario;
select*from empresa;
select*from endereco;
select*from setor;
select*from sensor;
select*from tipoSensor;
select*from ideal;
select*from dadosSensor;

select*from empresa join endereco on fkEmpresa = idEmpresa;
 
select empresa.nomefantasia, endereco.rua, setor.idSetor, setor.nome, endereco.bairro, dadosSensor.*from 
empresa join endereco on fkEmpresa = idEmpresa 
join setor on fkEndereco =idEndereco
join sensor on fksetor = idsetor 
join dadosSensor on fkSensor=idSensor 
-- where nomefantasia like 'neko%'
order by dataHora;

select*from endereço join sensor on fkEndereco 
