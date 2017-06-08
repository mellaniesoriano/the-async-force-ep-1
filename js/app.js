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

  function getElements(id, objVal) {
    var getElement = document.getElementById(id);
    getElement.innerHTML = objVal;
  }

  function makeListElements(type, className, content, appendTarget) {
    var newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerHTML = content;
    appendTarget.appendChild(newElement);
  }

  function createFilmRequest(url, id, propertyName) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', getFilms);
    oReq.open('GET', url);
    oReq.send();

    function getFilms() {
      var response = JSON.parse(this.responseText);
      var displayFilmList = document.querySelector(id);

      for ( var i = 0; i < response.results.length; i++ ) {
        makeListElements('h2', 'filmTitle', response.results[i][propertyName], displayFilmList);
      }
    }

  }




  createPersonRequest('http://swapi.co/api/people/4/', '#person4Name', 'name');
   createPersonRequest('http://swapi.co/api/people/4/', '#person4HomeWorld', 'homeworld');
   createPersonRequest('http://swapi.co/api/people/14/', '#person14Name', 'name');
   createPersonRequest('http://swapi.co/api/species/1/', '#person14Species', 'name');

   createFilmRequest('http://swapi.co/api/films/', '#filmList', 'title');


})();