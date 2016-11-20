$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); //Inicializo todos los popover

    $('.buttonNext').click(function() {
      alert("Hola");
    });

    $('#modalFinalizar').on('click','.btn-primary', function () {

        $('#modalFinalizar').modal('hide');
        $('#modalFin').modal('show');

        setTimeout(function() { $("#modalFin").modal('hide'); }, 1500); //Cierro el modal a los 2 segundos

        $('#modalFin').on('hidden.bs.modal', function () { //Después de que el modal se haya escondido, recargo la página
          location.reload();
        });
    });
});

function validarNombre(inputNombre){
  $('#error-nom').hide();

  if (!$(inputNombre).val()) { //Compruebo si el campo esta vacío

    $(inputNombre).parent().removeClass('has-success');
    $(inputNombre).parent().addClass('has-error');
    $(inputNombre).after("<span id='error'>Campo vacío</span>");
    $('#error').css("color", "red");

  }else{

    var palabras = $(inputNombre).val().split(' ');

      if(palabras.length >= 2){ //Compruebo que tiene al menos un nombre y un apellido
        $('#error').hide();
        $(inputNombre).parent().removeClass('has-error');
        $(inputNombre).parent().addClass('has-success');
      }else{
        $('#error').hide();
        $(inputNombre).parent().removeClass('has-success');
        $(inputNombre).parent().addClass('has-error');
        $(inputNombre).after("<span id='error'>Debe introducir nombre y apellidos</span>");
        $('#error').css("color", "red");
      }
  }
}

function validarDni(dni){
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = $(dni).val().toString().toUpperCase();
  $('#error-nif').hide();

  if (!$(dni).val()){ //Compruebo si el campo esta vacío
    $('#error_dni').hide();
    $('#error-vacio').hide();
    $(dni).parent().removeClass('has-success');
    $(dni).parent().addClass('has-error');
    $(dni).after("<span id='error-vacio'>Campo vacío</span>");
    $('#error-vacio').css("color", "red");
  }else{
    if(!nifRexp.test(str)){
      $('#error_dni').hide();
      $('#error-vacio').hide();
      $(dni).parent().removeClass('has-success');
      $(dni).parent().addClass('has-error');
      $(dni).after("<span id='error_dni'>Formato DNI erróneo</span>");
      $('#error_dni').css("color", "red");
    }else{
      $('#error_dni').hide();
      $('#error-vacio').hide();
      $(dni).parent().removeClass('has-error');
      $(dni).parent().addClass('has-success');
    }
  }
}

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
      '<input type="checkbox">' +
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
