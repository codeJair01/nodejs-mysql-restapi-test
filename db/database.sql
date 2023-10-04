CREATE database companydb;
USE companydb;
CREATE TABLE empleado (
	id int(11) not null auto_increment,
    nombre varchar(100) default null,
    salary int(5) default null,
    primary key (id)
)
insert into empleado values(1,'joe',1000),(2,'ramon',2050),(3,'jair',3100),(4,'martin',4010);
select *from empleado