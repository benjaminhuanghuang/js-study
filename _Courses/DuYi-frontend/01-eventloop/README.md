

## Chrome Source code

event loop
```cpp

// https://chromium.googlesource.com/chromium/src/base/+/master/message_loop/message_pump_default.cc

for(;;)
```

task type
```cpp
//https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/public/platform/task_type.h
enum class TaskType : unsigned char {

    // interaction task source.
    kUserInteraction = 2,

    kNetworking = 3,

    kWebSocket = 12,

}
```
微队列（high priority）
延时队列
交互队列

## microtask
https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint

- Promise
- MutationObserver