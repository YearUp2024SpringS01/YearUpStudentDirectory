"use strict";



window.onload = () => {

    const studentListRow = document.getElementById("studentListRow");

    console.log("onload");


    for(let student of students){
        let studentColumnElement = createStudentColumnElement(student);
        studentListRow.appendChild(studentColumnElement);
    }


};


{/* <div id="studentListRow" class="row">
<div class="col">
    <div class="card studentcard">
        <img src="https://picsum.photos/200/200?random=1" class="card-img-top" alt="Mireya Avila">
        <div class="card-body">
          <h5 class="card-title">Mireya Avila</h5>
          <p class="card-text">
            <a href="mailto://mavila@appdev.yearup.org">mavila@appdev.yearup.org</a>
          </p>
          <p>
            <a href="https://github.com/mireyaavila01" target="_blank">https://github.com/mireyaavila01</a>
          </p>

          <a href="#" class="btn btn-primary">Learn More about Mireya Avila</a>
        </div>
      </div>
</div> */}

function createStudentColumnElement(student){
    let studentColumnDiv = document.createElement("div");
    
    studentColumnDiv.className = "col";


    let studentCardDiv = document.createElement("div");
    studentCardDiv.className = "card studentcard";
    studentCardDiv.innerHTML = student.name;

    studentColumnDiv.appendChild(studentCardDiv);

    let studentImage = document.createElement("img");
    studentImage.src = student.imageurl;
    studentImage.className = "card-img-top";
    studentImage.alt = student.name;

    studentCardDiv.appendChild(studentImage);











    return studentColumnDiv;
}