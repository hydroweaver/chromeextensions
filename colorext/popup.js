let changeColor = document.getElementById("changeColor");
let reset = document.getElementById("reset");
let page = document.getElementById("buttonDiv"); 

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
constructOptions(kButtonColors);

function constructOptions(kButtonColors){
  for(let item of kButtonColors){
      let button = document.createElement('button');
      button.style.background = item;
      button.addEventListener('click', function(){
        console.log('Color set to ', item);
        chrome.storage.sync.set({color : item});
        getcolor();
      });
      page.appendChild(button);
  }
}

function getcolor(){
  chrome.storage.sync.get('color', function(data){
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
    reset.style.backgroundColor = 'white';
});
}



changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow : true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

  reset.onclick = function(element){
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow : true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  }