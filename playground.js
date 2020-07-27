function createAnimalTradingCardHTML(animal) {
  const cardHTML = `<div class="card">
      <h3 class="name"> ${animal.name}</h3>
      <img src=" ${animal.name}.jpg" alt="${animal.name}" class="picture">
      <div class="description">
          <p class="fact">${animal.fact} </p>
          <ul class="details">
            <li><span class="bold">Scientific Name</span>:  ${animal.scientificName} </li>
            <li><span class="bold">Average Lifespan</span>: ${animal.lifespan} </li>
            <li><span class="bold">Average Speed</span>:  ${animal.speed} </li>
            <li><span class="bold">Diet</span>: ${animal.diet}</li>
          </ul>
          <p class="brief">${animal.summary}</p>
      </div>
  </div>`;

  return cardHTML;
}


function joinedLogger(level, sep) {
  // write your code here
  let f = (...messages)=>{
    let s = [];
    for( let msg of messages )
    {
        if(msg.level >= level)
        {
            s.push(msg.text)
        }
    }
    console.log(s.join(sep));
  }

  return f;
}


const myLog = joinedLogger(21, ',');

  let messages = [];
  messages.push({level: 40, text:'foo'});
  messages.push({level: 90, text:'bar'});

  myLog(...messages);
