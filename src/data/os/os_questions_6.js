export const OS_Q6 = [
  {
    id: "os_scribd_1",
    diff: "easy",
    topic: "Basics",
    q: "Which of the following is not a function of the operating system?",
    opts: ["Memory management", "File management", "Compiler design", "Device management"],
    ans: 2,
    exp: "Compiler design is not a function of the operating system. A compiler is system software, but not part of the OS itself."
  },
  {
    id: "os_scribd_2",
    diff: "easy",
    topic: "Process Management",
    q: "A process in the operating system is:",
    opts: ["A program in execution", "A compiler", "An operating system task", "A thread"],
    ans: 0,
    exp: "A process is formally defined as a program in execution, including its current activity represented by the value of the program counter and the contents of the processor's registers."
  },
  {
    id: "os_scribd_3",
    diff: "easy",
    topic: "Process Management",
    q: "Which of the following is used to uniquely identify a process?",
    opts: ["Thread ID", "Process Control Block", "Program Counter", "Process ID"],
    ans: 3,
    exp: "The Process ID (PID) is a unique identifier assigned by the operating system to each running process."
  },
  {
    id: "os_scribd_4",
    diff: "easy",
    topic: "Threads",
    q: "What is a thread?",
    opts: ["Lightweight process", "A part of compiler", "A type of memory", "An input device"],
    ans: 0,
    exp: "A thread is often called a lightweight process (LWP). It is the smallest sequence of programmed instructions that can be managed independently by a scheduler."
  },
  {
    id: "os_scribd_5",
    diff: "easy",
    topic: "Process Management",
    q: "Which of the following is not a valid process state?",
    opts: ["New", "Waiting", "Ready", "Execute"],
    ans: 3,
    exp: "The standard process states are New, Ready, Running (or Executing), Waiting (or Blocked), and Terminated. 'Execute' is not a standard state name; 'Running' is used."
  },
  {
    id: "os_scribd_6",
    diff: "easy",
    topic: "Synchronization",
    q: "What is the purpose of a semaphore?",
    opts: ["CPU scheduling", "Memory management", "Process synchronization", "File access"],
    ans: 2,
    exp: "A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system such as a multiprogramming operating system."
  },
  {
    id: "os_scribd_7",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "Which of the following is a non-preemptive scheduling algorithm?",
    opts: ["Round Robin", "SJF", "Priority", "FCFS"],
    ans: 3,
    exp: "First-Come, First-Served (FCFS) is strictly non-preemptive. Once the CPU is allocated to a process, that process keeps the CPU until it releases the CPU, either by terminating or by requesting I/O."
  },
  {
    id: "os_scribd_8",
    diff: "medium",
    topic: "Deadlocks",
    q: "What causes a deadlock?",
    opts: ["Circular wait", "Mutual exclusion", "Hold and wait", "All of the above"],
    ans: 3,
    exp: "Deadlock can arise if four conditions hold simultaneously: Mutual exclusion, Hold and wait, No preemption, and Circular wait."
  },
  {
    id: "os_scribd_9",
    diff: "medium",
    topic: "Process Management",
    q: "What is context switching?",
    opts: ["Switching from user mode to kernel mode", "Saving and loading process states", "Switching power states", "Scheduling threads"],
    ans: 1,
    exp: "Context switching is the process of storing the state of a process or thread, so that it can be restored and resume execution at a later point."
  },
  {
    id: "os_scribd_10",
    diff: "medium",
    topic: "Deadlocks",
    q: "Which of the following is not a deadlock prevention condition?",
    opts: ["Circular wait", "Mutual exclusion", "Preemption", "Aging"],
    ans: 3,
    exp: "Aging is a technique used to prevent starvation, not deadlock. Deadlock prevention involves breaking one of the four necessary conditions."
  },
  {
    id: "os_scribd_11",
    diff: "medium",
    topic: "Memory Management",
    q: "Paging is a memory management scheme that eliminates the need for:",
    opts: ["Fragmentation", "Contiguous allocation", "Logical addressing", "None of the above"],
    ans: 1,
    exp: "Paging avoids the need for contiguous allocation of physical memory. By splitting physical memory into equal-sized frames, processes can be loaded into non-contiguous frames."
  },
  {
    id: "os_scribd_12",
    diff: "medium",
    topic: "Memory Management",
    q: "Which memory allocation strategy suffers from external fragmentation?",
    opts: ["Paging", "Segmentation", "Contiguous allocation", "All of the above"],
    ans: 2,
    exp: "Contiguous allocation suffers from external fragmentation because free memory is broken into chunks across the address space, making it impossible to satisfy a large memory request even if total free memory is sufficient."
  },
  {
    id: "os_scribd_13",
    diff: "easy",
    topic: "Basics",
    q: "What is the main function of the kernel?",
    opts: ["Manage user interface", "Manage system calls", "Manage hardware and resources", "Run applications"],
    ans: 2,
    exp: "The kernel is the core component of an operating system. It has complete control over everything in the system and primarily manages hardware resources."
  },
  {
    id: "os_scribd_14",
    diff: "medium",
    topic: "Memory Management",
    q: "What is a page fault?",
    opts: ["A syntax error", "A memory error", "A missing page in main memory", "A corrupted disk"],
    ans: 2,
    exp: "A page fault occurs when a program attempts to access a block of memory that is not currently residing in the physical memory (RAM)."
  },
  {
    id: "os_scribd_15",
    diff: "hard",
    topic: "Memory Management",
    q: "Thrashing occurs when:",
    opts: ["Process moves too much", "CPU gets too hot", "Processes spend more time swapping pages than executing", "None of the above"],
    ans: 2,
    exp: "Thrashing occurs when the virtual memory subsystem is in a constant state of paging, spending more time swapping pages into and out of memory than executing actual process instructions."
  },
  {
    id: "os_scribd_16",
    diff: "medium",
    topic: "Memory Management",
    q: "Which algorithm is used in page replacement policies?",
    opts: ["LRU", "FIFO", "Optimal", "All of the above"],
    ans: 3,
    exp: "LRU (Least Recently Used), FIFO (First-In-First-Out), and Optimal are all well-known page replacement algorithms."
  },
  {
    id: "os_scribd_17",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "Which of these is not a scheduling algorithm?",
    opts: ["SJF", "FCFS", "LRU", "Round Robin"],
    ans: 2,
    exp: "LRU (Least Recently Used) is a page replacement algorithm, not a CPU scheduling algorithm."
  },
  {
    id: "os_scribd_18",
    diff: "medium",
    topic: "CPU Scheduling",
    q: "What is the time interval between job submission and job completion called?",
    opts: ["Response time", "Turnaround time", "Waiting time", "Throughput"],
    ans: 1,
    exp: "Turnaround time is the total amount of time taken to fulfill a request, from the time of submission to completion."
  },
  {
    id: "os_scribd_19",
    diff: "easy",
    topic: "Process Management",
    q: "What is the mechanism used for interprocess communication?",
    opts: ["Pipes", "Semaphores", "Shared memory", "All of the above"],
    ans: 3,
    exp: "Pipes, Shared Memory, and Message Passing are typical IPC mechanisms, and Semaphores are used alongside them for synchronization."
  },
  {
    id: "os_scribd_20",
    diff: "easy",
    topic: "Process Management",
    q: "In UNIX, the fork() system call creates:",
    opts: ["A new thread", "A new user", "A child process", "A new file"],
    ans: 2,
    exp: "The fork() system call is used to create a new process, which is called the child process, which runs concurrently with the process that makes the fork() call (parent process)."
  },
  {
    id: "os_scribd_21",
    diff: "easy",
    topic: "Basics",
    q: "Which of the following is not a type of operating system?",
    opts: ["Batch", "Time-sharing", "Distributed", "Java"],
    ans: 3,
    exp: "Java is a programming language and computing platform, not a type of operating system."
  },
  {
    id: "os_scribd_22",
    diff: "easy",
    topic: "Basics",
    q: "The main goal of a time-sharing system is:",
    opts: ["Minimize response time", "Maximize throughput", "Maximize CPU usage", "Minimize errors"],
    ans: 0,
    exp: "Time-sharing systems are designed to minimize response time and allow multiple users to interact with the computer system simultaneously."
  },
  {
    id: "os_scribd_23",
    diff: "medium",
    topic: "CPU Scheduling",
    q: "Round-robin scheduling is most suitable for:",
    opts: ["Batch systems", "Time-sharing systems", "Real-time systems", "Embedded systems"],
    ans: 1,
    exp: "Round-robin is highly suitable for time-sharing systems because it guarantees that all processes get a fair share of the CPU at regular intervals, ensuring good responsiveness."
  },
  {
    id: "os_scribd_24",
    diff: "easy",
    topic: "File Systems",
    q: "Which of the following is not an attribute of a file?",
    opts: ["Name", "Type", "Size", "Priority"],
    ans: 3,
    exp: "Name, Type, Size, Creation date, etc., are file attributes. Priority is an attribute of a process, not a file."
  },
  {
    id: "os_scribd_25",
    diff: "medium",
    topic: "Disk Scheduling",
    q: "Which of the following is not an I/O scheduling algorithm?",
    opts: ["FCFS", "SSTF", "LOOK", "SJF"],
    ans: 3,
    exp: "SJF (Shortest Job First) is a CPU scheduling algorithm. FCFS, SSTF, and LOOK are disk (I/O) scheduling algorithms."
  },
  {
    id: "os_scribd_26",
    diff: "medium",
    topic: "Basics",
    q: "Device drivers are part of:",
    opts: ["Application layer", "Kernel", "Shell", "File system"],
    ans: 1,
    exp: "Device drivers operate within the kernel space to manage and communicate with hardware devices directly."
  },
  {
    id: "os_scribd_27",
    diff: "medium",
    topic: "I/O Systems",
    q: "What is spooling?",
    opts: ["Swapping", "Buffering data for I/O devices", "Multiprogramming", "Scheduling"],
    ans: 1,
    exp: "Spooling (Simultaneous Peripheral Operations On-line) is the process of putting jobs in a buffer (often disk) where a slower device can pick them up when ready."
  },
  {
    id: "os_scribd_28",
    diff: "medium",
    topic: "CPU Scheduling",
    q: "Which scheduling algorithm leads to starvation?",
    opts: ["FCFS", "SJF", "Round Robin", "Multilevel Queue"],
    ans: 1,
    exp: "In Shortest Job First (SJF), a long process may never get executed if shorter processes keep arriving, leading to starvation."
  },
  {
    id: "os_scribd_29",
    diff: "hard",
    topic: "Memory Management",
    q: "Dirty bit is used in:",
    opts: ["Disk scheduling", "Virtual memory", "File system", "Security"],
    ans: 1,
    exp: "In virtual memory paging systems, a dirty bit (modify bit) indicates whether the page has been modified since it was loaded into RAM."
  },
  {
    id: "os_scribd_30",
    diff: "medium",
    topic: "I/O Systems",
    q: "DMA stands for:",
    opts: ["Direct Memory Allocation", "Direct Memory Access", "Dynamic Memory Allocation", "None of the above"],
    ans: 1,
    exp: "DMA (Direct Memory Access) allows hardware subsystems to access main memory independently of the CPU."
  },
  {
    id: "os_scribd_51",
    diff: "medium",
    topic: "Basics",
    q: "What is a trap in OS?",
    opts: ["Hardware interrupt", "Software-generated interrupt", "Memory leak", "Process block"],
    ans: 1,
    exp: "A trap (or exception) is a software-generated interrupt caused either by an error (e.g., division by zero) or a user request for an OS service (system call)."
  },
  {
    id: "os_scribd_52",
    diff: "easy",
    topic: "File Systems",
    q: "Which file system is used in Windows?",
    opts: ["EXT4", "NTFS", "FAT32", "Both B and C"],
    ans: 3,
    exp: "Windows widely uses NTFS (New Technology File System) as its primary file system, but also supports older FAT32 architectures for removable drives."
  },
  {
    id: "os_scribd_53",
    diff: "hard",
    topic: "Memory Management",
    q: "The TLB is used to:",
    opts: ["Translate disk addresses", "Store page table entries", "Manage cache", "Handle files"],
    ans: 1,
    exp: "The Translation Lookaside Buffer (TLB) is a memory cache that stores the recent translations of virtual memory to physical memory (page table entries)."
  },
  {
    id: "os_scribd_54",
    diff: "medium",
    topic: "CPU Scheduling",
    q: "What is the role of a dispatcher in CPU scheduling?",
    opts: ["Selects the process to run", "Transfers control to selected process", "Frees memory", "Swaps pages"],
    ans: 1,
    exp: "While the short-term scheduler selects the process to execute, the dispatcher is the module that actually gives control of the CPU to the selected process (context switch, mode switch, jump)."
  },
  {
    id: "os_scribd_55",
    diff: "medium",
    topic: "Memory Management",
    q: "LRU stands for:",
    opts: ["Least Recently Updated", "Least Recently Used", "Last Returned User", "Least Reliable Unit"],
    ans: 1,
    exp: "Least Recently Used (LRU) is a page replacement policy that evicts the page that has not been used for the longest period of time."
  },
  {
    id: "os_scribd_56",
    diff: "medium",
    topic: "Process Management",
    q: "The fork() system call returns:",
    opts: ["PID of parent to child", "PID of child to parent", "0 to child and PID to parent", "None"],
    ans: 2,
    exp: "In Unix, fork() returns 0 to the newly created child process and returns the Process ID (PID) of the child to the parent process."
  },
  {
    id: "os_scribd_57",
    diff: "medium",
    topic: "Threads",
    q: "The main advantage of multithreading is:",
    opts: ["Security", "Faster I/O", "Responsiveness and performance", "More memory usage"],
    ans: 2,
    exp: "Multithreading allows a program to remain responsive to the user even if part of it is blocked or performing a lengthy operation, overall increasing performance."
  },
  {
    id: "os_scribd_58",
    diff: "hard",
    topic: "Basics",
    q: "A kernel panic is caused by:",
    opts: ["Power failure", "Software crash", "Fatal error in kernel", "Improper shutdown"],
    ans: 2,
    exp: "A kernel panic is a safety measure taken by the operating system's kernel upon detecting an internal fatal error from which it cannot safely recover."
  },
  {
    id: "os_scribd_59",
    diff: "easy",
    topic: "Memory Management",
    q: "In memory hierarchy, the fastest memory is:",
    opts: ["Cache", "RAM", "Disk", "Register"],
    ans: 3,
    exp: "Registers are the fastest memory locations, as they are located directly within the CPU."
  },
  {
    id: "os_scribd_60",
    diff: "medium",
    topic: "Memory Management",
    q: "What is the role of page table?",
    opts: ["Manage files", "Convert logical to physical addresses", "Manage processes", "Connect to disk"],
    ans: 1,
    exp: "A page table is the data structure used by a virtual memory system to store the mapping between logical addresses and physical addresses."
  },
  {
    id: "os_scribd_61",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "Which is not a CPU scheduling criterion?",
    opts: ["Throughput", "Response time", "Deadlock", "Turnaround time"],
    ans: 2,
    exp: "Throughput, response time, and turnaround time are all criteria used to evaluate scheduling algorithms. Deadlock is a system failure state, not a scheduling criterion."
  },
  {
    id: "os_scribd_62",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "Process scheduling in multiprogramming is done by:",
    opts: ["User", "Disk controller", "OS", "Application"],
    ans: 2,
    exp: "The Operating System is entirely responsible for process scheduling to maximize CPU utilization in multiprogramming systems."
  },
  {
    id: "os_scribd_63",
    diff: "medium",
    topic: "Process Management",
    q: "An orphan process is:",
    opts: ["Zombie's parent", "A process without a parent", "Waiting for child", "Process in disk"],
    ans: 1,
    exp: "An orphan process is a computer process whose parent process has finished or terminated, though it remains running itself."
  },
  {
    id: "os_scribd_64",
    diff: "hard",
    topic: "Deadlocks",
    q: "The Banker’s Algorithm is used for:",
    opts: ["Memory management", "CPU scheduling", "Deadlock avoidance", "File allocation"],
    ans: 2,
    exp: "Banker's Algorithm is a resource allocation and deadlock avoidance algorithm that tests for safety by simulating the allocation of predetermined maximum possible amounts of all resources."
  },
  {
    id: "os_scribd_65",
    diff: "medium",
    topic: "Basics",
    q: "An interrupt is:",
    opts: ["Signal from processor", "Signal to CPU to stop current task", "Compiler message", "An I/O operation"],
    ans: 1,
    exp: "An interrupt is a signal sent to the processor that interrupts the current process, prompting the OS to handle the event immediately."
  },
  {
    id: "os_scribd_66",
    diff: "hard",
    topic: "Memory Management",
    q: "Dirty bit is used in page replacement to:",
    opts: ["Show free memory", "Track changes", "Reduce access time", "Lock memory"],
    ans: 1,
    exp: "The dirty bit tracks whether a page has been modified (written to) so the OS knows if it needs to write the changes back to the disk before replacing the page."
  }
];
