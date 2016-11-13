function addRow(){
  $('#tabla-hijos tr:last').after('<tr>' +
    '<td>' +
        '<select class="form-control">' +
          '<option>2012</option>' +
          '<option>2011</option>' +
          '<option>2010</option>' +
          '<option>2009</option>' +
          '<option>2008</option>' +
          '<option>2007</option>' +
          '<option>2006</option>' +
          '<option>2005</option>' +
        '</select>' +
    '</td>' +
    '<td>' +
      '<select class="form-control">' +
        '<option>2012</option>' +
        '<option>2011</option>' +
        '<option>2010</option>' +
        '<option>2009</option>' +
        '<option>2008</option>' +
        '<option>2007</option>' +
        '<option>2006</option>' +
        '<option>2005</option>' +
      '</select>' +
    '</td>' +
    '<td>' +
        '<input type="radio" name="discapacidad" value="33-65">' +
  '  </td>' +
    '<td>' +
      '<input type="radio" name="discapacidad" value="65">' +
    '</td>' +
    '<td>' +
      '<input type="radio" name="ayuda" value="ayuda">' +
    '</td>' +
    '<td>' +
      '<input type="radio" name="convivencia" value="convivencia">' +
    '</td>' +
    '<td>' +
      '<button type = "button" class="btn btn-danger" onclick="removeRow(this)">Borrar</button>' +
    '</td>' +
  '</tr>');

}

function removeRow(fila){
    var i = fila.parentNode.parentNode.rowIndex;
    document.getElementById("tabla-hijos").deleteRow(i);
}
