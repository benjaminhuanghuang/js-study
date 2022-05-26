// Change inline style
document.getElementById('target').style.color = 'tomato';

// create <style tag> and append it to DOM
const style = document.createElement('style');
style.innerHTML= `
  #target{
    color: blueviolet
  }
`;
document.head.appendChild(style);


// insert rule into style
const style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule('#target {color: red}')