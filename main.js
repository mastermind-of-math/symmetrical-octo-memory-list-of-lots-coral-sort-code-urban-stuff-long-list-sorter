list_array = [];

function submitlist(){

    var something_one = document.getElementById("input_1").value ;  
    var something_two = document.getElementById("input_2").value ;  
    var something_three = document.getElementById("input_3").value ;  
    var something_four = document.getElementById("input_4").value ;
    list_array.push(something_one);
    list_array.push(something_two);
    list_array.push(something_three);
    list_array.push(something_four);
    document.getElementById("list").innerHTML = list_array;
    document.getElementById("something").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sortlist(){
    list_array.sort();
    console.log(list_array);
    document.getElementById("list").innerHTML = list_array;
}