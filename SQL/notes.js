




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

make sure when you create table or col names in the db
that they are not SQL names
if not so, make sure you write the commands in uppercase and not commands in lowercase

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


////// Example

// Question:
if the previous customer can watch any movie that is 50 minutes
or less in run time, how many options dos she have ?

// Answer
movie, 50 minutes or less, count

SELECT COUNT(*) FROM film       // * or any column
WHERE length <= 50




*/


////////////////////////////////////////////////////////////////////////////
////// WHERE ////// conditional select
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

////// Example

// Question:
we want to reward our first 10 paying customers
what are the customer id's of the first 10 customers
who created the payment

// Answer:
SELECT customer_id FROM payment 
ORDER BY payment_date ASC
LIMIT 10;

////// Example

// Question:
a customer wants to quickly rent a video to watch over their short lunch break
(what are the titles of the 5 shortest in length of runtime) movies ?

// Answer:
SELECT * FROM film
SELECT * FROM film ORDER BY length;
SELECT * FROM film ORDER BY length LIMIT 5

SELECT title 
FROM film 
ORDER BY length ASC
LIMIT 5

but what if there are movies more than 5 with the same length ?
we can do another query ?
like find the what these 5 will return as unique
then return all titles with these unique values



*/


////////////////////////////////////////////////////////////////////////////
////// Limit ////// placed at end after ORDER
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
////// WHERE (NOT) BETWEEN ////// range
/*

used to match a value against a range of values
value between low and high

BETWEEN low AND high
NOT BETWEEN low AND high        // the opposite value less than low and greater than high

it includes the low and high
BETWEEN 8 AND 9 returns 8 and 9 with the in between

can also be used with dates in ISO 8601 format
YYYY-MM-DD
BETWEEN '2007-01-01' AND '2007-02-01'

keep in mind when using dates with hour 0:00 might not work well

// 
SELECT * FROM payment
WHERE amount NOT BETWEEN 8 AND 9

// here to get the events on the 14th we had to include the 15th
// because it is only going up towards the 0:00 hour mark
SELECT * FROM payment
WHERE payment_date BETWEEN '2007-02-01' AND '2007-02-15'






*/


////////////////////////////////////////////////////////////////////////////
////// WHERE (NOT) IN ////// similar to WHERE col=x AND col=y 
/*

when want to check for multiple possible value options
for example, if a user's name shows up IN a list
of known names.

we can use the IN operator to create a condition
that checks to see if a value is included in a list of multiple options


SELECT color FROM table
WHERE color IN ('red', 'blue')

SELECT color FROM table
WHERE color NOT IN ('red', 'blue')

// Find the number(count) of payments having these amount values
SELECT COUNT(*) FROM payment
WHERE amount IN (0.99,1.98,1.99)

SELECT * FROM customer
WHERE first_name IN ('John', 'Jake', 'Julie')




*/


////////////////////////////////////////////////////////////////////////////
////// LIKE / ILIKE ////// general pattern
/*

// LIKE:
if we want to match against a general pattern in a string
all emails ending in "@gmail.com"
all names begin with "A" capital A

the LIKE operator allows us to perform pattern matching against
string data with the use of "wildcard" characters 

LIKE is case sensitive
ILIKE is the same but case insensitive

% : matches any number/sequence of characters

// all names that begin with "A", also can be blank (nothing after A)
WHERE name LIKE "A%"

// all names that end with an "a"
WHERE name like "%a"



_ : matches any single character, leaves a single space to fill
can use multiple _ after each other

// Get all "Mission Impossible X" films
// Mission Impossible 1 // Mission Impossible 2
WHERE title like 'Mission Impossible _'     

// Get all "paper types"
// Type #A4 // Type #A3
WHERE type like 'Type #__'     

// starts with any single character then 'her' then any sequence of chars
WHERE name LIKE '_her%'
// Cheryl, Theresa, Sherri

!! also supports regex

// any first_name starts with 'J', last name starts with 'S'
SELECT * FROM customer
WHERE first_name LIKE 'J%' AND last_name LIKE 'S%'

// anyone who "doesn't" have 'er' somewhere in their first_name
SELECT * FROM customer
WHERE first_name NOT LIKE '%er%'




*/



////////////////////////////////////////////////////////////////////////////
////// General Challenges 1
/*


// How many payment transactions where greater than $5.00
SELECT COUNT(*) FROM payment
WHERE amount > 5.00;

// How many actors have a first name that starts with the letter P ?
SELECT COUNT(first_name) FROM actor     // first_name not * just for clarification
WHERE first_name LIKE 'P%';


// How many unique districts are our customers from ?
SELECT COUNT(DISTINCT(district)) FROM address;

// How many films have a rating of R and a replacement cost between 5$ and 15$
SELECT COUNT(*) FROM film
WHERE rating = 'R'
AND replacement_cost BETWEEN 5 and 15


// How many films have the word 'Truman' somewhere in the title
SELECT COUNT(*) FROM film
WHERE title LIKE '%Truman%'




*/










////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////// Section 3: Group By

//allow us to aggregate data and apply functions to better understand
//how data is distributed per category



////////////////////////////////////////////////////////////////////////////
////// Aggregate functions - avg,count,max,min,sum
/*

take multiple inputs, return a single output

AVG() with ROUND()
COUNT()
MAX()
MIN()
SUM() adds all up in this particular col

Happen only in the SELECT or HAVING clauses/statements

// What is the lowest replacement cost for films
SELECT MIN(replacement_cost) FROM film;
SELECT MIN(replacement_cost),title FROM film;   // will not work different types of return
SELECT MIN(replacement_cost),MAX(replacement_cost) FROM film; // works because these rows match up


// find the average and sum for the replacement_cost column with 2 decimals
SELECT ROUND(AVG(replacement_cost),2) FROM film;

SELECT ROUND(SUM(replacement_cost),2) FROM film;








*/


////////////////////////////////////////////////////////////////////////////
////// Group by (part 1), categorizing,  placed at end after WHERE
/*

allows us to aggregate columns per some category

we need to choose a categorical col to group by
these cols are non-continuous

they can still be numerical, such as cabin class categories on a ship
e.g Class 1, Class 2, Class 3

so you can return the sum for example for each repeated value/category

category    data value
A           10
A           5
B           2
B           4

becomes when using SUM as an AGG function
A           15
B           6

SELECT category_col, AGG(data_col) FROM table
WHERE category_col != 'A"
GROUP BY category_col

// important notes
// AGG(col_name) like SUM AVG etc.
the AGG col not need to appear in the 'GROUP BY' and 'WHERE IN' statements
the HAVING statements can be used to filter these AGG cols
but the SELECTED cols should appear in the 'GROUP BY'

if using ORDER BY on the AGG col, ORDER BY AGG(data_col) for example
and ORDER comes last in the line statement



// must appear in select and group by
SELECT rating FROM film
GROUP BY rating;




// return each rating as a category with each SUM of the replacement_cost
SELECT rating,SUM(replacement_cost) FROM film
GROUP BY rating;


// here it will return each rating for each rental rate with the sum of the replacement_cost
SELECT rating,rental_rate,SUM(replacement_cost) FROM film
GROUP BY rating,rental_rate;


// here it will return each rating for each rental rate with the sum of the replacement_cost
// and sorted by rating appear combined with its rental_rate beside it, then the next rating etc.
SELECT rating,rental_rate,SUM(replacement_cost) FROM film
GROUP BY rating,rental_rate
ORDER BY rating

//
SELECT rating,rental_rate,SUM(replacement_cost) FROM film
WHERE rental_rate > 1
GROUP BY rating,rental_rate
ORDER BY rating

//
SELECT rating,rental_rate,SUM(replacement_cost) FROM film
GROUP BY rating,rental_rate
ORDER BY SUM(replacement_cost)
LIMIT 5

// how many payments/amounts paid did each customer made
// and order these amounts count
SELECT customer_id, COUNT(amount) FROM payment
GROUP BY customer_id
ORDER BY COUNT(amount) DESC


// how many payments/amounts paid did each customer made and with each staff member
// and order by the customer/staff together
SELECT customer_id,staff_id, COUNT(amount) FROM payment
GROUP BY customer_id,staff_id
ORDER BY customer_id,staff_id



////// Dates
we have to use a specialized function to convert timestamp to a date
to remove the time just the YYYY-MM-DD
to group by this date 

// group dates and return the sum of the amount of payments happened
// then return this ordered by date in ASC order
SELECT DATE(payment_date),SUM(amount) FROM payment
GROUP BY DATE(payment_date)
ORDER by DATE(payment_date)


// EX
Two staff members with Staff ID's 1,2
We want to give a bonus to the staff member that handled the most payments
most in terms of the number of payments processed, not total dollar amount

How many payment did each staff member handle and who gets the bonus

SELECT staff_id, COUNT(amount) FROM payment
GROUP BY staff_id

// EX
Corporate HQ is conducting a study on the relationship between
replacement_cost and a movie MPAA rating

What is the average replacement cost per MPAA rating

SELECT rating, ROUND(AVG(replacement_cost),2) FROM film
GROUP BY rating

// EX
we are running a promotion to reward our top 5 customer with coupons
What are the customer ids of the top 5 customers by total spend

SELECT customer_id, SUM(amount) FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC
LIMIT 5



*/


////////////////////////////////////////////////////////////////////////////
////// HAVING filter the GROUP BY AGG() result 
/*

allows to filter like WHERE "after" an AGG aggregation has taken place
in a GROUP BY case

// for example this query will grouping ratings each having groups of rental rate
// each of the rental rates have the SUM of the cost
// trying to filter the cost out will not work
SELECT rating,rental_rate,SUM(replacement_cost) FROM film
WHERE SUM(replacement_cost) > 1100
GROUP BY rating,rental_rate
ORDER BY rating

rating  rental_rate     SUM(replacement_cost)
G       2.99            1164
G       4.99            1063
G       0.99            1354

// so can use HAVING to remove any sum less than 1100
SELECT rating,rental_rate,SUM(replacement_cost) FROM film
GROUP BY rating,rental_rate
HAVING SUM(replacement_cost) > 1100
ORDER BY rating

rating  rental_rate     SUM(replacement_cost)
G       2.99            1164
G       0.99            1354


//
SELECT customer_id, SUM(amount) FROM payment
GROUP BY customer_id
HAVING SUM (amount) > 100

// count how many customers per store, return only having more than 300 customers
SELECT store_id, COUNT(*) from customer
GROUP BY store_id
HAVING COUNT(*) > 300


// EX
we are launching a platinum service for our most loyal customers
we will assign platinum status to customers that have had 40 or more
transaction payments
what customer_ids are eligible for platinum status

SELECT customer_id, COUNT(amount) FROM payment
GROUP BY customer_id
HAVING COUNT(amount) >= 40

// EX
What are the customer ids of customers
who have spent more than $100 in payment transactions
with our staff_id member 2 ?

SELECT customer_id, SUM(amount) FROM payment
WHERE staff_id = 2
GROUP BY customer_id
HAVING SUM(amount) > 100




*/


////////////////////////////////////////////////////////////////////////////
////// Assessment Test 1
/*

// Q1
Return the customer IDs of customers who have spent at least 110
with staff member who has ID of 2

SELECT customer_id, SUM(amount) FROM payment
WHERE staff_id = 2
GROUP BY customer_id
HAVING SUM(amount) > 110

// Q2

How many films begin with the letter J ?

SELECT COUNT(title) FROM film
WHERE title LIKE 'J%'

// Q3
What customer has the highest customer ID number 
whose name starts with an 'E' and has an address ID lower than 500?

SELECT first_name,last_name FROM customer
WHERE first_name LIKE 'E%' AND address_id < 500
ORDER BY customer_id DESC
LIMIT 1




*/










////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////// Section 5: JOINS
/*

Allow to combine information from multiple tables together
different types of JOIN to decide how to deal with info 
only present in one of the joined tables


*/

////////////////////////////////////////////////////////////////////////////
////// AS clause - data output rename alias
/*

allows us to create an "alias" for a col or result

useful only when displaying data name in the GUI or API fetching
to make things clear what the data represents

it gets exe at the very end of a query
meaning we can not use the new created ALIAS inside a WHERE/HAVING operations



SELECT col AS new_name FROM table

// change the "sum" alias to "net_revenue"
SELECT SUM(amount) AS net_revenue FROM payment;

SELECT customer_id, SUM(amount) AS total_spent
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 130



*/


////////////////////////////////////////////////////////////////////////////
////// INNER JOIN
/*

// Explanation

company is holding a conference for people in the movie rental industry
we will have people register online beforehand 
and then login the day of the conference

so we will have two tables
1st : pre registrations
2nd : at day logins

we have to match the records that exist in both tables
i.e clients with names in the registered and logged tables in will enter

SELECT * FROM tableA
INNER JOIN tableB
ON tableA.col_match = tableB.col_match


// only grab the rows that are in tableA and tableB
// INNER JOIN is symmetrical, meaning if we switched table names, the result will be the same


SELECT * FROM Registrations
INNER JOIN Logins
ON Registrations.name = Logins.name

// as we used *, will return all columns in Registrations and Logins tables
// and the name col will be duplicated

// to solve this
SELECT reg_id,Logins.name,log_id FROM Registrations
INNER JOIN Logins
ON Registrations.name = Logins.name

// specified Logins for the name as it is duplicated and we want one, from the Login table

we can use just JOIN and postgreSQL will treat it as an INNER JOIN


// EX ////
join the customer table with the payment table
to get the email of the customer for a specific payment

SELECT * from customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id

SELECT payment_id, payment.customer_id,first_name from customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id

SELECT email from customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
WHERE payment_id = 17503
////////







*/

////////////////////////////////////////////////////////////////////////////
////// OUTER JOIN
/*





*/





////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*

Situation:
Challenge:
Solution:


Git
Solve challenges and learn new commands in SELECT, GROUP, JOIN

= Solve some examples, solve General challenges #1 and Assessment test #1
= Work on the following commands
- WHERE BETWEEN
- WHERE IN
- LIKE / ILIKE
- Aggregate functions
- GROUP BY
- HAVING
- AS clause
- INNER JOIN


*/


////////////////////////////////////////////////////////////////////////////
/*





*/





















