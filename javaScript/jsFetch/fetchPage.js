function fetchPage(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
        document.querySelector('article').innerHTML = text;
      })
    });
  }
  if(location.hash){
    fetchPage(location.hash.substr(2));
  } else {
    fetchPage('welcome');
  }
