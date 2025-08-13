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


/*
 * You are given two tables: Students and Grades. Students contains three columns ID, Name and Marks.
 * 
 * Ketty gives Eve a task to generate a report containing three columns: Name, Grade and Mark.
 * Ketty doesn't want the NAMES of those students who received a grade lower than 8. 
 * The report must be in descending order by grade -- i.e. higher grades are entered first. 
 * If there is more than one student with the same grade (8-10) assigned to them, order those 
 * particular students by their name alphabetically. Finally, if the grade is lower than 8, 
 * use "NULL" as their name and list them by their grades in descending order. 
 * If there is more than one student with the same grade (1-7) assigned to them, 
 * order those particular students by their marks in ascending order.
 * 
 * Sample Output

	Maria 10 99
	Jane 9 81
	Julia 9 88 
	Scarlet 8 78
	NULL 7 63
	NULL 7 68
 * 
 */
 
select 
case 
    when Grade < 8 then Null
    else Name
end as Name, Grade, Marks from Students as s
inner join 
Grades as g on s.Marks between g.min_Mark and g.max_mark
order by Grade desc, s.Name;

/*
 * Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! 
 * Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. 
 * Order your output in descending order by the total number of challenges in which the hacker earned a full score. 
 * If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.
 * 
 * 
 */


use  hakerrank;

create table Hacker(hacker_id integer(20), name varchar(20));
create table Difficulty(difficulty_level integer(20), score varchar(20));
create table Challenges (challenge_id integer(20), hacker_id integer(20), difficulty_level integer(20));
create table Submissions(submission_id integer(20), hacker_id integer(20), challenge_id integer(20), score integer);

select * from difficulty d ;

insert into Hacker values (5580, "Rose"),(8439, "Angela"),(27205, "Frank"), (52243, "Patrick"), (52348, "Lisa"), (57645, "Kimberly"),(77726, "Bonnie"), (83082, "Michael");

insert into difficulty  values (1,20),(2,30),(3,40),(4,60),(5,80),(6,100),(7,120);

insert into Challenges values (4810,77726, 4),(21089,27205, 1),(36566,5580, 7),(66730,52243, 6),(71055,52243, 2);

insert into Submissions values (68628,77726,36566,30),
								(65300,77726,21089,10),
								(40326,52243,36566,77),
								(8941,27205,4810,4),
								(83554,77726,66730,30),
								(43353,52243,66730,0),
								(55385,52348,71055,20),
								(55385,52348,71055,23),
								(94613,86870,71055,30),
								(45788,52348,36566,0),
								(93058,86870,36566,30),
								(7344,8439,66730,92),
								(2721,8439,4810,36),
								(523,5580,71055,4),
								(49105,52348,66730,0),
								(3924,8439,36566,80),
								(97397,90411,66730,100),
								(84162,83082,4810,40),
								(97431,90411,71055,30);		


-- select hacker_id, group_concat(name), count(challenge_id) as total_num_challenge from  (								
select * from Hacker as H 
 join 
Challenges as C on H.hacker_id = C.hacker_id 
 join 
Difficulty as D on C.difficulty_level = D.difficulty_level 
 join 
Submissions as S on C.hacker_id = S.hacker_id and C.challenge_id = S.challenge_id
-- ) as Contest;

-- group by con.hacker_id, con.challenge_id, con.difficulty_level 
-- order by total_num_challenge desc;							
								

select s.hacker_id, group_concat(h.name) as Name, group_concat(s.submission_id) as Submission_id, 
count(distinct s.challenge_id) as TotalNumerOfChallenge, group_concat(distinct d.difficulty_level) as Difficulty_level, 
group_concat(s.score) as Score, group_concat(d.score) as totalScore   from submissions s 

join 
challenges c on s.challenge_id = c.challenge_id
join
hacker h on c.hacker_id = h.hacker_id 
join 
difficulty d on c.difficulty_level = d.difficulty_level 
where s.score = d.score
group by s.hacker_id 
having count(distinct s.challenge_id) > 1
order by s.hacker_id;


--- final sql ---
SELECT
    s.hacker_id,
    MAX(h.name) AS name
FROM submissions s
JOIN challenges c
    ON s.challenge_id = c.challenge_id
JOIN difficulty d
    ON c.difficulty_level = d.difficulty_level
JOIN hackers h
    ON s.hacker_id = h.hacker_id
WHERE s.score = d.score
GROUP BY s.hacker_id
HAVING COUNT(DISTINCT s.challenge_id) > 1
ORDER BY COUNT(DISTINCT s.challenge_id) DESC, s.hacker_id ASC;



								
								
								
