# Micro-task

A microtask is a type of asynchronous task that gets executed before any other pending macrotasks (like setTimeout, setInterval, or I/O tasks). 
Promises are part of the microtask queue, and they run after the current execution context but before macrotasks.

You can leverage microtasks with Promises to execute tasks immediately after the current JavaScript operation completes.