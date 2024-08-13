




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

// to import the .tar database
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
can use upper case syntax
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


a database that has tables existing in a "cd schema" not a public schema
the queries for the FROM tables will have cd.
in front of them for example
SELECT * from cd.bookings

// restoring a database
servers > localhost > databases right click > create
enter name, save
right click the created database > restore

path > /home/sheriffkoder/Downloads/exercises.tar
Data or Restore options activate Pre, data, post
click restore
right click the created database > refresh
now can access exercises > schemas > cd > tables
right click the created database > query tools

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
SELECT and WHERE are the most fundamental SQL statements

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
WHERE title LIKE 'Mission Impossible _'     

// Get all "paper types"
// Type #A4 // Type #A3
WHERE type LIKE 'Type #__'     

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
but the SELECT cols should appear in the 'GROUP BY'

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

// how many payments/amounts paid did each customer make
// and order these amounts count
SELECT customer_id, COUNT(amount) FROM payment
GROUP BY customer_id
ORDER BY COUNT(amount) DESC


// how many payments/amounts paid did each customer make and with each staff member
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

// for example this query will group ratings each having groups of rental rate
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
////// INNER JOIN - intersection between tables
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


// how to deal with values only present in one of the tables being joined


// FULL OUTER JOIN - grab every single row present in every single table
/*
grab everything whether it is present in both tables or only one table
fill the differences with null*

SELECT * FROM TableB
FULL OUTER JOIN TableA
ON TableA.col_match = TableB.col_match


*/


// FULL OUTER JOIN WHERE IS null - inverse of intersection between tables (not union)
/*
// Grab rows that are unique to tableA or unique to tableB
// i.e not present in the other

SELECT * FROM TableA
FULL OUTER JOIN TableB
ON TableA.col_match = TableB.col_match
WHERE TableA.id IS null
OR TableB.id IS null


// Ex. find a customer who never made a payment
// make sure that we do not have any payment information 
// that is not attached to a customer
// OR that we do not have any customer information 
// that is not attached to any payments

SELECT * from customer
FULL OUTER JOIN payment
ON customer.customer_id = payment.customer_id
WHERE customer.customer_id IS null
OR payment.payment_id IS null


*/

// LEFT OUTER JOIN - grab all entries of the left table that can also be present in the right
// all left with also same in right, order matters
/*

results in the set of records that are in the left table
if no match with the right table, the results are null

return all the cols in the left col
any in the right col not in the left will be left-out


order does matter here so..
the left table here will be TableA
LEFT JOIN or LEFT OUTER JOIN

SELECT * FROM TableA
LEFT OUTER JOIN TableB
ON TableA.col_match = TableB.col_match


*/


// LEFT OUTER JOIN WHERE IS null - grab all entries "unique" to the left table
// in left but not in right
/*

SELECT * FROM TableA
LEFT OUTER JOIN TableB
ON TableA.col = TableB_col
WHERE TableB.id IS null

// EX 
// so any returned here will be films but not in the inventory

SELECT film.film_id, title, inventory_id
FROM film
LEFT JOIN inventory 
ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL






*/


// opposite to LEFT JOIN table ordering
// RIGHT OUTER JOIN or RIGHT JOIN - grab all entries of the right table that can also be present in the left
// all right with also same in left, order matters

// RIGHT OUTER JOIN WHERE IS null - grab all entries "unique" to the right table
// in right but not in left


// UNION - stack statements together
/*

combine the result of two or more select statements

they should be logical and similar to each other to be combined together

// grab the result of the first query and put it on top of the second query
SELECT * FROM results_1
UNION
SELECT * FROM results_2







*/


// JOIN Challenges
/*

// Example 1
// What are the emails of the customers who live in california
in customers table we have address_id
in address table we have address_id and california as a district col

we can get the intersection between both tables by the address_id

SELECT * from customer
INNER JOIN address
ON customer.address_id = address.address_id

we want the customers with district california in the address table

SELECT * from customer
INNER JOIN address
ON customer.address_id = address.address_id
WHERE address.district = 'California'

then we need only the email of the customers

SELECT customer.email,address.district from customer
INNER JOIN address
ON customer.address_id = address.address_id
WHERE address.district = 'California'

we can use just email and district directly as they are unique to each table


// Example 2

a customer walk in and is a huge fan of the actor nick wahlberg
and wants to know which movies he is in
get a list of all the movies "Nick Wahlberg" has been in

1) so the actor table has actor_id, first_name, last_name
2) film has film_id
3) film_actor has actor_id, film_id

so we have some intersections intersection

we want movie names
we can get the title from line 2,3
then we can combine with line 1 again

// three tables JOIN
SELECT title, actor.first_name, actor.last_name FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Nick'
AND actor.last_name = 'Wahlberg'








*/


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////// Section 6: Advanced SQL Commands

// Timestamps and Extract - Part 1 current time information
/*

useful when creating our own tables and databases

TIME : contains only time
DATE : contains only date
TIMESTAMP : contains date and time
TIMESTAMPTZ : contains date, time and timezone

careful considerations should be made when designing a table
and database and choosing a time data type.

may not need to use TIMESTAMPTZ in most situations

you can always remove historical information, but you can't add it
if you are using some time you cant just change it to another type later
or remove it then try to add it again
think long term when choosing

// functions and operations related to these specific data types
// useful when creating tables or letting tables automatically populate entries
TIMEZONE
NOW
TIMEOFDAY
CURRENT_TIME
CURRENT_DATE

SHOW ALL 
SHOW TIMEZONE       // location

SELECT NOW()         // current time stamp with GMT
SELECT TIMEOFDAY()   // Sat Aug 10 00:00:00....
SELECT CURRENT_TIME  // 00:00:00....
SELECT CURRENT_DATE  // 2024-08-10


*/



// Timestamps and Extract - Part 2 extracting time and date information, and formatting it
/*


extracting information from a time based data type:

// EXTRACT() a sub component of a date value
year, month, day, week, quarter
EXTRACT(YEAR FROM date_col)

SELECT EXTRACT(YEAR FROM payment_date) AS my_year FROM payment 





// AGE()
calculates and returns the current age of given a timestamp in the database
AGE(date_col)   // returns 13 years 1 mon 5 days 00:00...

SELECT AGE(payment_date) FROM payment 



// TO_CHAR() - useful for formatting date according to your application requirement
convert data types to text, useful for timestamp formatting
TO_CHAR(date_col, 'mm-dd-yyyy') col and the text formatting you want

https://www.postgresql.org/docs/current/functions-formatting.html
combine patterns with anything you want in between

SELECT TO_CHAR(payment_date, 'mon/yy') FROM payment // feb/07

This is a note in regards to the next lecture, we've gotten a 
lot of questions of why TO_CHAR "doesn't work" for one of the assessment 
questions. It actually does work, but you need to realize certain codes 
are "blank padded to 9 characters", which means instead of returning 
'Monday' it returns 'Monday   ' with extra spaces to fill up at least 
9 spaces.





// EX
during which months did payments occur
format your answer to return back the full month name

SELECT TO_CHAR(payment_date, 'MONTH') FROM payment
GROUP BY TO_CHAR(payment_date, 'MONTH')

or can use DISTINCT(TO_CHAR..) instead of GROUP


// EX
How many payments occurred on a monday

SELECT COUNT(TO_CHAR(payment_date, 'day')) FROM payment
WHERE TO_CHAR(payment_date, 'day') LIKE '%monday%'

or
SELECT COUNT(*) FROM payment
WHERE EXTRACT(dow FROM payment_date) = 1

where dow has sunday as 0, monday as 1




*/


// Mathematical functions and operators - perform maths on the returned
/*


https://www.postgresql.org/docs/9.5/functions-math.html

// calculate some percentage
SELECT ROUND(rental_rate/replacement_cost, 2)*100 
AS percent_cost
FROM film


*/


// String functions and operators - return a manipulated string
/*

https://www.postgresql.org/docs/9.1/functions-string.html


SELECT LENGTH(first_name) from customer

SELECT first_name || ' ' || last_name from customer     // returns 'John Smith'

SELECT upper(first_name || ' ' || last_name) from customer // returns 'JOHN SMITH'


// EX
SELECT LOWER(left(first_name,1)) || LOWER(last_name) || '@gmail.com'
AS custom_email
FROM customer








*/


// SubQuery - use a statement within a statement
/*

a sub query allows to construct complex queries,
performing a query on the results of another query

the syntax involves two SELECT statements

Standard Query
SELECT student,grade
FROM test_scores

// get the average grade, then compare the rest of the table against it.

SELECT student,grade FROM test_scores
WHERE grade > (SELECT AVG(grade) FROM test_scores)

the code within the parenthesis will run first

// when returning multiple values, use the WHERE IN
// very similar to a JOIN 
SELECT student,grade FROM test_scores
WHERE student IN (SELECT FROM honor_roll_table)

// EX
SELECT title,rental_rate
FROM film
WHERE rental_rate > (SELECT AVG(rental_rate) FROM film)


// EX
// get the film titles that have been returned within certain dates

SELECT film_id,title FROM film
WHERE film_id IN
(SELECT inventory.film_id FROM rental
INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date BETWEEN '2005-05-29' AND '2005-05-30')


*/


// SubQuery EXISTS - test for existence of rows in a sub query exclude/include
/*


used to test for existence of rows in a sub query
returns true/false depending on the condition

SELECT col FROM table
WHERE EXISTS(SELECT col FROM table WHERE condition)


// return the first,last names for
// customers who have not made any payment > 11
SELECT first_name,last_name
FROM customer AS c
WHERE NOT EXISTS
(SELECT* FROM payment as p 
WHERE p.customer_id = c.customer_id
AND amount > 11)





*/

// Self-join - adjacent data from the same table
/*

a query in which a table is joined to itself.
useful for comparing values in a column of rows within the same table

can be viewed as a join of two copies of the same table
no special keyword for a self join
it is simply a standard JOIN syntax with the same table in both parts.
it is an INNER JOIN

it is necessary to use an alias for the table

SELECT tableA.col, tableB.col
FROM table AS tableA
JOIN table AS tableB
tableA.some_col = tableB.other_col

// an example would be if we have a table of employees
where each employee has an emp_id and is sending a report (report_id) "of" the other employee emp_id

emp_id  name    report_id
1       andrew  2
2       bob     1

now we want to show the employee name with the recipient name

SELECT emp.name, report.name AS recipient
FROM employees AS emp
JOIN employees AS report
emp.emp_id = report.report_id


// EX
return each film title with each other film title that has the same length but not the same id

SELECT f1.title, f2.title, f1.length
FROM film as f1
JOIN film as f2 ON
f1.film_id != f2.film_id
AND f1.length = f2.length






*/

// Assessment Test #2
/*

// You want to print out a list of all the facilities and their cost to members
SELECT name, membercost FROM cd.facilities


// How can you produce a list of facilities that charge a fee to members

SELECT name, membercost FROM cd.facilities
WHERE membercost > 0

// How can you produce a list of facilities that charge a fee to members
and that fee is less than 1/50th of the monthly maintenance cost ?
Return the facid, facility name, member cost and monthly maintenance of the facilities in question

SELECT facid, name, membercost, monthlymaintenance FROM cd.facilities
AND membercost > 0
WHERE membercost < (monthlymaintenance/50)


// How can you produce a list of all facilities with the word 'Tennis' in their name?

SELECT * FROM cd.facilities
WHERE name like '%Tennis%'

// How can you retrieve the details of facilities with ID 1 and 5? Try to do it without using the OR operator.

SELECT * FROM cd.facilities WHERE facid IN (1,5);



// How can you produce a list of members who joined after 
// the start of September 2012? Return the memid, surname, firstname, 
// and joindate of the members in question.

SELECT * FROM cd.members
WHERE EXTRACT(MONTH FROM joindate) = 9
AND EXTRACT(YEAR FROM joindate) = 2012

// How can you produce an ordered list of the first 10 surnames 
// in the members table? The list must not contain duplicates.

SELECT DISTINCT(surname) FROM cd.members
ORDER BY surname
LIMIT 10


// You'd like to get the signup date of your last member. 
// How can you retrieve this information?

SELECT joindate FROM cd.members
ORDER BY joindate DESC
LIMIT 1

// Produce a count of the number of facilities that have a cost 
// to guests of 10 or more.

SELECT COUNT(*) FROM cd.facilities
WHERE guestcost >= 10


// EX
number of slots booked per facility
in the month september 2021
output table consisting of facility id and slots
sorted by the number of slots


bookings > slots, memid, bookid, facid
facilities > facid

SELECT f.facid, SUM(slots) FROM cd.bookings AS b  // output the facid, and number of slots
INNER JOIN cd.facilities AS f                       // intersection between the two tables
ON b.facid = f.facid
WHERE EXTRACT(MONTH from starttime) = 9             // date filter
GROUP BY f.facid                                    // group facilities
HAVING SUM(slots) >= 0                            // allow to view the sum of slots for each facility beside the facilities group
ORDER BY SUM(slots)


// EX (built on the prev EX)
Produce a list of facilities with more than 1000 slots booked. 
Produce an output table consisting of facility id and total slots, 
sorted by facility id.

SELECT f.facid, SUM(slots) FROM cd.bookings AS b
INNER JOIN cd.facilities AS f
ON b.facid = f.facid
GROUP BY f.facid
HAVING SUM(slots) > 1000
ORDER BY f.facid


// EX
How can you produce a list of the start times for bookings 
for tennis courts, for the date '2012-09-21'? 
Return a list of start time and facility name pairings, ordered by the time.


SELECT starttime, name FROM cd.bookings AS b
INNER JOIN cd.facilities AS f
ON b.facid = f.facid
WHERE TO_CHAR(starttime, 'yyyy-mm-dd') = '2012-09-21'
AND name LIKE 'Tennis Court _'
ORDER BY starttime


// How can you produce a list of the start times for bookings by members named 'David Farrell'?

SELECT starttime FROM cd.bookings AS b
INNER JOIN cd.members AS m
ON b.memid = m.memid
WHERE firstname ='David'
AND surname = 'Farrell'


// 6


*/

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/*

Situation:
Challenge:
Solution:





*/


////////////////////////////////////////////////////////////////////////////
/*





*/






















