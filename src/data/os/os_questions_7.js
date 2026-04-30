export const OS_Q7 = [
  {
    id: "os_scribd_67",
    diff: "easy",
    topic: "Memory Management",
    q: "What is demand paging?",
    opts: ["Loading full process", "Loading all pages in memory", "Loading pages only when required", "Keeping pages in cache"],
    ans: 2,
    exp: "Demand paging is a method of virtual memory management. In a system that uses demand paging, the operating system copies a disk page into physical memory only if an attempt is made to access it and that page is not already in memory."
  },
  {
    id: "os_scribd_68",
    diff: "easy",
    topic: "Process Management",
    q: "Which command shows all running processes in Unix?",
    opts: ["run", "exec", "ps", "jobs"],
    ans: 2,
    exp: "The 'ps' (process status) command displays information about a selection of the active processes on the system."
  },
  {
    id: "os_scribd_69",
    diff: "easy",
    topic: "Basics",
    q: "The OS that runs on a server is called:",
    opts: ["Desktop OS", "RTOS", "Network OS", "Cloud OS"],
    ans: 2,
    exp: "A Network Operating System (NOS) is an operating system that manages network resources: usually running on a server and giving the server the capability to manage data, users, groups, security, applications, and other networking functions."
  },
  {
    id: "os_scribd_70",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "Starvation can be avoided using:",
    opts: ["Paging", "Aging", "Locking", "Fragmentation"],
    ans: 1,
    exp: "Aging is a technique to avoid starvation in a scheduling system. It works by gradually increasing the priority of processes that wait in the system for a long time."
  },
  {
    id: "os_scribd_71",
    diff: "medium",
    topic: "Process Management",
    q: "What is a socket?",
    opts: ["Memory location", "File", "Endpoint of communication", "Interrupt"],
    ans: 2,
    exp: "A socket is one endpoint of a two-way communication link between two programs running on the network."
  },
  {
    id: "os_scribd_72",
    diff: "medium",
    topic: "Synchronization",
    q: "The execution of critical section is controlled by:",
    opts: ["Compilers", "Semaphores", "Threads", "Files"],
    ans: 1,
    exp: "Semaphores (and Mutexes) are synchronization primitives used to control access to a common resource or critical section by multiple processes in a concurrent system."
  },
  {
    id: "os_scribd_73",
    diff: "easy",
    topic: "Basics",
    q: "What is the function of shell in OS?",
    opts: ["Manage hardware", "Provide UI", "Interpret commands", "Handle memory"],
    ans: 2,
    exp: "The shell is the command interpreter in an operating system. It reads user commands from the terminal (or a script) and translates them into system calls that the kernel can execute."
  },
  {
    id: "os_scribd_74",
    diff: "medium",
    topic: "File Systems",
    q: "What is a file descriptor?",
    opts: ["Data structure for I/O", "Address of file", "Kernel log", "File type"],
    ans: 0,
    exp: "A file descriptor is a data structure (typically an integer handle) used by a program to request an I/O operation from the OS (such as reading or writing to a file, pipe, or socket)."
  },
  {
    id: "os_scribd_75",
    diff: "easy",
    topic: "Basics",
    q: "What is the primary goal of an OS?",
    opts: ["Secure internet", "Provide programming languages", "Manage resources efficiently", "Compile code"],
    ans: 2,
    exp: "The primary goals of an operating system are to provide an environment for the user to execute programs conveniently, and to manage the computer hardware resources efficiently."
  },
  {
    id: "os_scribd_76",
    diff: "medium",
    topic: "Memory Management",
    q: "What is thrashing?",
    opts: ["Low memory", "High CPU usage", "High page fault rate", "Disk crash"],
    ans: 2,
    exp: "Thrashing occurs when a computer's virtual memory subsystem is in a constant state of paging (high page fault rate), rapidly exchanging data in memory for data on disk, severely degrading performance."
  },
  {
    id: "os_scribd_77",
    diff: "medium",
    topic: "Security",
    q: "What is the default file permission in Linux?",
    opts: ["755", "644", "777", "600"],
    ans: 1,
    exp: "In many Linux distributions, the default permissions for newly created files are 644 (rw-r--r--), meaning the owner can read/write, and others can only read. Directories are typically 755."
  },
  {
    id: "os_scribd_78",
    diff: "medium",
    topic: "I/O Systems",
    q: "Which device requires polling?",
    opts: ["Mouse", "Disk", "Keyboard", "Timer"],
    ans: 2,
    exp: "While modern keyboards typically use interrupts, in basic or legacy I/O controller scenarios, slow/simple devices were historically polled to see if a key was pressed."
  },
  {
    id: "os_scribd_79",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "Round Robin scheduling is characterized by:",
    opts: ["Long waiting time", "Fair time allocation", "Long burst time", "Starvation"],
    ans: 1,
    exp: "Round Robin assigns a fixed time quantum to each process in equal portions and in circular order, ensuring fair time allocation and preventing starvation."
  },
  {
    id: "os_scribd_80",
    diff: "easy",
    topic: "Memory Management",
    q: "Segmentation allows programs to be divided into:",
    opts: ["Blocks", "Pages", "Logical segments", "Files"],
    ans: 2,
    exp: "Segmentation is a memory management technique that divides the memory into variable-sized logical segments (like code, data, stack) that mirror the user's view of a program."
  },
  {
    id: "os_scribd_81",
    diff: "medium",
    topic: "Process Management",
    q: "The IPC mechanism not used for unrelated processes is:",
    opts: ["Message queue", "Shared memory", "Pipe", "Signals"],
    ans: 2,
    exp: "Standard unnamed pipes (often just called 'pipes') only allow unidirectional communication between related processes (e.g., parent and child). Named pipes (FIFOs) or shared memory are used for unrelated processes."
  },
  {
    id: "os_scribd_82",
    diff: "easy",
    topic: "Basics",
    q: "What is the bootloader?",
    opts: ["Program to execute user code", "BIOS", "Program that loads OS", "Scheduler"],
    ans: 2,
    exp: "A bootloader (or bootstrap program) is a small program placed in ROM/EEPROM whose only job is to load the operating system kernel into main memory and start its execution."
  },
  {
    id: "os_scribd_83",
    diff: "medium",
    topic: "CPU Scheduling",
    q: "Multilevel queue scheduling is:",
    opts: ["Preemptive", "Non-preemptive", "Both", "None"],
    ans: 2,
    exp: "Multilevel queue scheduling can be either preemptive or non-preemptive depending on how the individual queues are configured and how the scheduler decides to switch between different queue priorities."
  },
  {
    id: "os_scribd_84",
    diff: "easy",
    topic: "Synchronization",
    q: "Mutex is used for:",
    opts: ["Memory management", "Process scheduling", "Mutual exclusion", "Deadlock detection"],
    ans: 2,
    exp: "Mutex stands for 'Mutual Exclusion Object'. It is used to ensure that only one thread can access a critical section of code or a shared resource at a given time."
  },
  {
    id: "os_scribd_85",
    diff: "medium",
    topic: "Process Management",
    q: "What does the 'kill' command do in Unix?",
    opts: ["Remove file", "Delete user", "Send signal to process", "Kill I/O"],
    ans: 2,
    exp: "The 'kill' command sends a signal to a process (often SIGTERM or SIGKILL to terminate it, but it can send any valid signal like SIGSTOP or SIGCONT)."
  },
  {
    id: "os_scribd_86",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "What is starvation?",
    opts: ["Process in deadlock", "Long wait due to low priority", "CPU overload", "Disk error"],
    ans: 1,
    exp: "Starvation (or indefinite blocking) is a situation where a process is ready to run but is perpetually denied the CPU because other higher-priority processes keep arriving."
  },
  {
    id: "os_scribd_87",
    diff: "easy",
    topic: "Basics",
    q: "UNIX is a:",
    opts: ["Multitasking", "Multiuser", "Time-sharing", "All of the above"],
    ans: 3,
    exp: "UNIX was designed from the ground up to be a multi-user, multi-tasking, time-sharing operating system."
  },
  {
    id: "os_scribd_88",
    diff: "hard",
    topic: "Basics",
    q: "Which of the following is true about the microkernel?",
    opts: ["Entire OS runs in kernel mode", "Only core services run in kernel", "No user space", "Everything runs in ring 0"],
    ans: 1,
    exp: "In a microkernel architecture, only essential core services (like minimal IPC, basic scheduling, and memory management) run in kernel space. Other services like file systems and device drivers run in user space."
  },
  {
    id: "os_scribd_89",
    diff: "medium",
    topic: "Process Management",
    q: "What is the stack used for in processes?",
    opts: ["Save I/O", "Store instructions", "Store function calls and local vars", "Load files"],
    ans: 2,
    exp: "The stack is a memory segment in a process used to store temporary data such as function parameters, return addresses, and local variables during execution."
  },
  {
    id: "os_scribd_90",
    diff: "medium",
    topic: "CPU Scheduling",
    q: "Which data structure is used for scheduling?",
    opts: ["Stack", "Queue", "Tree", "Graph"],
    ans: 1,
    exp: "Queues are the fundamental data structure used in OS scheduling (e.g., Ready Queue, Waiting Queue, Device Queues), often implemented as priority queues."
  },
  {
    id: "os_scribd_91",
    diff: "easy",
    topic: "Process Management",
    q: "A process terminates when it:",
    opts: ["Gets killed", "Completes execution", "Faces fatal error", "Any of the above"],
    ans: 3,
    exp: "A process can terminate normally (completing execution via exit()), or abnormally (due to a fatal error/segmentation fault, or being killed by a signal from another process)."
  },
  {
    id: "os_scribd_92",
    diff: "easy",
    topic: "Basics",
    q: "A shell is a:",
    opts: ["Kernel", "Command interpreter", "Device driver", "Memory unit"],
    ans: 1,
    exp: "A shell is a user interface for access to an operating system's services. In general, operating system shells use either a command-line interface (CLI) or graphical user interface (GUI)."
  },
  {
    id: "os_scribd_93",
    diff: "easy",
    topic: "Security",
    q: "In UNIX, which command is used to change file permissions?",
    opts: ["chmod", "chown", "mv", "ls"],
    ans: 0,
    exp: "'chmod' (change mode) modifies the read, write, and execute permissions of a file or directory. 'chown' changes the owner."
  },
  {
    id: "os_scribd_94",
    diff: "medium",
    topic: "Deadlocks",
    q: "Deadlock occurs when:",
    opts: ["Processes wait for each other", "CPU is idle", "File system crashes", "Cache is full"],
    ans: 0,
    exp: "Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process."
  },
  {
    id: "os_scribd_95",
    diff: "medium",
    topic: "File Systems",
    q: "Which one is not a file allocation method?",
    opts: ["Linked", "Indexed", "Contiguous", "Hashed"],
    ans: 3,
    exp: "Contiguous, Linked, and Indexed are the three primary methods used by the OS to allocate disk space to files. Hashed is a data access technique, not typically a file allocation strategy."
  },
  {
    id: "os_scribd_96",
    diff: "easy",
    topic: "CPU Scheduling",
    q: "CPU burst time is:",
    opts: ["Time used in I/O", "Time process spends in CPU", "Idle time", "Total time to complete process"],
    ans: 1,
    exp: "The CPU burst time is the amount of time a process requires to execute continuously on the CPU before it needs to perform I/O or terminates."
  },
  {
    id: "os_scribd_97",
    diff: "medium",
    topic: "CPU Scheduling",
    q: "The 'nice' value in Unix affects:",
    opts: ["Memory usage", "File size", "Process priority", "CPU speed"],
    ans: 2,
    exp: "The 'nice' command maps to a process priority value in Linux/Unix. A higher 'nice' value makes the process 'nicer' to others, meaning it gets lower CPU priority."
  },
  {
    id: "os_scribd_98",
    diff: "medium",
    topic: "Memory Management",
    q: "Which is not a fragmentation type?",
    opts: ["Internal", "External", "Global", "None"],
    ans: 2,
    exp: "Internal fragmentation and External fragmentation are the two known types of memory fragmentation. There is no 'Global fragmentation'."
  },
  {
    id: "os_scribd_99",
    diff: "easy",
    topic: "Basics",
    q: "The command to check system uptime in Unix is:",
    opts: ["time", "uptime", "clock", "boot"],
    ans: 1,
    exp: "The 'uptime' command in Unix-like operating systems displays how long the system has been running since its last reboot."
  },
  {
    id: "os_scribd_100",
    diff: "medium",
    topic: "Memory Management",
    q: "In demand paging, page fault occurs when:",
    opts: ["Page is in memory", "Page not in memory", "Page is swapped", "Frame is allocated"],
    ans: 1,
    exp: "A page fault occurs when a program attempts to access a page that is mapped in its virtual address space, but is not currently loaded in the physical memory (RAM)."
  }
];
