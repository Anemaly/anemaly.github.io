const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/1.png') {
    img1=true;
    myImage.setAttribute('src','images/3.png');
  } 
  else if (mySrc === 'images/2.png') {
    img1=false;
    myImage.setAttribute('src','images/3.png');
  }
  else {
    if(!img1) {
        myImage.setAttribute('src','images/2.png');
    }
    else {
        myImage.setAttribute('src','images/1.png');
    }
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(tried) {
    
    //if(!tried) {
    const myName = prompt('Please enter your name.');
    /*} else {
    //const myName = prompt('We asked nicely...');
    }
    Dunno why but this doesn't work for some reason*/
    
    if (!myName) {
    setUserName(t=true);
    }
    else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `HTML basics for ${myName}`;
    }
  }
if (!localStorage.getItem('name')) {
  setUserName(t=false);
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `HTML basics for ${storedName}`;
}
myButton.onclick = () => {
    setUserName(t=false);
  }
  
