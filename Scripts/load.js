let users = data; 


// forLoop works for a number of times, forEach is more efficient //
// += is used to leave the current value but also add to it //
users.forEach (function(element){ // brackets for parameter
document.getElementById('users').innerHTML += "<h3>"+element.name+"</h3>"; // <h3> tags in ""
document.getElementById('users').innerHTML += "<h4>"+element.age+ " years old</h4>"; 
document.getElementById('users').innerHTML += "<p>Username: "+element.username+ "</p>"; 
document.getElementById('users').innerHTML += "<p>Password: "+element.password+ "</p>"; 
}); 



//can be used for reports, list of clients, invoices etc, employees leave, student absences//
function download (){
    let input = document.getElementById('input').value; 
    let  blob = new  Blob( [input],
        {"type":"text/plain;charset=utf=8"} 

    ); 
    saveAs (blob, "downloadedReport.txt"); 
}

//Blob represents a chunk of data that we will then save in a text file//
//curly brackets to create an object//