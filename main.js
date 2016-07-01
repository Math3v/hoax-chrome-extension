window.onload = function() {
  var domain = window.document.domain

  if( domain.indexOf('www.') != -1 ) {
    var tokens = domain.split('.')
    domain = tokens[1] + '.' + tokens[2]
  }

  console.log( domain, pages[domain])

  if( pages[domain] ) {
    var body = document.body.innerHTML
    var color = pages[domain] > 8 ? 'red' : 'orange';
    document.body.innerHTML = 
      "<div class='warn "+color+"'>Nachádzate sa na podozrivej stránke s konšpiračným obsahom. Pravdepodobnosť: "+
      pages[domain]+
      "/10<a href='#' onclick='parentNode.remove()' class='right'>&#10007;</a></div>"+
      body
  }
}

function hide() {

}