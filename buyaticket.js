function btnEstudiante (){
    let input = document.getElementById("cantidadInput");
    input.value = 200;
    let inputDropdownList = document.getElementById("dropdownListUsuario");
    inputDropdownList.selectedIndex= 0
}

function btnEstudiante2 (){
    let input = document.getElementById("cantidadInput");
    input.value = 200;
    let inputDropdownList = document.getElementById("dropdownListUsuario");
    inputDropdownList.selectedIndex = 2
}

function btnEstudiante3 (){
    let input = document.getElementById("cantidadInput");
    input.value = 200;
    let inputDropdownList = document.getElementById("dropdownListUsuario");
    inputDropdownList.selectedIndex = 1
}


function btnResumen(){
    console.log("Estoy dentro.");
    let inputDropdownList = document.getElementById("dropdownListUsuario");
    let totalpayment = document.getElementById("totalpayment");
    if (inputDropdownList.selectedIndex == 0){totalpayment.value = 40}
    else if (inputDropdownList.selectedIndex == 2){totalpayment.value = 100}
    else if (inputDropdownList.selectedIndex == 1){totalpayment.value = 170}
}
    //Agarrar ell input total a pagar por id y escribirle dependiendo 
    //el .value que tenga en el dropdownlist, el valor con el decuento correspondiente