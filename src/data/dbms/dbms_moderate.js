export const dbmsModerate = [
  {
    question: "Consider a table 'Employees' with a self-referencing foreign key 'ManagerID' referring to 'EmpID'. Which SQL query correctly finds the names of employees who earn more than their managers?",
    options: [
      "A) SELECT e1.Name FROM Employees e1 INNER JOIN Employees e2 ON e1.ManagerID = e2.EmpID WHERE e1.Salary > e2.Salary",
      "B) SELECT e1.Name FROM Employees e1 INNER JOIN Employees e2 ON e1.EmpID = e2.ManagerID WHERE e1.Salary > e2.Salary",
      "C) SELECT Name FROM Employees WHERE Salary > (SELECT MAX(Salary) FROM Employees)",
      "D) SELECT e1.Name FROM Employees e1 LEFT JOIN Employees e2 ON e1.EmpID = e2.ManagerID WHERE e2.Salary > e1.Salary"
    ],
    answer: "A) SELECT e1.Name FROM Employees e1 INNER JOIN Employees e2 ON e1.ManagerID = e2.EmpID WHERE e1.Salary > e2.Salary",
    explanation: "A self-join is needed. 'e1' acts as the employee table and 'e2' as the manager table. The join condition is e1.ManagerID = e2.EmpID. Then we compare e1.Salary (employee) to e2.Salary (manager)."
  },
  {
    question: "A relation R(A, B, C, D) has functional dependencies {A -> B, B -> C, C -> D}. What is the highest normal form of R?",
    options: [
      "A) 1NF",
      "B) 2NF",
      "C) 3NF",
      "D) BCNF"
    ],
    answer: "B) 2NF",
    explanation: "The candidate key is A. The dependencies B->C and C->D are transitive dependencies (since B and C are non-prime attributes). Because there are no partial dependencies (the key A is a single attribute), it is in 2NF, but fails 3NF due to transitive dependencies."
  },
  {
    question: "What happens during a cascade delete?",
    options: [
      "A) Deleting a record in the parent table automatically sets foreign keys in the child table to NULL.",
      "B) Deleting a record in the child table automatically deletes the parent record.",
      "C) Deleting a record in the parent table automatically deletes matching records in the child table.",
      "D) It prevents a record in the parent table from being deleted if child records exist."
    ],
    answer: "C) Deleting a record in the parent table automatically deletes matching records in the child table.",
    explanation: "ON DELETE CASCADE is a referential integrity constraint option that ensures when a primary key record is deleted, all corresponding foreign key records in child tables are also deleted."
  },
  {
    question: "Which of the following schedules is conflict serializable? \nS1: r1(x), w2(x), r1(y), w2(y) \nS2: r1(x), r2(x), w1(x), w2(x)",
    options: [
      "A) Only S1",
      "B) Only S2",
      "C) Both S1 and S2",
      "D) Neither S1 nor S2"
    ],
    answer: "A) Only S1",
    explanation: "In S1, T1 reads x and y before T2 writes x and y. The precedence graph has an edge T1->T2, with no cycles, so S1 is conflict serializable. In S2, T1 reads x then T2 reads x. Then T1 writes x (T2->T1 edge) and T2 writes x (T1->T2 edge). The cycle means S2 is not conflict serializable."
  },
  {
    question: "Assertion (A): Dense index requires less storage space than a sparse index. \nReason (R): Sparse index creates an index entry only for some data records, typically for each block.",
    options: [
      "A) Both A and R are true and R is the correct explanation of A",
      "B) Both A and R are true but R is not the correct explanation of A",
      "C) A is true but R is false",
      "D) A is false but R is true"
    ],
    answer: "D) A is false but R is true",
    explanation: "A dense index creates an index entry for EVERY search key value, requiring MORE space than a sparse index (which only has entries for some keys, like the first record of a block). Thus, A is false and R is true."
  },
  {
    question: "Consider a table 'Sales' with columns (Year, Product, Revenue). You want to calculate the total revenue per year and per product, plus a grand total. Which SQL extension is most appropriate?",
    options: [
      "A) GROUP BY Year, Product",
      "B) GROUP BY ROLLUP (Year, Product)",
      "C) GROUP BY CUBE (Year, Product)",
      "D) GROUP BY HAVING Year, Product"
    ],
    answer: "B) GROUP BY ROLLUP (Year, Product)",
    explanation: "ROLLUP creates subtotals for each level and a grand total. CUBE creates subtotals for all possible combinations. ROLLUP is standard for hierarchical aggregations (Year -> Product -> Grand Total)."
  },
  {
    question: "If a database recovery system uses Write-Ahead Logging (WAL), which of the following rules must be enforced?",
    options: [
      "A) Data blocks must be written to disk before log records.",
      "B) Log records representing changes must be written to stable storage before the changed data blocks are written to disk.",
      "C) All transactions must be committed before they are written to the log.",
      "D) The database must be locked exclusively during log flushes."
    ],
    answer: "B) Log records representing changes must be written to stable storage before the changed data blocks are written to disk.",
    explanation: "WAL protocol mandates that the log record containing the undo/redo information must be persisted to disk before the corresponding modified data page is flushed to disk, ensuring atomicity and durability."
  },
  {
    question: "What is the result of the following SQL query if column A contains [1, 2, NULL, 4]? \nSELECT SUM(A) + COUNT(A) FROM Table;",
    options: [
      "A) 11",
      "B) 10",
      "C) NULL",
      "D) 7"
    ],
    answer: "B) 10",
    explanation: "SUM(A) ignores NULL and equals 1 + 2 + 4 = 7. COUNT(A) ignores NULL and counts non-null values, which is 3. 7 + 3 = 10."
  },
  {
    question: "Which of the following relational algebra expressions is equivalent to a Natural Join (R ⋈ S)?",
    options: [
      "A) π(R × S)",
      "B) σ(R × S)",
      "C) π(σ(R × S))",
      "D) ρ(R × S)"
    ],
    answer: "C) π(σ(R × S))",
    explanation: "A natural join is equivalent to taking the Cartesian product (R × S), selecting the rows where common attributes are equal (σ), and then projecting the columns to remove duplicate common attributes (π)."
  },
  {
    question: "In the context of the isolation levels defined by SQL standard, which isolation level prevents the 'Phantom Read' anomaly?",
    options: [
      "A) READ UNCOMMITTED",
      "B) READ COMMITTED",
      "C) REPEATABLE READ",
      "D) SERIALIZABLE"
    ],
    answer: "D) SERIALIZABLE",
    explanation: "Phantom reads occur when a transaction reads a set of rows, and another transaction inserts or deletes rows in that range before the first finishes. Only the SERIALIZABLE isolation level strictly prevents phantom reads."
  },
  {
    question: "Consider relations R(A,B) and S(B,C). Which query will find tuples in R that do not have a matching tuple in S?",
    options: [
      "A) SELECT * FROM R WHERE B IN (SELECT B FROM S)",
      "B) SELECT * FROM R LEFT JOIN S ON R.B = S.B WHERE S.B IS NULL",
      "C) SELECT * FROM R RIGHT JOIN S ON R.B = S.B WHERE R.B IS NULL",
      "D) SELECT * FROM R INTERSECT SELECT * FROM S"
    ],
    answer: "B) SELECT * FROM R LEFT JOIN S ON R.B = S.B WHERE S.B IS NULL",
    explanation: "An anti-join is performed using a LEFT JOIN and filtering for rows where the right side (S.B) is NULL, which returns all rows in R without a match in S."
  },
  {
    question: "Which of the following sets of dependencies represents a lossy decomposition of R(A, B, C) into R1(A, B) and R2(B, C)?",
    options: [
      "A) A -> B",
      "B) B -> C",
      "C) C -> A",
      "D) B -> A"
    ],
    answer: "C) C -> A",
    explanation: "For a decomposition to be lossless, the common attribute (B) must be a candidate key for at least one of the decomposed relations (i.e., B -> A or B -> C). If C -> A, B is not a key for either, making the join lossy."
  },
  {
    question: "What is a deadlock in a database system?",
    options: [
      "A) A state where a transaction runs infinitely due to an infinite loop.",
      "B) A state where two or more transactions are waiting indefinitely for locks held by each other.",
      "C) A condition where the database crashes and data is unrecoverable.",
      "D) A situation where a transaction reads stale data."
    ],
    answer: "B) A state where two or more transactions are waiting indefinitely for locks held by each other.",
    explanation: "Deadlock is a circular dependency condition where transaction T1 holds lock A and waits for lock B, while T2 holds lock B and waits for lock A. Neither can proceed."
  },
  {
    question: "In SQL, what is a correlated subquery?",
    options: [
      "A) A subquery that executes completely before the outer query.",
      "B) A subquery that is evaluated once for each row processed by the outer query.",
      "C) A subquery that returns a single value.",
      "D) A subquery that uses the UNION operator."
    ],
    answer: "B) A subquery that is evaluated once for each row processed by the outer query.",
    explanation: "A correlated subquery references columns from the outer query. It cannot be evaluated independently and is executed repeatedly, once for every row selected by the outer query."
  },
  {
    question: "Which of the following is true regarding a Clustered Index?",
    options: [
      "A) A table can have multiple clustered indexes.",
      "B) It determines the physical sorting order of the data rows in the table.",
      "C) It only contains pointers to the data rows.",
      "D) It is slower for range queries compared to a non-clustered index."
    ],
    answer: "B) It determines the physical sorting order of the data rows in the table.",
    explanation: "A clustered index alters the physical storage order of the data in the table, meaning a table can have only one clustered index. This makes range queries very fast."
  },
  {
    question: "What is the primary purpose of the two-phase commit (2PC) protocol in distributed databases?",
    options: [
      "A) To ensure serializability of transactions.",
      "B) To ensure atomicity of distributed transactions across multiple nodes.",
      "C) To optimize the speed of write operations.",
      "D) To manage concurrent read operations without locks."
    ],
    answer: "B) To ensure atomicity of distributed transactions across multiple nodes.",
    explanation: "2PC ensures that a distributed transaction is committed on all participating sites, or rolled back on all sites, maintaining the Atomicity of the overall transaction."
  },
  {
    question: "What is the 'dirty read' problem?",
    options: [
      "A) Transaction T1 reads data that was modified by T2, which subsequently rolled back.",
      "B) Transaction T1 reads the same row twice and gets different values because T2 updated it in between.",
      "C) Transaction T1 inserts a new row that T2 failed to read.",
      "D) A transaction reads data from a corrupted database file."
    ],
    answer: "A) Transaction T1 reads data that was modified by T2, which subsequently rolled back.",
    explanation: "A dirty read occurs when a transaction reads uncommitted changes from another transaction. If the other transaction rolls back, the first transaction has read data that 'never existed'."
  },
  {
    question: "If a database schema is heavily denormalized, which of the following is the most likely consequence?",
    options: [
      "A) Slower read operations.",
      "B) Increased complex joins for basic queries.",
      "C) Improved read performance but increased risk of data anomalies.",
      "D) Decreased storage space requirements."
    ],
    answer: "C) Improved read performance but increased risk of data anomalies.",
    explanation: "Denormalization reduces the need for complex joins, speeding up read operations. However, it introduces redundancy, which increases storage and the risk of insert, update, and delete anomalies."
  },
  {
    question: "Assertion (A): Granting a privilege 'WITH GRANT OPTION' allows the recipient to pass the privilege to others. \nReason (R): The DCL command REVOKE always cascades to remove privileges from downstream users.",
    options: [
      "A) Both A and R are true and R is the correct explanation of A",
      "B) Both A and R are true but R is not the correct explanation of A",
      "C) A is true but R is false",
      "D) A is false but R is true"
    ],
    answer: "B) Both A and R are true but R is not the correct explanation of A",
    explanation: "A is true (WITH GRANT OPTION allows passing privileges). R is also true in standard SQL (revoking a privilege revokes it from all users who received it from that user). However, R does not explain A."
  },
  {
    question: "Which of the following accurately describes a Timestamp-based concurrency control protocol?",
    options: [
      "A) It requires the use of exclusive locks for all write operations.",
      "B) It ensures serializability by comparing read and write timestamps without using locks.",
      "C) It prevents deadlock by aborting the oldest transaction.",
      "D) It only allows one transaction to run in the system at any given time."
    ],
    answer: "B) It ensures serializability by comparing read and write timestamps without using locks.",
    explanation: "Timestamp ordering is an optimistic, non-locking protocol. It uses timestamps assigned to transactions and data items (read_TS, write_TS) to ensure equivalent serial execution."
  },
  {
    question: "Consider a table `Scores` (PlayerID, Score). How do you find the 2nd highest score?",
    options: [
      "A) SELECT MAX(Score) FROM Scores WHERE Score < (SELECT MAX(Score) FROM Scores)",
      "B) SELECT MAX(Score) FROM Scores OFFSET 1",
      "C) SELECT Score FROM Scores ORDER BY Score DESC LIMIT 2,1",
      "D) SELECT SECOND(MAX(Score)) FROM Scores"
    ],
    answer: "A) SELECT MAX(Score) FROM Scores WHERE Score < (SELECT MAX(Score) FROM Scores)",
    explanation: "Option A is standard SQL that reliably finds the max score strictly less than the absolute max score. While LIMIT/OFFSET approaches exist, syntax varies (e.g. LIMIT 1 OFFSET 1)."
  },
  {
    question: "What is a 'trigger' in a database?",
    options: [
      "A) A user-defined function called explicitly by a user.",
      "B) A stored procedure that automatically executes in response to specific events on a table.",
      "C) An index that updates automatically when data changes.",
      "D) A mechanism to schedule database backups."
    ],
    answer: "B) A stored procedure that automatically executes in response to specific events on a table.",
    explanation: "A trigger is a special type of stored procedure that fires automatically when an event (INSERT, UPDATE, DELETE) occurs in the database server."
  },
  {
    question: "What is an Equi-Join?",
    options: [
      "A) A join that uses the inequality operator (<, >).",
      "B) A join that combines all rows regardless of a condition.",
      "C) A special case of theta join where the condition is solely an equality comparison.",
      "D) A join that only returns rows where both tables have the exact same number of columns."
    ],
    answer: "C) A special case of theta join where the condition is solely an equality comparison.",
    explanation: "An equi-join is a specific type of theta join where the join condition uses only the equality operator (=) between specified columns."
  },
  {
    question: "Which characteristic differentiates B-trees from B+trees?",
    options: [
      "A) B-trees can only store numeric data.",
      "B) B+ trees store data pointers only in leaf nodes, while B-trees store them in internal nodes as well.",
      "C) B+ trees are not balanced.",
      "D) B-trees have linked leaf nodes."
    ],
    answer: "B) B+ trees store data pointers only in leaf nodes, while B-trees store them in internal nodes as well.",
    explanation: "In a B+ tree, all data records are stored at the leaf level, and leaf nodes are linked together. In a B-tree, keys and data records can be stored in internal nodes as well as leaves."
  },
  {
    question: "What does the SQL command `DROP TABLE TableName CASCADE CONSTRAINTS;` do in Oracle?",
    options: [
      "A) Drops the table only if it has no foreign key dependencies.",
      "B) Drops the table and automatically deletes all foreign key constraints that refer to the primary and unique keys in the dropped table.",
      "C) Drops the table and drops all tables that depend on it.",
      "D) Drops the table and deletes all rows in child tables."
    ],
    answer: "B) Drops the table and automatically deletes all foreign key constraints that refer to the primary and unique keys in the dropped table.",
    explanation: "CASCADE CONSTRAINTS drops the table and simultaneously removes all referential integrity constraints from other tables that point to the table being dropped."
  }
];
