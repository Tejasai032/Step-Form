// ===== Sections =====
var personal = document.getElementById("PersonalInfo");
var education = document.getElementById("EducationInfo");
var experience = document.getElementById("ExperienceInfo");

// ===== Progress =====
var page1 = document.getElementById("Page1");
var page2 = document.getElementById("Page2");
var page3 = document.getElementById("Page3");

// ===== Buttons =====
var next1 = document.getElementById("Next");
var prev1 = document.getElementById("Prev");
var next2 = document.getElementById("next");
var prev2 = document.getElementById("PrevExp");

// ===== Initial View =====
personal.style.display = "flex";
education.style.display = "none";
experience.style.display = "none";

page1.classList.add("active");

// ================= PERSONAL INFO VALIDATION =================
next1.addEventListener("click", function (e) {
    e.preventDefault();

    var fname = document.getElementById("FName").value.trim();
    var lname = document.getElementById("LName").value.trim();
    var dob = document.getElementById("DOB").value.trim();
    var fatherName = document.getElementById("FatherName").value.trim();
    var motherName = document.getElementById("MotherName").value.trim();
    var emergencyNumber = document.getElementById("EmergencyNumber").value.trim();
    var phone = document.getElementById("PhoneNo").value.trim();
    var email = document.getElementById("MailID").value.trim();
    var address = document.getElementById("address").value.trim();

    if (fname === "" || lname === "") {
        alert("First and Last name required");
        return;
    }

     if (dob === null || dob === "") {
        alert("Enter Date of Birth");
        return;
    }

    if (fatherName === "") {
        alert("Enter Father Name");
        return;
    }

    if (motherName === "") {
        alert("Enter Mother Name");
        return;
    }

    if (emergencyNumber === "" || isNaN(emergencyNumber) || emergencyNumber.length !== 10) {
        alert("Enter valid Emergency Number");
        return;
    }

    if (isNaN(phone) || phone.length !== 10) {
        alert("Enter valid 10 digit phone number");
        return;
    }


    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Enter valid email address");
        return;
    }


    if (address.length < 10) {
        alert("Address should be minimum 10 characters");
        return;
    }

    personal.style.display = "none";
    education.style.display = "flex";

    page1.classList.remove("active");
    page2.classList.add("active");
});

// ================= EDUCATION INFO VALIDATION =================
next2.addEventListener("click", function (e) {
    e.preventDefault();

    // ===== Higher Education =====
    var degree = document.getElementById("Degree").value;
    var course = document.getElementById("Course").value;
    var college = document.getElementById("CollegeName").value.trim();
    var yop = document.getElementById("YOP").value;
    var percent = document.getElementById("Percentage").value;

    // ===== Inter =====
    var interBoard = document.getElementById("interboard").value;
    var interSchool = document.getElementById("interschool").value.trim();
    var interYop = document.getElementById("interyop").value;
    var interPercent = document.getElementById("interpercentage").value;

    // ===== SSC =====
    var sscBoard = document.getElementById("sscboard").value;
    var sscSchool = document.getElementById("sscschool").value.trim();
    var sscYop = document.getElementById("sscyop").value;
    var sscPercent = document.getElementById("sscpercentage").value;

    // ===== VALIDATIONS =====
    if (degree === "" || course === "") {
        alert("Please select Degree and Course");
        return;
    }

    if (college === "") {
        alert("Enter College Name");
        return;
    }

    if (yop.length !== 4) {
        alert("Enter valid Higher Education Year of Passing");
        return;
    }

    if (percent < 0 || percent > 100 || percent === "") {
        alert("Higher Education Percentage must be 0 to 100");
        return;
    }

    if (interBoard === "" || interSchool === "" || interPercent === "") {
        alert("Please fill Inter details");
        return;
    }

    if (interYop.length !== 4) {
        alert("Enter valid Inter Year of Passing");
        return;
    }

    if (interPercent < 0 || interPercent > 100 || interPercent === "") {
        alert("Inter Percentage must be 0 to 100");
        return;
    }

    if (sscBoard === "" || sscSchool === "") {
        alert("Please fill SSC details");
        return;
    }

    if (sscYop.length !== 4) {
        alert("Enter valid SSC Year of Passing");
        return;
    }

    if (sscPercent < 0 || sscPercent > 100 || sscPercent === "") {
        alert("SSC Percentage must be 0 to 100");
        return;
    }

    // ===== MOVE TO EXPERIENCE =====
    education.style.display = "none";
    experience.style.display = "flex";

    page2.classList.remove("active");
    page3.classList.add("active");
});

// ================= PREVIOUS BUTTONS =================
prev1.addEventListener("click", function (e) {
    e.preventDefault();
    education.style.display = "none";
    personal.style.display = "flex";

    page2.classList.remove("active");
    page1.classList.add("active");
});

prev2.addEventListener("click", function (e) {
    e.preventDefault();
    experience.style.display = "none";
    education.style.display = "flex";

    page3.classList.remove("active");
    page2.classList.add("active");
});

// ================= FINAL SUBMIT =================
document.getElementById("UserForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var company = document.getElementById("Company").value.trim();
    var role = document.getElementById("Role").value.trim();
    var exp = document.getElementById("Experience").value;
    var details = document.getElementById("ExpDetails").value.trim();

    if (company === "" || role === "") {
        alert("Company and Role required");
        return;
    }

    if (exp < 0) {
        alert("Experience cannot be negative");
        return;
    }

    if (details.length < 10) {
        alert("Experience description minimum 10 characters");
        return;
    }

    alert("Form submitted successfully ✅");
});
