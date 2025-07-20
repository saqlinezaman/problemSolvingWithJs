function saveData(){
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const course = document.getElementById('course').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const subjects = Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(cb=>cb.value);
    
    // save in local storage
    localStorage.setItem("name",name);
    localStorage.setItem("address",address);
    localStorage.setItem("course",course);
    localStorage.setItem("gender",gender);
    localStorage.setItem("subjects", JSON.stringify(subjects));

    // Redirect to result page
      window.location.href = "result.html";
}
