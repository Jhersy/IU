$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function addRow(){

  $('#tabla-hijos tr:last').after('<tr>' +
    '<td>' +
        '<select class="form-control">' +
          '<option></option>' +
          '<option>2016</option>' +
          '<option>2015</option>' +
          '<option>2014</option>' +
          '<option>2013</option>' +
          '<option>2012</option>' +
          '<option>2011</option>' +
          '<option>2010</option>' +
        '</select>' +
    '</td>' +
    '<td>' +
      '<select class="form-control">' +
          '<option></option>' +
          '<option>2016</option>' +
          '<option>2015</option>' +
          '<option>2014</option>' +
          '<option>2013</option>' +
          '<option>2012</option>' +
          '<option>2011</option>' +
          '<option>2010</option>' +
      '</select>' +
    '</td>' +
    '<td>' +
        '<select class="form-control">' +
        '<option>Ninguna</option>' +
        '<option>Entre 35% y 65%</option>' +
        '<option>Mayor o igual a 65%</option>' +
  '  </td>' +
    '<td>' +
      '<input type="checkbox" name="ayuda" value="ayuda">' +
    '</td>' +
    '<td>' +
      '<input type="checkbox" name="convivencia" value="convivencia">' +
    '</td>' +
    '<td>' +
      '<button type = "button" class="btn btn-danger" onclick="removeRow(this)">Borrar</button>' +
    '</td>' +
  '</tr>');

}

function addRowAscendientes(){

  $('#tabla-ascendientes tr:last').after('<tr>' +
    '<td>' +
        '<select class="form-control">' +
          '<option></option>' +
          '<option>1950</option>' +
          '<option>1949</option>' +
          '<option>1948</option>' +
          '<option>1947</option>' +
          '<option>1946</option>' +
          '<option>1945</option>' +
          '<option>1944</option>' +
          '<option>1943</option>' +
        '</select>' +
    '</td>' +
    '<td>' +
          '<select class="form-control">' +
          '<option>Ninguna</option>' +
          '<option>Entre 35% y 65%</option>' +
          '<option>Mayor o igual a 65%</option>' +
  '  </td>' +
    '<td>' +
      '<input type="checkbox" name="ayuda" value="ayuda">' +
    '</td>' +
    '<td>' +
      '<input type="text">' +
    '</td>' +
    '<td>' +
      '<button type = "button" class="btn btn-danger" onclick="removeRowAscendientes(this)">Borrar</button>' +
    '</td>' +
  '</tr>');
}

function removeRow(fila){
    var i = fila.parentNode.parentNode.rowIndex;
    document.getElementById("tabla-hijos").deleteRow(i);
}

function removeRowAscendientes(fila){
    var i = fila.parentNode.parentNode.rowIndex;
    document.getElementById("tabla-ascendientes").deleteRow(i);
}
