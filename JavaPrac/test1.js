function test(){
    document.getElementById('p_id').style.display='none'
}

function test1(){
    var name = document.getElementById('name_id').value;
    document.getElementById('p_id').innerHTML = "Your name is - " + name;
}

function test2(){
    var grade = document.getElementById('grade_input').value;

    if (grade >= 90){
        document.getElementById('grade_output').innerHTML = "You got an A"
    }

    else if(grade >= 80){
        document.getElementById('grade_output').innerHTML = "You got a B"
    }
    
    else if(grade >= 70){
        document.getElementById('grade_output').innerHTML = "You got a C"
    }
    
    else{
        document.getElementById('grade_output').innerHTML = "You failed"
    }
}
