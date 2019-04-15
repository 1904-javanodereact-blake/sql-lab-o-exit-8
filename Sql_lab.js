// In this section you will begin the process of working with the Oracle Chinook database
// Task – Open the Chinook_Oracle.sql file and execute the scripts within.
// 2.0 SQL Queries
// In this section you will be performing various queries against the Oracle Chinook database.
//2.1 SELECT
//Task – Select all records from the Employee table.
    SELECT * FROM employee;
//Task – Select all records from the Employee table where last name is King.
//Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
SELECT * FROM employee WHERE firstname = ('Andrew') AND reportsto = null;
//2.2 ORDER BY
//Task – Select all albums in Album table and sort result set in descending order by title.
SELECT * FROM album ORDER BY title DESC;
//Task – Select first name from Customer and sort result set in ascending order by city
SELECT firstname FROM customer ORDER BY city ASC;
//2.3 INSERT INTO
//Task – Insert two new records into Genre table
INSERT INTO genre (genreid, name)
	VALUES (26, 'Indie'),
			(27, 'Bluess');
//Task – Insert two new records into Employee table
INSERT INTO employee (employeeid, lastname, firstname, title, reportsto, birthdate, 
	hiredate, address, city, state, country, postalcode, phone, fax, email)
VALUES ('Sanchez', 'Rodrigo', 'IT Staff', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 
            '33298 Agricola', 'DF', 'DF', 'Mexico', 08954, +1982224-2354, 
            +1543298-4353, 'ro@chinookcorp.com'),
        (12,'Sanchez', 'Ivan', 'IT Staff', 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 
		'33298 Agricola', 'DF', 'DF', 'Mexico', 08954, +1982224-2354, 
		+1543298-4353, 'iv@chinookcorp.com');
//Task – Insert two new records into Customer table
INSERT INTO customer (customerid, firstname, lastname, company, address, city, state, country, postalcode, phone, fax, email, supportrepid)
VALUES (ROW_NUMBER, 'Delgado', 'Antonio', 'Perficientur', 
		'33298 10st', 'Mcallen', 'TX', 'USA', 98954, +1982224-2354, 
		+1543298-4353, 'nero@corp.com',5),
		(ROW_NUMBER,'Delgado', 'Bruno', 'Perficientur', 
		'33298 10st', 'Mcallen', 'TX', 'USA', 98954, +193226-2657, 
		+1247288-4357, 'delB@corp.com',5);	
//2.4 UPDATES
//Task – Update Aaron Mitchell in Customer table to Robert Walter
UPDATE customer SET firstname = 'Aaron', lastname = 'Mitchell' WHERE firstname ='Robert' AND lastname ='Walter';
//Task – Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”

UPDATE artist SET name ='CCR' WHERE name = 'Creedence Clearwater Revival';
//2.5 LIKE
//Task – Select all invoices with a billing address like “T%”
SELECT * FROM invoice WHERE billingaddress LIKE 'T%';
//2.6 BETWEEN
//Task – Select all invoices that have a total between 15 and 50

SELECT * FROM invoice WHERE total > 15 AND total <50;

//using BETWEEN

SELECT * FROM invoice WHERE total BETWEEN 15 AND 50;

//Task – Select all employees hired between 1st of June 2003 and 1st of March 2004
SELECT * FROM employee WHERE hiredate BETWEEN 01/06/2003 AND 01/03/2004
// since it hiredate has a timestamp I cannot get the records
//2.7 DELETE
//Task – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
DELETE FROM customer WHERE firstname ='Robert' AND lastname = 'Walter';
//SQL Functions
//In this section you will be using the Oracle system functions, as well as your own functions, to perform various actions against the database
//3.1 System Defined Functions
//Task – Use a function that returns the current time.
SELECT LOCALTIMESTAMP
//Task – Use a function that returns the length of a mediatype from the mediatype table
SELECT LENGTH ('mediatype') AS LengthOfString;
//3.2 System Defined Aggregate Functions
//Task – Use a function that returns the average total of all invoices
SELECT AVG(total) FROM invoice;   
//Task Use a function that returns the most expensive track
SELECT MAX(unitprice) FROM track;
//7.0 JOINS
//In this section you will be working with combing various tables through the use of joins. You will work with outer, inner, right, left, cross, and self joins.
//7.1 INNER
//Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
SELECT customer.customerid FROM customer INNER JOIN invoice ON customer.customerid = invoice.customerid;  
//7.2 OUTER
//Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total.
SELECT customer.customerid, customer.firstname, customer.lastname, invoice.invoiceid, invoice.total FROM customer FULL OUTER JOIN invoice ON customer.customerid = invoice.customerid
//7.3 RIGHT
//Task – Create a right join that joins album and artist specifying artist name and title.
SELECT artist.name, album.title FROM artist RIGHT JOIN album ON artist.artistid = album.artistid;
//7.4 CROSS
//Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
SELECT artist.name, album.title FROM artist RIGHT JOIN album ON artist.artistid = album.artistid ORDER BY artist.name ASC;
//7.5 SELF
//Task – Perform a self-join on the employee table, joining on the reportsto column.
SELECT emp.employeeid, emp.lastname, emp.firstname, mgr.reportsto, mgr.title FROM employee AS emp LEFT JOIN employee AS mgr ON emp.employeeid = mgr.reportsto
