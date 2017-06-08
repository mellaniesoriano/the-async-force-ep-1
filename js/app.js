
(function(){

  function getElements(id, objVal) {
    var getElement = document.getElementById(id);
    getElement.innerHTML = objVal;
  }

  function darthVader(func) {
    var response = JSON.parse(this.responseText);
    console.log(response);

    getElements('person4Name', response.name);
    getElements('person4HomeWorld', response.species);
  }

  function hanSolo(func) {
    var response = JSON.parse(this.responseText);
    console.log(response);

    getElements('person14Name', response.name);
    getElements('person14Species', response.species);
  }


  function createRequest(url, func) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', func);
    oReq.open('GET', url);
    oReq.send();
  }


createRequest('http://swapi.co/api/people/4/', darthVader);
createRequest('http://swapi.co/api/people/14/', hanSolo);
createRequest('http://swapi.co/api/films/', films);

})();