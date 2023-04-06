create database moldTech;
use moldTech;
CREATE TABLE usuario (
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) ,
  email VARCHAR(45),
  senha varchar(50),
  cnpj VARCHAR(45),
  tell VARCHAR(45)
);

CREATE TABLE endereco (
  idendereco INT PRIMARY KEY auto_increment,
  numero INT NOT NULL,
  complemento VARCHAR(45),
  CEP CHAR(8),
  rua VARCHAR(45) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  cidade VARCHAR(45) NOT NULL,
  estado VARCHAR(45) NOT NULL,
  fkUsuario INT NOT NULL,
  CONSTRAINT fkU
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario)
);

CREATE TABLE sensor (
  idSensor INT primary key auto_increment,
  localSensor VARCHAR(45),
  statusSensor CHAR(1),
  dtHora datetime,
  fkEndereco INT NOT NULL,
  CONSTRAINT fkS
    FOREIGN KEY (fkEndereco)
    REFERENCES endereco(idendereco)
);

CREATE TABLE dados_sensor (
  idDados INT NOT NULL AUTO_INCREMENT,
  temperatura DOUBLE,
  umidade DOUBLE,
  dataHora DATETIME,
  fkSensorSt INT NOT NULL,
  PRIMARY KEY (idDados),
  CONSTRAINT fkSt
    FOREIGN KEY (fkSensorSt)
    REFERENCES sensor (idSensor)
);

