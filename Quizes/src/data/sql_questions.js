export const SQL_Q = [
  // Basics
  {id:"sql1",diff:"easy",topic:"Basics",q:"Which SQL statement is used to extract data from a database?",opts:["GET","EXTRACT","SELECT","OPEN"],ans:2,exp:"The SELECT statement is used to query and extract data from a database."},
  {id:"sql2",diff:"easy",topic:"Basics",q:"Which clause is used to filter records in a SELECT query?",opts:["FILTER","WHERE","HAVING","MATCH"],ans:1,exp:"The WHERE clause is used to filter records before any groupings are applied."},
  {id:"sql3",diff:"easy",topic:"Basics",q:"How do you select all columns from a table named 'Employees'?",opts:["SELECT * FROM Employees;","SELECT Employees;","SELECT ALL FROM Employees;","EXTRACT * FROM Employees;"],ans:0,exp:"The asterisk (*) is a wildcard character that selects all columns in the specified table."},
  {id:"sql4",diff:"easy",topic:"Basics",q:"Which keyword is used to sort the result set?",opts:["SORT BY","ORDER BY","GROUP BY","ALIGN BY"],ans:1,exp:"The ORDER BY keyword is used to sort the result set in ascending (default) or descending order."},
  {id:"sql5",diff:"easy",topic:"Basics",q:"How do you select distinct values from a column named 'Country' in a table?",opts:["SELECT UNIQUE Country FROM table;","SELECT DISTINCT Country FROM table;","SELECT DIFFERENT Country FROM table;","SELECT Country FROM table GROUP BY UNIQUE;"],ans:1,exp:"The DISTINCT keyword is used after SELECT to return only different (distinct) values."},
  {id:"sql6",diff:"easy",topic:"Basics",q:"Which SQL statement is used to add new rows to a table?",opts:["ADD RECORD","INSERT INTO","UPDATE","CREATE ROW"],ans:1,exp:"The INSERT INTO statement is used to insert new records in a table."},
  {id:"sql7",diff:"easy",topic:"Basics",q:"How do you update the 'City' column to 'Delhi' for a user with UserID=5?",opts:["UPDATE Users SET City='Delhi' WHERE UserID=5;","MODIFY Users SET City='Delhi' WHERE UserID=5;","CHANGE Users City='Delhi' WHERE UserID=5;","SET City='Delhi' IN Users WHERE UserID=5;"],ans:0,exp:"The UPDATE statement modifies existing records. The SET clause specifies the column to change, and the WHERE clause identifies which record(s) to update."},
  {id:"sql8",diff:"easy",topic:"Basics",q:"Which SQL statement deletes records from a table?",opts:["REMOVE FROM","DROP","DELETE FROM","TRUNCATE"],ans:2,exp:"DELETE FROM removes one or more rows based on a WHERE condition. DROP removes the entire table structure."},
  {id:"sql9",diff:"easy",topic:"Aggregate Functions",q:"Which function returns the number of rows that match a specified criteria?",opts:["SUM()","TOTAL()","COUNT()","NUM()"],ans:2,exp:"The COUNT() function returns the number of rows returned by a query."},
  {id:"sql10",diff:"easy",topic:"Aggregate Functions",q:"How do you find the highest salary from an 'Employees' table?",opts:["SELECT TOP(Salary) FROM Employees;","SELECT MAX(Salary) FROM Employees;","SELECT HIGHEST(Salary) FROM Employees;","SELECT Salary FROM Employees ORDER BY Salary ASC LIMIT 1;"],ans:1,exp:"The MAX() function returns the maximum value of the selected column."},
  
  // Joins
  {id:"sql11",diff:"medium",topic:"Joins",q:"Which join returns all rows from both tables, with NULLs in places where there is no match?",opts:["INNER JOIN","LEFT JOIN","FULL OUTER JOIN","CROSS JOIN"],ans:2,exp:"FULL OUTER JOIN returns all records when there is a match in either left or right table. Unmatched rows contain NULL for the other table's columns."},
  {id:"sql12",diff:"medium",topic:"Joins",q:"What is the result of a CROSS JOIN between a table with 5 rows and a table with 10 rows?",opts:["10 rows","15 rows","50 rows","5 rows"],ans:2,exp:"A CROSS JOIN produces a Cartesian product, matching every row from the first table with every row from the second (5 * 10 = 50)."},
  {id:"sql13",diff:"medium",topic:"Joins",q:"Which join returns only the rows that have matching values in both tables?",opts:["INNER JOIN","LEFT JOIN","FULL JOIN","NATURAL JOIN"],ans:0,exp:"INNER JOIN returns records that have matching values in both tables based on the join condition."},
  {id:"sql14",diff:"medium",topic:"Joins",q:"A table is joined with itself. What is this called?",opts:["EQUI JOIN","SELF JOIN","INNER JOIN","RECURSIVE JOIN"],ans:1,exp:"A SELF JOIN is a regular join, but the table is joined with itself. Useful for hierarchical data like finding an employee's manager in the same table."},

  // Group By & Having
  {id:"sql15",diff:"medium",topic:"Grouping",q:"Which clause is used to filter the results of aggregated data?",opts:["WHERE","HAVING","FILTER","GROUP BY"],ans:1,exp:"The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions."},
  {id:"sql16",diff:"medium",topic:"Grouping",q:"Consider 'SELECT Department, SUM(Salary) FROM Employees GROUP BY Department'. What does this do?",opts:["Calculates the total salary of all employees","Calculates the total salary for each department individually","Returns the department with the highest salary","Groups employees by salary and sums the department IDs"],ans:1,exp:"GROUP BY arranges identical data into groups. SUM(Salary) calculates the sum for each specific group (Department)."},
  
  // Subqueries & CTEs
  {id:"sql17",diff:"medium",topic:"Subqueries",q:"What is a correlated subquery?",opts:["A subquery that runs independently of the outer query","A subquery that depends on values from the outer query and executes once for each row of the outer query","A subquery used only in the FROM clause","A subquery that returns a correlation matrix"],ans:1,exp:"A correlated subquery contains a reference to a table in the outer query, meaning it must be evaluated row-by-row."},
  {id:"sql18",diff:"medium",topic:"Subqueries",q:"What does CTE stand for in SQL?",opts:["Common Table Expression","Centralized Table Evaluation","Correlated Table Extension","Cascading Transaction Element"],ans:0,exp:"A Common Table Expression (CTE) provides a temporary result set defined within the execution scope of a single query (using the WITH clause)."},
  {id:"sql19",diff:"medium",topic:"Subqueries",q:"Which operator is used to check if a subquery returns ANY rows?",opts:["ANY","IN","EXISTS","ALL"],ans:2,exp:"The EXISTS operator returns TRUE if the subquery returns one or more records, and FALSE otherwise."},

  // Window Functions (Crucial for MNCs)
  {id:"sql20",diff:"hard",topic:"Window Functions",q:"What is the difference between RANK() and DENSE_RANK()?",opts:["RANK() skips numbers after ties; DENSE_RANK() does not skip numbers.","DENSE_RANK() skips numbers after ties; RANK() does not.","RANK() can only be used with numbers; DENSE_RANK() works with strings.","There is no difference; they are aliases."],ans:0,exp:"If two items tie for 1st, RANK() assigns them both 1, and the next item gets 3. DENSE_RANK() assigns the next item 2."},
  {id:"sql21",diff:"hard",topic:"Window Functions",q:"Which window function allows you to access data from the previous row in the same result set?",opts:["LEAD()","PREVIOUS()","LAG()","ROW_NUMBER()"],ans:2,exp:"LAG() provides access to a row at a given physical offset prior to that row. LEAD() accesses a subsequent row."},
  {id:"sql22",diff:"hard",topic:"Window Functions",q:"What does the OVER() clause do in a window function?",opts:["Terminates the query","Defines the window (set of rows) the function operates on, potentially including PARTITION BY and ORDER BY","Overrides existing data in the table","Filters out duplicate records"],ans:1,exp:"The OVER() clause dictates how rows are partitioned and ordered before the window function is applied."},
  {id:"sql23",diff:"hard",topic:"Window Functions",q:"How does ROW_NUMBER() handle ties?",opts:["It gives tied rows the same number and skips the next","It gives tied rows the same number without skipping","It assigns a unique sequential integer to every row regardless of ties","It throws an error on ties"],ans:2,exp:"ROW_NUMBER() always assigns a unique incrementing integer to each row in the partition, breaking ties arbitrarily based on internal processing order."},

  // Database Design & Architecture
  {id:"sql24",diff:"medium",topic:"Database Design",q:"What does ACID stand for in database transactions?",opts:["Atomicity, Consistency, Isolation, Durability","Availability, Concurrency, Integrity, Durability","Atomicity, Consistency, Integrity, Dependency","Asynchronous, Concurrent, Isolated, Distributed"],ans:0,exp:"ACID properties ensure reliable processing of database transactions."},
  {id:"sql25",diff:"medium",topic:"Database Design",q:"What is Normalization?",opts:["Adding redundant data to speed up reads","Organizing data to reduce redundancy and improve data integrity","Encrypting sensitive columns in a table","Converting all strings to lowercase"],ans:1,exp:"Normalization involves dividing large tables into smaller, related ones (1NF, 2NF, 3NF) to minimize data duplication and dependency issues."},
  {id:"sql26",diff:"medium",topic:"Database Design",q:"What defines the First Normal Form (1NF)?",opts:["All attributes must depend on the primary key","There are no transitive dependencies","Each column must contain atomic (indivisible) values and each record needs a unique identifier","Data is duplicated across tables for faster querying"],ans:2,exp:"1NF requires that a table has a primary key and that each field contains atomic (single) values, not arrays or lists."},
  {id:"sql27",diff:"medium",topic:"Database Design",q:"What is a Foreign Key?",opts:["A key used to encrypt the database","A field in one table that uniquely identifies a row in another table","A primary key made of multiple columns","A key generated randomly for security"],ans:1,exp:"A Foreign Key establishes a link between the data in two tables, ensuring referential integrity."},
  {id:"sql28",diff:"medium",topic:"Database Design",q:"What is the primary purpose of an Index?",opts:["To enforce data uniqueness","To speed up the retrieval of data from a table","To link two tables together","To automatically generate primary keys"],ans:1,exp:"Indexes improve read query performance by providing quick lookup paths, though they slow down INSERT/UPDATE/DELETE operations because the index must be updated."},
  {id:"sql29",diff:"hard",topic:"Database Design",q:"What is the difference between a Clustered and Non-Clustered Index?",opts:["Clustered index physically sorts the table data; Non-clustered creates a separate logical structure pointing to the data.","Clustered index is for strings; Non-clustered is for numbers.","Clustered indexes allow duplicates; Non-clustered do not.","A table can have multiple clustered indexes but only one non-clustered index."],ans:0,exp:"Because a clustered index determines the physical storage order of the rows, a table can only have one clustered index. It can have many non-clustered indexes."},

  // Advanced & Performance
  {id:"sql30",diff:"hard",topic:"Performance",q:"Which operation is generally faster and why: TRUNCATE or DELETE?",opts:["DELETE is faster because it removes rows one by one.","TRUNCATE is faster because it does not log individual row deletions in the transaction log.","They perform at the exact same speed.","DELETE is faster because it resets the identity column."],ans:1,exp:"TRUNCATE is a DDL operation that deallocates data pages without logging individual row deletes, making it much faster than the DML DELETE statement."},
  {id:"sql31",diff:"hard",topic:"Performance",q:"What does the EXPLAIN or EXPLAIN PLAN statement do?",opts:["Executes the query and explains the results in plain English","Shows the execution plan chosen by the query optimizer without running the query","Automatically optimizes the query to run faster","Explains the schema of a table"],ans:1,exp:"EXPLAIN shows how the database engine plans to execute the query (indexes used, join types, cost estimations), crucial for performance tuning."},
  {id:"sql32",diff:"hard",topic:"Transactions",q:"What problem occurs when a transaction reads uncommitted changes from another transaction?",opts:["Phantom Read","Non-repeatable Read","Dirty Read","Lost Update"],ans:2,exp:"A Dirty Read happens in the 'Read Uncommitted' isolation level when transaction A reads data written by transaction B before B commits. If B rolls back, A read invalid data."},

  // Scenario-Based Questions (Crucial for Top MNCs)
  {id:"sql33",diff:"scenario",topic:"Scenario",q:"SCENARIO: You have an 'Employees' table with 'Salary'. How do you find the 2nd highest salary?",opts:[
    "SELECT MAX(Salary) FROM Employees WHERE Salary < (SELECT MAX(Salary) FROM Employees);",
    "SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 2;",
    "SELECT 2ND(Salary) FROM Employees;",
    "SELECT Salary FROM Employees WHERE RANK() = 2;"
  ],ans:0,exp:"A classic interview question. The subquery finds the max salary, and the outer query finds the max salary that is strictly less than that maximum. Alternatively: SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 1;"},
  
  {id:"sql34",diff:"scenario",topic:"Scenario",q:"SCENARIO: An e-commerce app has an 'Orders' table. You need to find customers who placed more than 5 orders. Which query is correct?",opts:[
    "SELECT CustomerID FROM Orders WHERE COUNT(OrderID) > 5 GROUP BY CustomerID;",
    "SELECT CustomerID FROM Orders GROUP BY CustomerID HAVING COUNT(OrderID) > 5;",
    "SELECT CustomerID, COUNT(OrderID) > 5 FROM Orders;",
    "SELECT CustomerID FROM Orders GROUP BY CustomerID WHERE COUNT(OrderID) > 5;"
  ],ans:1,exp:"You must use GROUP BY to aggregate orders per customer, and HAVING to filter groups based on aggregate conditions. WHERE cannot filter aggregates."},
  
  {id:"sql35",diff:"scenario",topic:"Scenario",q:"SCENARIO: You have a table 'Logs' with columns 'Id' and 'Num'. Find all numbers that appear at least three times consecutively.",opts:[
    "SELECT DISTINCT l1.Num FROM Logs l1, Logs l2, Logs l3 WHERE l1.Id=l2.Id-1 AND l2.Id=l3.Id-1 AND l1.Num=l2.Num AND l2.Num=l3.Num;",
    "SELECT Num FROM Logs GROUP BY Num HAVING COUNT(*) >= 3;",
    "SELECT Num FROM Logs WHERE COUNT(Num) >= 3 AND CONSECUTIVE = TRUE;",
    "SELECT DISTINCT Num FROM Logs OVER (PARTITION BY Num ROWS 3 PRECEDING)"
  ],ans:0,exp:"Using a self-join (joining the table to itself 3 times based on sequential IDs and identical numbers) solves this. In modern SQL, LEAD/LAG window functions are also used to check the next two rows."},
  
  {id:"sql36",diff:"scenario",topic:"Scenario",q:"SCENARIO: You need to delete duplicate rows from a 'Users' table based on 'Email', keeping only the one with the lowest 'Id'. How?",opts:[
    "DELETE FROM Users WHERE Email IN (SELECT Email FROM Users GROUP BY Email HAVING COUNT(*) > 1);",
    "DELETE FROM Users u1 USING Users u2 WHERE u1.Email = u2.Email AND u1.Id > u2.Id;",
    "REMOVE DUPLICATES FROM Users ON Email;",
    "DELETE FROM Users WHERE Id = MIN(Id) GROUP BY Email;"
  ],ans:1,exp:"Using a self-join in the DELETE statement: if u1 and u2 have the same email, but u1 has a higher ID, delete u1. This leaves only the row with the lowest ID."},
  
  {id:"sql37",diff:"scenario",topic:"Scenario",q:"SCENARIO: In a 'Sales' table, you need to calculate the running total (cumulative sum) of revenue per month. Which feature is best?",opts:[
    "GROUP BY with SUM()",
    "A Correlated Subquery",
    "Window Function: SUM(Revenue) OVER (ORDER BY Month)",
    "CROSS APPLY"
  ],ans:2,exp:"Window functions are perfect for running totals. SUM(Revenue) OVER (ORDER BY Month) calculates the sum of all rows up to the current row's month."},
  
  {id:"sql38",diff:"scenario",topic:"Scenario",q:"SCENARIO: You are joining a large 'Users' table (10M rows) with a 'Transactions' table (50M rows). The query is timing out. What is the FIRST thing you should check?",opts:[
    "Increase the server RAM",
    "Switch from MySQL to PostgreSQL",
    "Check if there are indexes on the columns used in the JOIN condition",
    "Rewrite the query using subqueries instead of joins"
  ],ans:2,exp:"Missing indexes on join columns cause full table scans. Adding an index on the foreign key/join columns is the most critical first step for performance."},
  
  {id:"sql39",diff:"scenario",topic:"Scenario",q:"SCENARIO: You need to fetch top 3 highest paid employees IN EACH department. Which approach works best?",opts:[
    "GROUP BY Department, Salary ORDER BY Salary DESC LIMIT 3",
    "Use DENSE_RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) and wrap it in a subquery WHERE rank <= 3",
    "SELECT TOP 3 * FROM Employees GROUP BY Department",
    "Use HAVING MAX(Salary) <= 3"
  ],ans:1,exp:"Window functions like RANK() or DENSE_RANK() partitioned by the category (Department) and ordered by the value (Salary) are the standard way to solve 'Top N per category' problems."},
  
  {id:"sql40",diff:"scenario",topic:"Scenario",q:"SCENARIO: A banking app deducts $100 from Account A and adds $100 to Account B. If the database crashes right after deducting from A but before adding to B, money is lost. How do you prevent this?",opts:[
    "Wrap both UPDATE statements inside a BEGIN TRANSACTION and COMMIT block.",
    "Use a TRIGGER to automatically update Account B.",
    "Write a stored procedure with a delay.",
    "Use an index on the Balance column."
  ],ans:0,exp:"Transactions ensure Atomicity. Both operations succeed together (COMMIT), or if a failure occurs, neither succeeds (ROLLBACK), ensuring data consistency."},

  {id:"sql41",diff:"hard",topic:"Transactions",q:"What is the 'Phantom Read' anomaly?",opts:[
    "Reading data that hasn't been committed yet.",
    "A row is read twice in a transaction, and the values are different because another transaction updated it.",
    "A transaction reads a set of rows matching a condition. Another transaction inserts a new row matching that condition. If the first transaction repeats the read, a 'phantom' row appears.",
    "A transaction fails to read a row because the database cache was cleared."
  ],ans:2,exp:"Phantom reads occur when range locks aren't acquired. A new row is inserted by transaction B that matches the WHERE clause of transaction A's ongoing query."},

  {id:"sql42",diff:"hard",topic:"Joins",q:"Table A has rows [1,1,2]. Table B has rows [1,1,3]. What is the output size of 'SELECT * FROM A INNER JOIN B ON A.val = B.val'?",opts:[
    "2 rows",
    "3 rows",
    "4 rows",
    "5 rows"
  ],ans:2,exp:"The value '1' appears twice in A and twice in B. A Cartesian product occurs for matching values: 2 x 2 = 4 rows. The values 2 and 3 don't match, so they are excluded."},

  {id:"sql43",diff:"medium",topic:"Functions",q:"What is the difference between COALESCE() and IFNULL() (or ISNULL)?",opts:[
    "COALESCE only takes two arguments; IFNULL takes multiple.",
    "COALESCE returns the first non-null value from a list of arguments; IFNULL only checks two arguments.",
    "IFNULL is an ANSI SQL standard; COALESCE is specific to SQL Server.",
    "There is no difference."
  ],ans:1,exp:"COALESCE(val1, val2, val3...) is standard ANSI SQL and evaluates a list of expressions, returning the first one that isn't NULL. IFNULL/ISNULL is usually limited to two parameters and is dialect-specific."},

  {id:"sql44",diff:"medium",topic:"Set Operations",q:"What is the difference between UNION and UNION ALL?",opts:[
    "UNION ALL removes duplicates, UNION does not.",
    "UNION combines rows, UNION ALL combines columns.",
    "UNION removes duplicate rows and sorts the result set; UNION ALL keeps all duplicates and is much faster.",
    "UNION is used for tables, UNION ALL is used for views."
  ],ans:2,exp:"UNION performs a distinct sort to remove duplicates. If you know there are no duplicates or don't care, UNION ALL is significantly faster because it skips the deduplication step."},

  {id:"sql45",diff:"hard",topic:"Subqueries",q:"Can a subquery return multiple columns?",opts:[
    "No, subqueries can only return a single scalar value.",
    "Yes, but only in the SELECT clause.",
    "Yes, when used with operators like IN, EXISTS, or in the FROM clause (as a derived table).",
    "No, unless it is a correlated subquery."
  ],ans:2,exp:"A subquery can return multiple columns and rows. For example: SELECT * FROM T1 WHERE (col1, col2) IN (SELECT c1, c2 FROM T2). It can also act as a temporary table in the FROM clause."},

  {id:"sql46",diff:"scenario",topic:"Scenario",q:"SCENARIO: You have a table with 1 billion rows. You need to delete all records older than 5 years. Doing 'DELETE FROM table WHERE date < ...' locks the table and causes an outage. Best approach?",opts:[
    "Run the DELETE query but use the NOLOCK hint.",
    "Delete in small batches (e.g., 10,000 rows at a time) using a loop and a short delay between batches.",
    "Use TRUNCATE instead of DELETE.",
    "Disable all indexes, run the DELETE, then rebuild indexes."
  ],ans:1,exp:"Large deletes cause massive transaction log growth and table locks. Deleting in small batches keeps locks short, prevents log explosion, and allows concurrent traffic to proceed."},

  {id:"sql47",diff:"scenario",topic:"Scenario",q:"SCENARIO: An index exists on (LastName, FirstName). Which of these WHERE clauses will NOT effectively use the index?",opts:[
    "WHERE LastName = 'Smith'",
    "WHERE LastName = 'Smith' AND FirstName = 'John'",
    "WHERE FirstName = 'John'",
    "WHERE LastName LIKE 'Sm%'"
  ],ans:2,exp:"Composite indexes follow a left-to-right rule (prefix rule). You must use the leading column (LastName) to utilize the index. Searching ONLY by FirstName will result in a full table/index scan."},

  {id:"sql48",diff:"medium",topic:"Constraints",q:"What is the difference between Primary Key and Unique constraints?",opts:[
    "Primary Key allows one NULL value; Unique does not.",
    "Unique creates a clustered index automatically; Primary Key creates a non-clustered index.",
    "A table can have multiple Unique constraints but only one Primary Key constraint. Also, Primary Key cannot contain NULLs.",
    "They are functionally identical."
  ],ans:2,exp:"Primary Key = UNIQUE + NOT NULL, and there can only be one per table. You can have multiple UNIQUE constraints, and they generally allow NULL values (depending on the RDBMS)."},

  {id:"sql49",diff:"easy",topic:"Basics",q:"What is the purpose of the TRUNCATE command?",opts:[
    "To delete specific rows based on a condition",
    "To remove a table from the database completely",
    "To quickly remove all rows from a table without logging individual row deletions",
    "To round numeric values to a specific decimal place"
  ],ans:2,exp:"TRUNCATE is a DDL command that quickly empties a table by deallocating its data pages. It is faster than DELETE but cannot be used with a WHERE clause."},

  {id:"sql50",diff:"medium",topic:"Functions",q:"What does the NULLIF() function do?",opts:[
    "Returns NULL if the two arguments are equal; otherwise returns the first argument.",
    "Returns TRUE if the argument is NULL.",
    "Converts NULL to 0.",
    "Throws an error if the expression evaluates to NULL."
  ],ans:0,exp:"NULLIF(a, b) returns NULL if a = b. It is incredibly useful for preventing 'Divide by Zero' errors: SELECT total / NULLIF(count, 0)."},

  {id:"sql51",diff:"hard",topic:"Architecture",q:"What is a Materialized View?",opts:[
    "A view that updates instantly when base tables change without storing data.",
    "A virtual table that runs the underlying query every time it is queried.",
    "A view that stores the result set physically on disk, requiring periodic refreshing, greatly speeding up complex aggregations.",
    "A view used exclusively for row-level security."
  ],ans:2,exp:"Standard views are just saved queries. Materialized views actually compute and store the data physically. They provide massive read performance for heavy aggregations, at the cost of stale data until refreshed."},

  {id:"sql52",diff:"scenario",topic:"Scenario",q:"SCENARIO: Find the users who have NOT made any purchases. Tables: Users(Id, Name), Purchases(Id, UserId). Which approach is best for performance if Purchases table is massive?",opts:[
    "SELECT Name FROM Users WHERE Id NOT IN (SELECT UserId FROM Purchases);",
    "SELECT Name FROM Users u LEFT JOIN Purchases p ON u.Id = p.UserId WHERE p.Id IS NULL;",
    "SELECT Name FROM Users u WHERE NOT EXISTS (SELECT 1 FROM Purchases p WHERE p.UserId = u.Id);",
    "Both LEFT JOIN and NOT EXISTS are usually optimized well, but NOT EXISTS is often safer against NULL-related bugs in large datasets."
  ],ans:3,exp:"NOT IN can fail entirely or perform poorly if the subquery returns any NULL values. NOT EXISTS or an anti-join (LEFT JOIN + IS NULL) are the industry standard for this pattern."},

  {id:"sql53",diff:"scenario",topic:"Scenario",q:"SCENARIO: You want to update employee salaries by 10%, but only for the top 5 highest earners. How?",opts:[
    "UPDATE Employees SET Salary = Salary * 1.10 ORDER BY Salary DESC LIMIT 5;",
    "UPDATE Employees SET Salary = Salary * 1.10 WHERE Id IN (SELECT Id FROM Employees ORDER BY Salary DESC LIMIT 5);",
    "UPDATE TOP(5) Employees SET Salary = Salary * 1.10 ORDER BY Salary DESC;",
    "It requires a CTE combined with an UPDATE statement (in databases like SQL Server/Postgres)."
  ],ans:3,exp:"Directly updating with ORDER BY/LIMIT is not supported in all SQL dialects (like standard SQL/Postgres). The most robust way is using a CTE: WITH Top5 AS (SELECT Id FROM Employees ORDER BY Salary DESC LIMIT 5) UPDATE Employees SET Salary = Salary * 1.10 WHERE Id IN (SELECT Id FROM Top5)."},

  {id:"sql54",diff:"medium",topic:"Types",q:"VARCHAR vs CHAR: Which is better for storing ISO country codes (e.g., 'US', 'IN', 'GB')?",opts:[
    "VARCHAR, because it saves memory.",
    "CHAR, because the data length is completely static (2 characters), avoiding the length-prefix overhead of VARCHAR.",
    "TEXT, because it handles encodings better.",
    "It makes absolutely no difference."
  ],ans:1,exp:"CHAR(2) always allocates exactly 2 bytes. VARCHAR(2) would require 1 or 2 bytes for the data plus 1 byte to store the string length. For fixed-length strings, CHAR is more storage-efficient and faster."},

  {id:"sql55",diff:"scenario",topic:"Scenario",q:"SCENARIO: You have a log of user logins. How do you find the first login date for each user?",opts:[
    "SELECT UserId, MIN(LoginDate) FROM Logins GROUP BY UserId;",
    "SELECT UserId, LoginDate FROM Logins ORDER BY LoginDate ASC LIMIT 1;",
    "SELECT UserId, FIRST(LoginDate) FROM Logins GROUP BY UserId;",
    "SELECT UserId, LoginDate FROM Logins WHERE LoginDate = MIN(LoginDate);"
  ],ans:0,exp:"Grouping by UserId and taking the MIN(LoginDate) is the standard and most efficient way to find the earliest event per group."}
];
