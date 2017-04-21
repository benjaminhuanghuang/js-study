function* counter()
{
    let count =1;
    yield;

    count+=yield;   // itr.next(5);
    yield;

    count++;
    return count;
}

const itr = counter();

console.log();

