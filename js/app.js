(function(){

  function createPersonRequest(url, id, propertyName) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', getPerson);
    oReq.open('GET', url);
    oReq.send();

    function getPerson() {
      var response = JSON.parse(this.responseText);
      console.log(response);
      if ( Array.isArray(response[propertyName]) ) {
        for ( var i = 0; i < response[propertyName].length; i++ ) {
          createPersonRequest(response[propertyName][i], id, propertyName);
        }
      } else if ( response[propertyName].indexOf('http://') !== -1 ) {
        createPersonRequest(response[propertyName], id, 'name');
      } else {
        document.querySelector(id).innerHTML = response[propertyName];
      }
    }
   }

   createPersonRequest('http://swapi.co/api/people/4/', '#person4Name', 'name');
   createPersonRequest('http://swapi.co/api/people/4/', '#person4HomeWorld', 'homeworld');
   createPersonRequest('http://swapi.co/api/people/14/', '#person14Name', 'name');
   createPersonRequest('http://swapi.co/api/species/1/', '#person14Species', 'name');

  // function getElements(id, objVal) {
  //   var getElement = document.getElementById(id);
  //   getElement.innerHTML = objVal;
  // }

  // function createFilmList(func) {
  //   var response = JSON.parse(this.responseText);
  //   var displayFilmList = document.getElementById('filmList');
  //   console.log('results..', response);

  //   function makeListElements(type, className, content, appendTarget) {
  //     var newElement = document.createElement(type);
  //     newElement.className = className;
  //     newElement.innerHTML = content;
  //     appendTarget.appendChild(newElement);
  //   }

  //   for ( var i = 0; i < response.results.length; i++ ) {
  //     var createListElm = document.createElement('li');
  //     createListElm.className = 'film';
  //     displayFilmList.appendChild(createListElm);

  //     makeListElements('h2', 'filmTitle', response.results[i].title, createListElm);
  //     makeListElements('h3', 'planetName',  response.results[i].name, createListElm);

  //     for ( var k = 0; k < response.results[i].planets.length; k++ ){
  //     makeListElements('li', 'planet', response.results[i].planets[k], createListElm);

  //   }


  //   }

  // }



})();