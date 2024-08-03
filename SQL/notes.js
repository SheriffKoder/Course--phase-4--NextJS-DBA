




// Introduction
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*

What are databases ?
systems that allow users to store and organize data
useful when dealing with large amounts of data
used by anyone need to work with data

going from spreadsheets to databases

spreadsheets: excel
one-time analysis
chart out
reasonable data set size
downside:

databases:
data integrity (security)
massive amount of data
combine different data sets
automate steps for re-use
support data for websites, apps etc.


Excel       DB
tabs        tables
rows        rows
columns     columns
header      data-type

postGreSQL works with many platforms, open source, free, widely used
SQL: structured query language
programming language used communicate with a db

PSQL - sql engine stores data, reads queries and returns information
pgdmin: gui for connecting with postgreSQL to type our queries



*/



// Installation
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*


do not open dvdrental.tar file directly
PostgreSQL password
Port 5433 or 5432 defaults (can be blocked by a corprate firewall)


download and install psql 


// install psql
https://www.youtube.com/watch?v=tducLYZzElo
https://www.postgresql.org/download/linux/ubuntu/

access the psq user # sudo -i -u postgres
enter tge psq line # psql to exit # \q

as a psq user
create db: # createdb name
switch to this db # psql -d name
to get info # \conninfo

to create a password o to the psq line #password
password: password


// install pgAdmin
http://127.0.0.1/pgadmin4/browser/
sudo apt install curl
then https://www.pgadmin.org/download/pgadmin-4-apt/

sheriff.koder@homail.com
username : postgres
password: password


// download the tar file
https://www.dropbox.com/scl/fi/o6x8vmlfsjisvfe04p6rx/dvdrental.tar?rlkey=jejj29kk7gda2v3crfv285m49&e=1&dl=0

restore the db, ignore failed exit code if it appears



*/


// pgAdmin db restore and setup
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*

servers > create server
general : name localhost

connection: 127.0.0.1
username: postgres
password: do the cli password then put it

open localhost > right click databases create database

// import the .tar database
right click this new db, restore
in filename place the file's path /home/sheriffkoder/Downloads/dvdrental.tar

in the data options tab, check these
pre-data
post-data
data

then restore
if got an error this means it might tried to restore twice

now right click the db, refresh

right click > query tool

type
SELECT * FROM film;
and run.. 

////////
in the query editor which you can open also from top bar > tools

query history where you can copy the query to the main editor

below the data output, messages, notifications
and download icon (to .csv)

drop-down open
database > schemas > public > tables


*/


// Tips
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*



sql reads in reverse
this means the last operation will run first


for readability
can use lower case syntax
the ; donates the end of a query

you may receive tha data in different order depending on the operating system


Challenge Structure
// business situation
// challenge question
// expected answer
// hints 
// solution

Translate business related question to a sql query



*/


// Section 2: SQL Statement Fundamentals
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
////// SELECT ////// column
/*
retrieve information from a table
combined with other statements

SELECT column_name,column_name FROM table_name;  // not need to be in order

SELECT * FROM table_name    // all columns
increases traffic between the database server and the application
thus slowing down the retrieval of results


//Ex
SELECT * FROM actor
SELECT first_name,last_name FROM actor;


Situation:
we want to send out a promotional email to our existing customers

Challenge:
SELECT statement to grab first,last, email of every existing customer

Solution:
SELECT first_name,last_name,email FROM customer;

*/


////////////////////////////////////////////////////////////////////////////
////// SELECT DISTINCT ////// unique column
/*

when a column has duplicate values
to select unique/distinct values

used to select only the distinct values in a column
i.e returns unique and one only of the duplicate

solves the question
if we want to know a grouping value for example release_years

SELECT DISTINCT column_name from table_name;
SELECT DISTINCT(column_name) from table_name;   //works the same - no space


Question:
what types of ratings do we have in our database ?

Solution:
SELECT DISTINCT(rating) FROM film;

*/


////////////////////////////////////////////////////////////////////////////
////// COUNT ////// only return the count of the columns
/*

returns how many rows/occurrences in this column

it does not matter which column as all columns have the same count/occurrence

COUNT or COUNT(*)

Question:
how many unique names in this table

Solution:
SELECT COUNT(DISTINCT(first_name)) FROM customer;



*/


////////////////////////////////////////////////////////////////////////////
////// SELECT WHERE ////// conditional select
/*
SELECT and WHERE are the most fundamental SQL statments

allows to specify conditions on columns for the rows to be returned

SELECT columns
FROM table
WHERE conditions

conditions
comparison operators, > , < , = , "<> or !=" , <=, >=
combine with logical operators   AND, OR, NOT

single quotes




SELECT * FROM customer WHERE first_name='Jared';        // all columns for Jared

SELECT first_name FROM customer WHERE first_name='Jared'; // only name

SELECT * FROM film 
WHERE rental_rate > 4;                                  // all qualified columns

SELECT * FROM film 
WHERE rental_rate > 4 AND replacement_cost >= 19.99;    // all qualified columns

SELECT title FROM film 
WHERE rental_rate > 4 AND replacement_cost >= 19.99;    // qualified titles

SELECT COUNT(title) FROM film 
WHERE rental_rate > 4 
AND replacement_cost >= 19.99
AND rating="R";                                         // count qualified titles


SELECT COUNT(*) FROM film
WHERE rating = 'R' OR rating = 'PG-13';

SELECT * FROM film
WHERE rating != 'R';                                    // all columns not 'R'


////////////// Example:

// Question
A customer forgot their wallet at our store!
we need to track down their email to inform them.

What is the email for the customer with the name Nancy Thomas


// Answer
// SELECT all from customers
SELECT * FROM customer
// SELECT the customer with name nancy thomas
SELECT * FROM customer WHERE first_name = 'Nancy' AND last_name = 'Thomas'
// now we need her email column only
SELECT email FROM customer WHERE first_name = 'Nancy' AND last_name = 'Thomas'


////////////// Example:

// Question
A Customer wants to know what the movie "Outlaw Hanky" is about
Could you give them the description for the movie "Outlaw Hanky"


// Answer
SELECT * from film
SELECT * from film WHERE title = 'Outlaw Hanky'
SELECT description from film WHERE title = 'Outlaw Hanky'


////////////// Example:

// Question
A customer is late on their movie return date,
and we've mailed them a letter to their address at "259 Ipoh Drive"
we should also call them on the phone to let them know.

Can you get the phone number for the customer who lives at "259 Ipoh Drive"

// Answer

// check all address columns
SELECT * from address
// check what this address has as data
SELECT * from address WHERE address='259 Ipoh Drive'
// get only the phone column with the given address in the address table 
SELECT phone from address WHERE address='259 Ipoh Drive'





*/


////////////////////////////////////////////////////////////////////////////
////// ORDER BY ////// sort, end
/*

if we want the result in a specific order
acceding alphabetical or number

can be used on multiple columns
makes sense when some columns have duplicate entries
so they can be viewed right after each other and also sorted by the 2nd column



SELECT col_1,col_2
FROM table_name
ORDER BY col_1 ASC     // can not use ASC or DESC and it will be ASC by default

// order by company "then" order by sales in ASC
SELECT company,name,sales
FROM table_name
ORDER BY company,sales

// sort customers by name
SELECT * FROM customer
ORDER BY first_name DESC

// sort customers by name in store 1 then sorted again for store 2
SELECT * FROM customer
ORDER BY store_id DESC,first_name ASC;
or 
SELECT first_name,last_name,store_id FROM customer
ORDER BY store_id DESC,first_name ASC;

Example//


*/


////////////////////////////////////////////////////////////////////////////
////// Limit ////// placed at end after order
/*

limit the amount of rows that are returned in a query
useful with ORDER BY

SELECT * FROM payment

// return payment_dates ordered in ASC, return only 2 rows
SELECT * FROM payment
ORDER BY payment_date ASC
LIMIT 2;

SELECT * FROM payment
WHERE amount != 0.00
ORDER BY payment_date ASC
LIMIT 2;








*/






////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*

Situation:
Challenge:
Solution:


Git



*/


////////////////////////////////////////////////////////////////////////////
/*



*/






















