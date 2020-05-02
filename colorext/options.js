let page = document.getElementById("buttonDiv");

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors){
    for(let item of kButtonColors){
        let button = document.createElement('button');
        button.style.background = item;
        button.addEventListener('click', function(){
            //let clickedColor = event.target.value;
            //chrome.tabs.query wont work since these buttons are in the options page and not on the chrome tabs
            /*chrome.tabs.query({active: true, currentWindow : true}, function(tabs) {
              chrome.tabs.executeScript(
                  tabs[0].id,
                  {code: 'document.body.style.backgroundColor = "' + clickedColor + '";'});
            });*/
            
            //therefore using what the getting started page says : https://developer.chrome.com/extensions/getstarted#user_interface
            chrome.storage.sync.set({color : item});
        });
        page.appendChild(button);
    }
}

constructOptions(kButtonColors);



/*let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({backgroundColor: item}, function() {
        console.log(vals);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);*/