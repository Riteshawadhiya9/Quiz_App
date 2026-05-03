export const dbmsEasy = [
  {
    question: "Which of the following data models is the underlying basis for most modern commercial DBMS?",
    options: [
      "A) Hierarchical Model",
      "B) Network Model",
      "C) Relational Model",
      "D) Object-Oriented Model"
    ],
    answer: "C) Relational Model",
    explanation: "The Relational Model, introduced by E.F. Codd, uses tables (relations) to represent data and relationships, forming the basis of modern SQL databases like MySQL, Oracle, and PostgreSQL. The others are legacy or specialized models."
  },
  {
    question: "In the context of database transactions, what does the 'I' in ACID properties stand for?",
    options: [
      "A) Integrity",
      "B) Isolation",
      "C) Inconsistency",
      "D) Independence"
    ],
    answer: "B) Isolation",
    explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability. Isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially."
  },
  {
    question: "Which of the following is a Data Definition Language (DDL) command?",
    options: [
      "A) UPDATE",
      "B) SELECT",
      "C) TRUNCATE",
      "D) GRANT"
    ],
    answer: "C) TRUNCATE",
    explanation: "TRUNCATE is a DDL command used to delete all rows from a table and free the space. UPDATE and SELECT are DML, while GRANT is DCL."
  },
  {
    question: "A relation is in First Normal Form (1NF) if:",
    options: [
      "A) It has no partial dependencies.",
      "B) It has no transitive dependencies.",
      "C) Every attribute is atomic.",
      "D) It has a composite primary key."
    ],
    answer: "C) Every attribute is atomic.",
    explanation: "1NF dictates that all domains must contain only atomic (indivisible) values. Partial dependencies relate to 2NF, and transitive dependencies to 3NF."
  },
  {
    question: "Which key is used to establish a relationship between two tables?",
    options: [
      "A) Primary Key",
      "B) Super Key",
      "C) Foreign Key",
      "D) Candidate Key"
    ],
    answer: "C) Foreign Key",
    explanation: "A Foreign Key is an attribute or set of attributes in one table that refers to the Primary Key of another table, enforcing referential integrity."
  },
  {
    question: "In an ER diagram, a weak entity set is represented by:",
    options: [
      "A) A single rectangle",
      "B) A double rectangle",
      "C) A dashed oval",
      "D) A diamond"
    ],
    answer: "B) A double rectangle",
    explanation: "A weak entity set, which does not have its own primary key, is denoted by a double rectangle in ER diagrams."
  },
  {
    question: "What is the degree of a relation?",
    options: [
      "A) The number of tuples (rows)",
      "B) The number of attributes (columns)",
      "C) The number of primary keys",
      "D) The number of foreign keys"
    ],
    answer: "B) The number of attributes (columns)",
    explanation: "The degree of a relation is the number of attributes (columns) it contains. The number of tuples is called the cardinality."
  },
  {
    question: "Which of the following SQL constraints ensures that a column cannot have a NULL value?",
    options: [
      "A) UNIQUE",
      "B) NOT NULL",
      "C) CHECK",
      "D) DEFAULT"
    ],
    answer: "B) NOT NULL",
    explanation: "The NOT NULL constraint enforces a column to not accept NULL values. UNIQUE ensures all values are distinct, but allows a single NULL in some implementations."
  },
  {
    question: "Which indexing structure is most commonly used in DBMS to optimize equality and range queries?",
    options: [
      "A) Hash Table",
      "B) B+ Tree",
      "C) Binary Search Tree",
      "D) Linked List"
    ],
    answer: "B) B+ Tree",
    explanation: "B+ Trees are the standard indexing structure in databases because they remain balanced and leaf nodes are linked, making range queries highly efficient."
  },
  {
    question: "What is a 'View' in a database?",
    options: [
      "A) A materialized physical table",
      "B) A virtual table based on the result-set of an SQL statement",
      "C) A snapshot of the database at a specific time",
      "D) A stored procedure that returns a table"
    ],
    answer: "B) A virtual table based on the result-set of an SQL statement",
    explanation: "A view is a virtual table whose contents are defined by a query. It doesn't store data itself (unless it's a materialized view)."
  },
  {
    question: "Which join returns all rows from the left table, and the matched rows from the right table?",
    options: [
      "A) INNER JOIN",
      "B) RIGHT JOIN",
      "C) LEFT JOIN",
      "D) FULL OUTER JOIN"
    ],
    answer: "C) LEFT JOIN",
    explanation: "A LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and the matched records from the right table. Unmatched right table columns will be NULL."
  },
  {
    question: "What is the purpose of the COMMIT command?",
    options: [
      "A) To undo a transaction",
      "B) To permanently save transaction changes to the database",
      "C) To start a new transaction",
      "D) To set a savepoint within a transaction"
    ],
    answer: "B) To permanently save transaction changes to the database",
    explanation: "COMMIT makes all data changes in the current transaction permanent. ROLLBACK is used to undo them."
  },
  {
    question: "Assertion (A): A relation in BCNF is always in 3NF. \nReason (R): BCNF is a stricter version of 3NF where every determinant must be a candidate key.",
    options: [
      "A) Both A and R are true and R is the correct explanation of A",
      "B) Both A and R are true but R is not the correct explanation of A",
      "C) A is true but R is false",
      "D) A is false but R is true"
    ],
    answer: "A) Both A and R are true and R is the correct explanation of A",
    explanation: "BCNF is stricter than 3NF. In 3NF, a dependency A->B is allowed if B is a prime attribute. BCNF removes this exception, requiring A to be a superkey."
  },
  {
    question: "What type of anomaly occurs when deleting a row inadvertently removes other independent data?",
    options: [
      "A) Insertion Anomaly",
      "B) Deletion Anomaly",
      "C) Update Anomaly",
      "D) Concurrency Anomaly"
    ],
    answer: "B) Deletion Anomaly",
    explanation: "Deletion anomaly happens when deleting a record (like a course) also deletes unrelated information (like the only student enrolled in that course), typical in poorly normalized tables."
  },
  {
    question: "Which of the following is true about a Primary Key?",
    options: [
      "A) It can contain NULL values.",
      "B) A table can have multiple Primary Keys.",
      "C) It uniquely identifies each record in a table.",
      "D) It must be a single column."
    ],
    answer: "C) It uniquely identifies each record in a table.",
    explanation: "A Primary Key uniquely identifies each row. It cannot be NULL, a table can only have one (though it can be composite, meaning multiple columns), and it enforces entity integrity."
  },
  {
    question: "Which relational algebra operation combines tuples from two relations where a specified condition is met?",
    options: [
      "A) Projection",
      "B) Selection",
      "C) Theta Join",
      "D) Cartesian Product"
    ],
    answer: "C) Theta Join",
    explanation: "Theta Join combines tuples from two relations based on a specific condition (theta). Selection filters rows, Projection filters columns, and Cartesian product combines all rows without conditions."
  },
  {
    question: "What is a schedule in the context of DBMS?",
    options: [
      "A) A timetable for database backups",
      "B) The chronological order of execution of operations from multiple transactions",
      "C) The logical schema of the database",
      "D) A script for automating database maintenance"
    ],
    answer: "B) The chronological order of execution of operations from multiple transactions",
    explanation: "A schedule (or history) is an execution sequence that indicates the chronological order in which instructions of concurrent transactions are executed."
  },
  {
    question: "Which of the following is NOT a valid SQL aggregate function?",
    options: [
      "A) SUM()",
      "B) AVG()",
      "C) MAXIMUM()",
      "D) COUNT()"
    ],
    answer: "C) MAXIMUM()",
    explanation: "The correct SQL aggregate function for finding the maximum value is MAX(), not MAXIMUM()."
  },
  {
    question: "In a Relational Database, what does 'Data Independence' refer to?",
    options: [
      "A) Data is stored independently of the application logic.",
      "B) The ability to modify the schema at one level without changing the schema at the next higher level.",
      "C) Tables do not have relationships with each other.",
      "D) Data is completely decoupled from the physical storage medium."
    ],
    answer: "B) The ability to modify the schema at one level without changing the schema at the next higher level.",
    explanation: "Data independence (logical and physical) is the capacity to change the schema at one level of a database system without having to change the schema at the next higher level."
  },
  {
    question: "Which normal form deals with multi-valued dependencies?",
    options: [
      "A) 2NF",
      "B) 3NF",
      "C) BCNF",
      "D) 4NF"
    ],
    answer: "D) 4NF",
    explanation: "Fourth Normal Form (4NF) is designed to eliminate multi-valued dependencies, where a single attribute determines multiple independent values."
  },
  {
    question: "What is the function of the DCL statement REVOKE?",
    options: [
      "A) To delete a database",
      "B) To rollback a transaction",
      "C) To withdraw privileges granted to a user",
      "D) To remove a table structure"
    ],
    answer: "C) To withdraw privileges granted to a user",
    explanation: "REVOKE is a Data Control Language (DCL) command used to remove user access privileges previously given by the GRANT command."
  },
  {
    question: "Which concurrency control protocol uses the concept of 'growing' and 'shrinking' phases?",
    options: [
      "A) Timestamp Ordering",
      "B) Two-Phase Locking (2PL)",
      "C) Optimistic Concurrency Control",
      "D) Multi-version Concurrency Control (MVCC)"
    ],
    answer: "B) Two-Phase Locking (2PL)",
    explanation: "In 2PL, a transaction goes through a growing phase (acquiring locks without releasing any) and a shrinking phase (releasing locks without acquiring any new ones) to guarantee serializability."
  },
  {
    question: "What does the 'HAVING' clause do in SQL?",
    options: [
      "A) Filters rows before grouping",
      "B) Filters groups created by the GROUP BY clause",
      "C) Joins two tables based on a condition",
      "D) Sorts the result set"
    ],
    answer: "B) Filters groups created by the GROUP BY clause",
    explanation: "While WHERE filters individual rows before aggregation, HAVING filters grouped rows after the GROUP BY clause has been applied."
  },
  {
    question: "A transaction that has not been committed yet is called:",
    options: [
      "A) Durable",
      "B) Serialized",
      "C) Uncommitted or Active",
      "D) Consistent"
    ],
    answer: "C) Uncommitted or Active",
    explanation: "An active transaction is currently executing or has finished executing but not yet committed, meaning its changes are not yet permanent."
  },
  {
    question: "Which constraint is automatically applied to a Primary Key?",
    options: [
      "A) CHECK",
      "B) UNIQUE and NOT NULL",
      "C) FOREIGN KEY",
      "D) DEFAULT"
    ],
    answer: "B) UNIQUE and NOT NULL",
    explanation: "A primary key inherently requires that the column(s) contain unique values and cannot contain NULL values."
  }
];
