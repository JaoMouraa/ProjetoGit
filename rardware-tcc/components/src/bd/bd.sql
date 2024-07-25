create database Rardware;
use Rardware;

create Table Login(
  ID_Login int auto_incremment primary key ,
  email varchar(100),
  senha varchar(100)
);
create Table Modelos(
  ID_Model int auto_incremment primary key ,
  url_Modelo varchar(100)
);
