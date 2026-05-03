export const dbmsHard = [
  {
    question: "Consider a relation R(A, B, C, D, E) with functional dependencies {A -> B, BC -> E, ED -> A}. Which of the following is a candidate key?",
    options: [
      "A) AC",
      "B) CDE",
      "C) BCD",
      "D) ADE"
    ],
    answer: "B) CDE",
    explanation: "Let's test closures: CDE+ -> C, D, E. Since ED->A, CDE+ -> C, D, E, A. Since A->B, CDE+ -> C, D, E, A, B. CDE covers all attributes. A and C cannot be derived from others unless E and D are present, making CDE a candidate key."
  },
  {
    question: "Two transactions T1 and T2 run concurrently. T1 reads X=10, T2 reads X=10. T1 writes X=20, T2 writes X=30. What concurrency anomaly has occurred?",
    options: [
      "A) Dirty Read",
      "B) Non-repeatable Read",
      "C) Phantom Read",
      "D) Lost Update"
    ],
    answer: "D) Lost Update",
    explanation: "Both transactions read the same initial value, update it based on that read, and write it back. T2's write overwrites T1's write, meaning T1's update is entirely lost."
  },
  {
    question: "You have a query: SELECT Dept, AVG(Salary) FROM Employee GROUP BY Dept HAVING COUNT(*) > 10. Internally, what is the order of execution?",
    options: [
      "A) SELECT -> FROM -> GROUP BY -> HAVING",
      "B) FROM -> GROUP BY -> HAVING -> SELECT",
      "C) FROM -> HAVING -> GROUP BY -> SELECT",
      "D) GROUP BY -> HAVING -> FROM -> SELECT"
    ],
    answer: "B) FROM -> GROUP BY -> HAVING -> SELECT",
    explanation: "SQL execution order: FROM (gather data), WHERE (filter rows), GROUP BY (form groups), HAVING (filter groups), SELECT (project columns), ORDER BY (sort)."
  },
  {
    question: "A B+ tree index is to be built on an attribute A. The size of an index pointer is 8 bytes, the key size is 12 bytes, and the block size is 1024 bytes. What is the maximum order (number of pointers) of an internal node?",
    options: [
      "A) 50",
      "B) 51",
      "C) 52",
      "D) 53"
    ],
    answer: "B) 51",
    explanation: "Let order be n. An internal node has n pointers and (n-1) keys. The equation is: n * (Pointer Size) + (n-1) * (Key Size) <= Block Size. 8n + 12(n-1) <= 1024. 20n - 12 <= 1024. 20n <= 1036. n = 51.8. Max order is 51."
  },
  {
    question: "In a Multi-Version Concurrency Control (MVCC) system, when transaction T wants to read an item X, it reads the version X_k such that:",
    options: [
      "A) X_k is the most recently written version of X.",
      "B) X_k has the largest write timestamp that is less than or equal to the timestamp of T.",
      "C) X_k has the smallest write timestamp that is greater than the timestamp of T.",
      "D) X_k is the version of X currently holding an exclusive lock."
    ],
    answer: "B) X_k has the largest write timestamp that is less than or equal to the timestamp of T.",
    explanation: "MVCC maintains multiple versions. A transaction reads the data as it was at the time the transaction started, meaning it reads the version with the highest timestamp not exceeding its own."
  },
  {
    question: "Consider a relational schema R(A,B,C,D) and a set of FDs F = {AB->C, C->D, D->A}. Which of the following is true?",
    options: [
      "A) The relation is in 3NF but not BCNF",
      "B) The relation is in BCNF",
      "C) The relation is not in 2NF",
      "D) The decomposition into R1(A,B,C) and R2(C,D) is lossy"
    ],
    answer: "A) The relation is in 3NF but not BCNF",
    explanation: "Candidate keys: AB, BC, BD. Prime attributes: A, B, C, D. In D->A, D is not a superkey, but A is a prime attribute. So it satisfies 3NF. But because D is not a superkey, it violates BCNF."
  },
  {
    question: "A query contains an outer join: SELECT * FROM A LEFT JOIN B ON A.id = B.id AND B.status = 'Active'. How does this differ from placing the condition in the WHERE clause: WHERE B.status = 'Active'?",
    options: [
      "A) They produce the exact same result.",
      "B) The ON clause condition filters rows from A before joining.",
      "C) The ON clause filters the right table before joining, ensuring all rows from A are still returned (with NULLs for B if unmatched). The WHERE clause filters the result AFTER the join, effectively turning it into an INNER JOIN.",
      "D) The WHERE clause causes a syntax error."
    ],
    answer: "C) The ON clause filters the right table before joining, ensuring all rows from A are still returned (with NULLs for B if unmatched). The WHERE clause filters the result AFTER the join, effectively turning it into an INNER JOIN.",
    explanation: "In a LEFT JOIN, conditions in the ON clause do not filter out rows from the left table. But if you put the condition in the WHERE clause, any row where B.status is NULL (because there was no match) will be filtered out, mimicking an INNER JOIN."
  },
  {
    question: "Which of the following schedules is Recoverable but not Cascade-less?\nS: W1(A), R2(A), W1(B), C1, C2",
    options: [
      "A) The schedule S",
      "B) W1(A), R2(A), C2, C1",
      "C) W1(A), C1, R2(A), C2",
      "D) R1(A), W2(A), C1, C2"
    ],
    answer: "A) The schedule S",
    explanation: "In S, T2 reads uncommitted data written by T1 (R2(A) after W1(A)). T1 commits before T2 commits, making it recoverable. However, because T2 read uncommitted data, if T1 had rolled back, T2 would have to cascade rollback. Thus, it is not cascade-less."
  },
  {
    question: "Assertion (A): Two-phase locking (2PL) guarantees serializability. \nReason (R): 2PL is deadlock-free.",
    options: [
      "A) Both A and R are true and R is the correct explanation of A",
      "B) Both A and R are true but R is not the correct explanation of A",
      "C) A is true but R is false",
      "D) A is false but R is true"
    ],
    answer: "C) A is true but R is false",
    explanation: "2PL guarantees conflict serializability. However, basic 2PL does NOT prevent deadlocks, as transactions can still circularly wait for locks during the growing phase. Strict or Conservative 2PL can prevent deadlocks, but standard 2PL does not."
  },
  {
    question: "Consider a table T with 100,000 rows. A query `SELECT * FROM T WHERE Col1 = 5 AND Col2 = 10` is running slow. You can create one index. What is the most efficient index assuming Col1 has 10 distinct values and Col2 has 50,000 distinct values?",
    options: [
      "A) CREATE INDEX idx ON T(Col1, Col2)",
      "B) CREATE INDEX idx ON T(Col2, Col1)",
      "C) CREATE INDEX idx1 ON T(Col1); CREATE INDEX idx2 ON T(Col2)",
      "D) Bitmap index on Col2"
    ],
    answer: "B) CREATE INDEX idx ON T(Col2, Col1)",
    explanation: "When creating a composite index, the most selective column (the one with the highest cardinality, Col2) should generally be leading. Filtering by Col2 first narrows the result set down significantly faster than Col1."
  },
  {
    question: "What is the primary mechanism behind ARIES (Algorithm for Recovery and Isolation Exploiting Semantics)?",
    options: [
      "A) Shadow Paging",
      "B) Two-Phase Commit",
      "C) Write-Ahead Logging with three passes: Analysis, Redo, Undo",
      "D) Timestamp Ordering"
    ],
    answer: "C) Write-Ahead Logging with three passes: Analysis, Redo, Undo",
    explanation: "ARIES is a recovery algorithm based on WAL. It performs an Analysis pass to determine the state at crash, a Redo pass (repeating history) to restore the DB to the exact crash state, and an Undo pass to rollback uncommitted transactions."
  },
  {
    question: "You want to find the nth highest salary using a correlated subquery. Which of the following is logically correct?",
    options: [
      "A) SELECT Salary FROM Employee e1 WHERE N = (SELECT COUNT(DISTINCT Salary) FROM Employee e2 WHERE e2.Salary > e1.Salary)",
      "B) SELECT Salary FROM Employee e1 WHERE N-1 = (SELECT COUNT(DISTINCT Salary) FROM Employee e2 WHERE e2.Salary > e1.Salary)",
      "C) SELECT Salary FROM Employee e1 WHERE N = (SELECT COUNT(Salary) FROM Employee e2 WHERE e2.Salary >= e1.Salary)",
      "D) SELECT Salary FROM Employee e1 WHERE N-1 = (SELECT COUNT(Salary) FROM Employee e2 WHERE e2.Salary < e1.Salary)"
    ],
    answer: "B) SELECT Salary FROM Employee e1 WHERE N-1 = (SELECT COUNT(DISTINCT Salary) FROM Employee e2 WHERE e2.Salary > e1.Salary)",
    explanation: "To find the Nth highest salary, there must be exactly N-1 distinct salaries greater than it. The subquery counts how many distinct salaries are strictly greater than the current e1.Salary."
  },
  {
    question: "A relation R has attributes A, B, C, D, E, F. It is decomposed into R1(A, B, C, D) and R2(A, E, F). The FD set is {A->BCDEF, BC->A, D->E}. Is this decomposition dependency preserving?",
    options: [
      "A) Yes, because A is a key for R.",
      "B) Yes, because the decomposition is lossless.",
      "C) No, because the dependency D->E spans across both relations.",
      "D) No, because BC->A is lost."
    ],
    answer: "C) No, because the dependency D->E spans across both relations.",
    explanation: "D is in R1, and E is in R2. The functional dependency D->E cannot be checked in either R1 or R2 individually, making the decomposition not dependency preserving."
  },
  {
    question: "What does the Thomas Write Rule modify in standard timestamp ordering?",
    options: [
      "A) It ignores obsolete write operations instead of aborting the transaction.",
      "B) It allows dirty reads to improve concurrency.",
      "C) It forces transactions to acquire all locks beforehand.",
      "D) It prevents write skew anomalies."
    ],
    answer: "A) It ignores obsolete write operations instead of aborting the transaction.",
    explanation: "In basic timestamp ordering, if TS(T) < write_TS(X), T is aborted. Thomas Write Rule says if T is trying to write an obsolete value (a newer transaction already wrote it), we can safely ignore T's write rather than aborting T."
  },
  {
    question: "Consider a recursive CTE used to traverse a tree-structured table 'Categories(id, parent_id, name)'. What is the critical component that stops the recursion?",
    options: [
      "A) The MAXRECURSION option",
      "B) The join condition in the recursive member returning an empty set",
      "C) A WHERE clause filtering out NULL parent_ids",
      "D) The UNION ALL operator"
    ],
    answer: "B) The join condition in the recursive member returning an empty set",
    explanation: "A recursive CTE stops executing when the recursive member (the query after UNION ALL) produces no new rows (an empty result set), typically because the join finds no more children."
  }
];
