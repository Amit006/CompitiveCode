select * from actor a ;

SELECT
    MAX(CASE WHEN Occupation = 'Doctor' THEN Name END) AS Doctor,
    MAX(CASE WHEN Occupation = 'Professor' THEN Name END) AS Professor,
    MAX(CASE WHEN Occupation = 'Singer' THEN Name END) AS Singer,
    MAX(CASE WHEN Occupation = 'Actor' THEN Name END) AS Actor
FROM (
    SELECT Name, Occupation,
           ROW_NUMBER() OVER (PARTITION BY Occupation ORDER BY Name) AS rn
    FROM OCCUPATIONS
) AS t
GROUP BY rn
ORDER BY rn;

create table OCCUPATIONS (Name varchar(20), Occupation varchar(20));

select * from OCCUPATIONS;

insert into  OCCUPATIONS values ("Samantha", "Doctor");
insert into  OCCUPATIONS values ("Julia", "Actor");
insert into  OCCUPATIONS values ("Maria", "Doctor");
insert into  OCCUPATIONS values ("Meera", "Singer");
insert into  OCCUPATIONS values ("Ashely", "Professor");
insert into  OCCUPATIONS values ("Ketty", "Professor");
insert into  OCCUPATIONS values ("Christeen", "Professor");
insert into  OCCUPATIONS values ("Jane", "Actor");
insert into  OCCUPATIONS values ("Jenny", "Doctor");
insert into  OCCUPATIONS values ("Priya", "Singer");




SELECT
    MAX(CASE WHEN Occupation = 'Doctor' THEN Name END) AS Doctor,
    MAX(CASE WHEN Occupation = 'Professor' THEN Name END) AS Professor,
    MAX(CASE WHEN Occupation = 'Singer' THEN Name END) AS Singer,
    MAX(CASE WHEN Occupation = 'Actor' THEN Name END) AS Actor
FROM (
    SELECT Name, Occupation,
           ROW_NUMBER() OVER (PARTITION BY Occupation ORDER BY Name) AS rn
    FROM OCCUPATIONS
) AS t
GROUP BY rn
ORDER BY rn;






 select GROUP_CONCAT(distinct oc.Name) as Names, GROUP_CONCAT(distinct oc.Occupation) as Occupation , rn
 from 
 (SELECT Name, Occupation,
           ROW_NUMBER() OVER (PARTITION BY Occupation ORDER BY Name) AS rn
    FROM OCCUPATIONS) 
 as oc group by oc.rn;

SELECT 
    GROUP_CONCAT(DISTINCT oc.Name) AS Names, 
    GROUP_CONCAT(DISTINCT oc.Occupation) AS Occupation  
FROM (
    SELECT Name, Occupation,
           ROW_NUMBER() OVER (PARTITION BY Occupation ORDER BY Name) AS rn
    FROM OCCUPATIONS
) AS oc  
GROUP BY oc.rn;


/* 

You are given a table, BST, containing two columns: N and P, where N represents the value of a node in Binary Tree,
and P is the parent of N.
  
 */

create table BST (N Integer(20), P Integer(20) );

INSERT INTO BST (N, P)
values 
    (1,2),
    (3,2),
    (6,8),
    (9,8),
    (2,5),
    (8,5),
    (5,null);



select N,		
		case  
			  when P is null then 'Root'
			  when N not in (select distinct P from BST where P is not null )
			  then  "Leaf"
			  else "Inner"
		end as NodeTypealter 
	from BST order by N;
			  


  /*  
   * 
   * Amber's conglomerate corporation just acquired some new companies. Each of the companies follows this hierarchy:
   * 
   * Given the table schemas below, write a query to print the company_code, founder name, total number of lead managers, total number of senior managers, total number of managers, and total number of employees. Order your output by ascending company_code.

	Note:
	
	The tables may contain duplicate records.
	The company_code is string, so the sorting should not be numeric. For example, if the company_codes are C_1, C_2, and C_10, then the ascending company_codes will be C_1, C_10, and C_2.
   
   * 
   *  */
create database HakerRank;
use HakerRank;

create table Compnay(company_code varchar(20), founder varchar(20));
create table Lead_Manager(lead_manager_code varchar(20) ,company_code varchar(20));
create table Senior_Manager(senior_manager_code varchar(20), lead_manager_code varchar(20) ,company_code varchar(20));
create table Manager(manager_code varchar(20), senior_manager_code varchar(20), lead_manager_code varchar(20) ,company_code varchar(20));
create table Employee(employee_code varchar(20), manager_code varchar(20), senior_manager_code varchar(20), lead_manager_code varchar(20) ,company_code varchar(20));

ALTER TABLE Compnay RENAME TO Company;
insert into Company values ("C1", "Monika"), ("C2", "Samantha");
insert into Lead_Manager values ("LM1","C1"), ("LM2", "C2");
insert into Senior_Manager values ("SM1","LM1","C1"), ("SM2","LM1","C1"), ("SM3","LM2", "C2");
insert into Manager values ("M1","SM1","LM1","C1"), ("M2","SM3","LM2","C2"), ("M3", "SM3","LM2", "C2");
insert into Employee values ("E1", "M1","SM1","LM1","C1"), ("E2","M1","SM1","LM1","C1"), ("E3","M2", "SM3","LM2", "C2"), ("E4","M3", "SM3","LM2", "C2");


select  

cp.company_code, 
group_concat(distinct cp.founder)

-- count(distinct lm.lead_manager_code) as lead_manager_code, 
-- count(distinct sm.senior_manager_code) as senior_manager_code, 
-- count(distinct m.manager_code) as manager_code,  
-- count( distinct E.employee_code) as employee_code   

from Company as cp
inner join 
Lead_Manager as lm on cp.company_code = lm.company_code
inner join 
Senior_Manager as sm on cp.company_code = sm.company_code and lm.lead_manager_code = sm.lead_manager_code
inner Join 
Manager as m  on cp.company_code = m.company_code and lm.lead_manager_code = m.lead_manager_code and sm.senior_manager_code = m.senior_manager_code
inner join 
Employee as E on cp.company_code = E.company_code and lm.lead_manager_code = E.lead_manager_code and sm.senior_manager_code = E.senior_manager_code and 
m.manager_code = E.manager_code
group by cp.company_code;


select 
cp.company_code, 
group_concat(distinct cp.founder) ,
count( distinct lm.lead_manager_code) as Lead_manager_code,
count( distinct sm.senior_manager_code) as Senior_manager_code,
count( distinct m.manager_code) as Manager_code,
count( distinct E.employee_code) as Employee_code   
from  Company as cp
 join 
Lead_Manager as lm on cp.company_code = lm.company_code
 join 
Senior_Manager as sm on cp.company_code = sm.company_code 
 Join 
Manager as m  on cp.company_code = m.company_code 
 join 
Employee as E on cp.company_code = E.company_code 
group by cp.company_code;

select * from Lead_Manager;
select * from Senior_Manager;
select * from Manager;

-- AlterNative Solution 
SELECT 
    cp.company_code,
    GROUP_CONCAT(DISTINCT cp.founder) AS founders,
    COALESCE(lm.lead_manager_count, 0) AS Lead_manager_code,
    COALESCE(sm.senior_manager_count, 0) AS Senior_manager_code,
    COALESCE(m.manager_count, 0) AS Manager_code,
    COALESCE(e.employee_count, 0) AS Employee_code
FROM Company cp
LEFT JOIN (
    SELECT company_code, COUNT(DISTINCT lead_manager_code) AS lead_manager_count
    FROM Lead_Manager
    GROUP BY company_code
) lm ON cp.company_code = lm.company_code
LEFT JOIN (
    SELECT company_code, COUNT(DISTINCT senior_manager_code) AS senior_manager_count
    FROM Senior_Manager
    GROUP BY company_code
) sm ON cp.company_code = sm.company_code
LEFT JOIN (
    SELECT company_code, COUNT(DISTINCT manager_code) AS manager_count
    FROM Manager
    GROUP BY company_code
) m ON cp.company_code = m.company_code
LEFT JOIN (
    SELECT company_code, COUNT(DISTINCT employee_code) AS employee_count
    FROM Employee
    GROUP BY company_code
) e ON cp.company_code = e.company_code
GROUP BY cp.company_code;


/* 
 * Samantha was tasked with calculating the average monthly salaries for all employees in the EMPLOYEES table, but did not realize her keyboard's  key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeros removed), and the actual average salary.

Write a query calculating the amount of error (i.e.:  average monthly salaries), and round it up to the next integer.
 * 
 */

create table EMPLOYEES ( ID Integer(20), Name varchar(20), Salary Integer(20));
insert into EMPLOYEES values (1,"Kristeen", 1420), (2, "Ashley", 2006), (3,"Julia", 2210), (4,"Maria", 3000);


SELECT REPLACE(Salary, '0', '') FROM EMPLOYEES;

SELECT CEIL((AVG(Salary))-(AVG(REPLACE(Salary,'0','')))) FROM EMPLOYEES;



/* 
 * Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than . Round your answer to  decimal places.
 * 
 * 
 */
select ROUND(LONG_W, 4) from STATION where LAT_N = (
    SELECT MAX(LAT_N)
    FROM STATION
    WHERE LAT_N < 137.2345
);




/*

A median is defined as a number separating the higher half of a data set from the lower half. 
Query the median of the Northern Latitudes (LAT_N) 
from STATION and round your answer to  decimal places.

*/


SELECT ROUND(AVG(t.LAT_N),4) AS MedianValue
FROM (
    SELECT LAT_N,
           ROW_NUMBER() OVER (ORDER BY LAT_N) AS row_num,
           COUNT(*) OVER () AS total_count
    FROM STATION
) AS t
WHERE t.row_num IN (FLOOR((t.total_count + 1) / 2), FLOOR((t.total_count + 2) / 2));