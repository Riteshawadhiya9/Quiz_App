export const dbmsScenario = [
  {
    question: "Scenario: An e-commerce platform processes thousands of orders per minute. During peak sales, customers sometimes see 'Item Available' but at checkout, the item is out of stock. Which database phenomenon is causing this?",
    options: [
      "A) Phantom Read",
      "B) Deadlock",
      "C) Lost Update / Race Condition",
      "D) Dirty Read"
    ],
    answer: "C) Lost Update / Race Condition",
    explanation: "This is a classic race condition (or lost update/write skew). Multiple users read the stock as available concurrently. One buys it, decrementing stock. The other user's transaction, based on stale data, tries to checkout but fails or causes negative stock. Solution: Use SELECT ... FOR UPDATE or optimistic locking."
  },
  {
    question: "Scenario: A banking app requires transferring funds from Account A to Account B. If the database server crashes exactly after deducting from A but before adding to B, what DBMS property ensures the deduction is reversed upon restart?",
    options: [
      "A) Isolation",
      "B) Consistency",
      "C) Atomicity",
      "D) Durability"
    ],
    answer: "C) Atomicity",
    explanation: "Atomicity guarantees that a transaction is 'all or nothing'. If it fails mid-way (crash), the recovery manager uses logs (undo phase) to reverse the partial changes."
  },
  {
    question: "Scenario: You are designing a database for a hospital. A 'Patient' can have many 'Appointments'. An 'Appointment' involves one 'Doctor' and one 'Patient'. To optimize finding all appointments for a specific doctor on a specific date, what is the best index?",
    options: [
      "A) Index on (PatientID)",
      "B) Index on (DoctorID, AppointmentDate)",
      "C) Index on (AppointmentDate)",
      "D) Index on (AppointmentID, DoctorID)"
    ],
    answer: "B) Index on (DoctorID, AppointmentDate)",
    explanation: "Queries will filter by DoctorID and AppointmentDate together (`WHERE DoctorID = X AND AppointmentDate = Y`). A composite index on these two fields will allow the DBMS to jump directly to the relevant records."
  },
  {
    question: "Scenario: A data warehouse runs a nightly batch job that deletes 50 million old records from a massive logging table. The job takes 6 hours, blocking other operations. How can you optimize this schema for faster deletion?",
    options: [
      "A) Add more indexes to the logging table.",
      "B) Use table partitioning by Date.",
      "C) Increase the size of the redo log buffer.",
      "D) Change isolation level to READ UNCOMMITTED."
    ],
    answer: "B) Use table partitioning by Date.",
    explanation: "By partitioning the table by date, deleting old records becomes a DDL operation (`DROP PARTITION`), which is instantaneous and requires minimal logging, compared to a DML `DELETE` which logs every row."
  },
  {
    question: "Scenario: A social media app has a 'Users' table and a 'Friends' table. You need to write a query to suggest friends to User A by finding 'friends of friends' who are not already friends with User A. Which SQL feature is essential here?",
    options: [
      "A) FULL OUTER JOIN",
      "B) Self Join and Anti-Join logic (NOT IN / EXCEPT)",
      "C) GROUP BY and HAVING",
      "D) Window Functions"
    ],
    answer: "B) Self Join and Anti-Join logic (NOT IN / EXCEPT)",
    explanation: "You need to join the Friends table to itself to find 'friends of friends'. Then, you must filter out users who are already in User A's direct friend list, which requires an anti-join pattern (like NOT IN or a LEFT JOIN with IS NULL)."
  },
  {
    question: "Scenario: Your startup's SQL database is experiencing slow reads due to heavy reporting queries locking tables used by the OLTP (online transaction processing) app. You cannot afford an enterprise data warehouse yet. What is a quick architectural fix?",
    options: [
      "A) Convert all tables to BCNF.",
      "B) Setup a Read Replica and route reporting queries there.",
      "C) Switch the database to NoSQL.",
      "D) Disable all foreign key constraints."
    ],
    answer: "B) Setup a Read Replica and route reporting queries there.",
    explanation: "A read replica asynchronously copies data from the primary database. Routing heavy, read-only reporting queries to the replica removes the locking and resource contention from the primary OLTP database."
  },
  {
    question: "Scenario: A developer accidentally runs `UPDATE Employees SET Salary = 0;` (forgot the WHERE clause) and commits. The database has nightly full backups and continuous WAL (Write-Ahead Logging) archiving. How do you recover?",
    options: [
      "A) Restore the full backup; changes since last night are permanently lost.",
      "B) Use Point-in-Time Recovery (PITR) by restoring the backup and applying WAL logs up to the moment right before the mistake.",
      "C) Run a ROLLBACK command immediately.",
      "D) Write an inverse SQL script `UPDATE Employees SET Salary = Previous_Salary;`"
    ],
    answer: "B) Use Point-in-Time Recovery (PITR) by restoring the backup and applying WAL logs up to the moment right before the mistake.",
    explanation: "Because WAL archiving is enabled, PITR is possible. You restore the last full backup and replay the transaction logs, stopping exactly before the timestamp/LSN of the erroneous transaction."
  },
  {
    question: "Scenario: You have a 'Products' table with a JSON column 'Attributes' storing dynamic key-value pairs (e.g., {'color': 'red', 'size': 'M'}). You frequently query for products based on 'color'. Performance is terrible. What should you do in PostgreSQL/MySQL?",
    options: [
      "A) It is impossible to index JSON, so migrate to a NoSQL database.",
      "B) Extract 'color' into a standard relational column.",
      "C) Create an index specifically on the JSON attribute (e.g., a GIN index in Postgres or generated column index in MySQL).",
      "D) Use a FULLTEXT index on the JSON column."
    ],
    answer: "C) Create an index specifically on the JSON attribute (e.g., a GIN index in Postgres or generated column index in MySQL).",
    explanation: "Modern relational databases support indexing JSON documents. In Postgres, a GIN index on the jsonb column, or an index on an expression `(Attributes->>'color')` perfectly solves this without schema changes."
  },
  {
    question: "Scenario: A multinational company stores dates in a database without timezones. An employee in Tokyo inserts an event at '10:00 AM'. An employee in New York queries it and sees '10:00 AM', missing the meeting. What is the correct database design?",
    options: [
      "A) Store times as strings with the timezone appended.",
      "B) Store all datetime values in UTC, and handle timezone conversion in the application layer.",
      "C) Create separate columns for Local Time and Target Time.",
      "D) Use the DATE data type instead of DATETIME."
    ],
    answer: "B) Store all datetime values in UTC, and handle timezone conversion in the application layer.",
    explanation: "The golden rule of datetime storage is to normalize all timestamps to UTC at the database level (using types like TIMESTAMP WITH TIME ZONE in Postgres, or standardizing on UTC in MySQL). The client app handles local offsets."
  },
  {
    question: "Scenario: An HR system needs to calculate the running total of salaries paid to employees, ordered by hire date. Which SQL feature perfectly fits this requirement?",
    options: [
      "A) Subqueries in the WHERE clause.",
      "B) GROUP BY with SUM().",
      "C) Window function: SUM(Salary) OVER (ORDER BY HireDate).",
      "D) Self-joins."
    ],
    answer: "C) Window function: SUM(Salary) OVER (ORDER BY HireDate).",
    explanation: "Window functions perform calculations across a set of table rows related to the current row. Using SUM() OVER (ORDER BY...) computes a cumulative/running total seamlessly."
  },
  {
    question: "Scenario: Two batch processes run nightly. Process A updates Table1 then Table2. Process B updates Table2 then Table1. Occasionally, both jobs freeze indefinitely. Why?",
    options: [
      "A) Disk space is full.",
      "B) They are caught in a Deadlock.",
      "C) Index fragmentation.",
      "D) Network timeout."
    ],
    answer: "B) They are caught in a Deadlock.",
    explanation: "Because they acquire exclusive locks in opposite orders (A: T1 then T2; B: T2 then T1), they can deadlock if A locks T1, B locks T2, and then both wait for the other's lock forever. Solution: Ensure all processes acquire locks in the same order."
  },
  {
    question: "Scenario: A legacy database has a table with 100 columns. Most queries only need 3 specific columns, but the queries are slow due to high disk I/O. Without altering queries or the table structure, how can you improve read performance for these 3 columns?",
    options: [
      "A) Create a covering index that includes those 3 columns.",
      "B) Increase the CPU of the database server.",
      "C) Add a CHECK constraint.",
      "D) Change the primary key."
    ],
    answer: "A) Create a covering index that includes those 3 columns.",
    explanation: "A covering index contains all the columns needed by the query. The DBMS can fulfill the query entirely from the index (which is smaller and sits in memory) without having to fetch the massive data pages from disk."
  },
  {
    question: "Scenario: You are designing a 'Like' counter for a video streaming platform. A viral video gets 10,000 likes per second. An `UPDATE Videos SET likes = likes + 1` causes massive row contention and timeouts. Best architectural solution?",
    options: [
      "A) Use SERIALIZABLE isolation level.",
      "B) Insert likes as individual rows in a separate table, and calculate the sum asynchronously or periodically.",
      "C) Upgrade the SSDs to NVMe.",
      "D) Use a trigger to update the count."
    ],
    answer: "B) Insert likes as individual rows in a separate table, and calculate the sum asynchronously or periodically.",
    explanation: "High-frequency updates to a single row cause lock contention. Writing inserts (appends) is lock-free and highly concurrent. The aggregate can be calculated via materialized views or Redis/cache counters."
  },
  {
    question: "Scenario: An audit requirement mandates that every single change (insert/update/delete) to the 'Financials' table must be permanently recorded with the old value, new value, user, and timestamp. Best implementation?",
    options: [
      "A) Handle the logging in the frontend application code.",
      "B) Use Database Triggers to write to an Audit_Log table on every DML operation.",
      "C) Grant READ ONLY access to users.",
      "D) Use daily database backups."
    ],
    answer: "B) Use Database Triggers to write to an Audit_Log table on every DML operation.",
    explanation: "Triggers execute reliably at the database engine level, ensuring that no matter how the database is accessed (app, direct SQL script, third-party tool), the audit log is immutably generated."
  },
  {
    question: "Scenario: You execute `SELECT * FROM Orders WHERE CustomerID = 100`. The DBMS engine parses it, optimizes it, and executes it. To prevent the overhead of parsing and optimizing this same query structure 1000 times a day, you should use:",
    options: [
      "A) Dynamic SQL",
      "B) A View",
      "C) Prepared Statements (Parameterized Queries)",
      "D) A CTE (Common Table Expression)"
    ],
    answer: "C) Prepared Statements (Parameterized Queries)",
    explanation: "Prepared statements (`SELECT * FROM Orders WHERE CustomerID = ?`) allow the DBMS to compile, optimize, and cache the execution plan once. Subsequent executions just pass new parameters, saving CPU and preventing SQL injection."
  }
];
