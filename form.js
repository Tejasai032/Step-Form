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

    var fname = FName.value.trim();
    var lname = LName.value.trim();
    var dob = DOB.value;
    var fatherName = FatherName.value.trim();
    var motherName = MotherName.value.trim();
    var emergencyNumber = EmergencyNumber.value.trim();
    var phone = PhoneNo.value.trim();
    var email = MailID.value.trim();
    var addressVal = address.value.trim();

    if (fname === "" || lname === "") return alert("First and Last name required");
    if (dob === "") return alert("Enter Date of Birth");
    if (fatherName === "") return alert("Enter Father Name");
    if (motherName === "") return alert("Enter Mother Name");
    if (emergencyNumber.length !== 10) return alert("Enter valid Emergency Number");
    if (phone.length !== 10) return alert("Enter valid Phone Number");
    if (!email.includes("@") || !email.includes(".")) return alert("Enter valid Email");
    if (addressVal.length < 10) return alert("Enter valid Address");

    personal.style.display = "none";
    education.style.display = "flex";

    page1.classList.remove("active");
    page2.classList.add("active");
});

// ================= EDUCATION INFO =================
next2.addEventListener("click", function (e) {
    e.preventDefault();

    if (Degree.value === "" || Course.value === "") return alert("Select Degree & Course");
    if (CollegeName.value === "") return alert("Enter College Name");
    if (YOP.value.length !== 4) return alert("Enter valid Year of Passing");
    if (Percentage.value < 0 || Percentage.value > 100) return alert("Invalid Percentage");

    if (interboard.value === "" || interschool.value === "") return alert("Fill Inter Details");
    if (interyop.value.length !== 4) return alert("Invalid Inter YOP");
    if (interpercentage.value < 0 || interpercentage.value > 100) return alert("Invalid Inter Percentage");

    if (sscboard.value === "" || sscschool.value === "") return alert("Fill SSC Details");
    if (sscyop.value.length !== 4) return alert("Invalid SSC YOP");
    if (sscpercentage.value < 0 || sscpercentage.value > 100) return alert("Invalid SSC Percentage");

    education.style.display = "none";
    experience.style.display = "flex";

    page2.classList.remove("active");
    page3.classList.add("active");
});

// ================= SUBMIT =================
document.getElementById("UserForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (Company.value === "" || Role.value === "") return alert("Enter Company & Role");
    if (Experience.value < 0) return alert("Invalid Experience");
    if (ExpDetails.value.length < 10) return alert("Enter proper description");

    showPreview();
});

// ================= PREVIEW PAGE =================
function showPreview() {

    // 🔥 Remove flex & height lock from body so preview can scroll
    document.body.style.display = "block";
    document.body.style.height = "auto";
    document.body.style.alignItems = "unset";
    document.body.style.justifyContent = "unset";
    document.body.style.overflowY = "auto";
    document.body.style.background = "linear-gradient( 90.8deg, rgba(27,53,68,1) 2.2%, rgba(110,180,135,1) 84% )";

    // Hide form
    document.getElementById("FormContainer").style.display = "none";

    // Create preview container
    var preview = document.createElement("div");
    preview.style.width = "750px";
    preview.style.maxWidth = "95%";
    preview.style.margin = "30px auto";
    preview.style.padding = "25px";
    preview.style.background = "white";
    preview.style.borderRadius = "10px";
    preview.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    preview.style.fontFamily = "Arial";
    preview.style.lineHeight = "1.6";

    // Section heading
    function section(title) {
        return `
            <div style="text-align:center; margin:30px 0 15px;">
                <h2 style="margin-bottom:8px;">${title}</h2>
                <div style="width:60%; height:4px; margin:auto;
                background: linear-gradient(90deg,#1b3544,#6eb487); border-radius:5px;"></div>
            </div>
        `;
    }

    // Row
    function row(label, value) {
        return `
            <div style="display:grid; grid-template-columns:220px auto; margin:10px 0;">
                <div style="font-weight:bold;">${label}</div>
                <div>: ${value}</div>
            </div>
        `;
    }

    // Build preview
    var html = "";

    html += section("Personal Information");
    html += row("First Name", FName.value);
    html += row("Last Name", LName.value);
    html += row("Date of Birth", DOB.value);
    html += row("Father Name", FatherName.value);
    html += row("Mother Name", MotherName.value);
    html += row("Emergency Number", EmergencyNumber.value);
    html += row("Phone Number", PhoneNo.value);
    html += row("Email", MailID.value);
    html += row("Address", address.value);

    html += section("Education");
    html += row("Degree", Degree.value);
    html += row("Course", Course.value);
    html += row("College", CollegeName.value);
    html += row("Year of Passing", YOP.value);
    html += row("Percentage", Percentage.value + "%");

    html += section("Inter Details");
    html += row("Board", interboard.value);
    html += row("School", interschool.value);
    html += row("Year", interyop.value);
    html += row("Percentage", interpercentage.value + "%");

    html += section("SSC Details");
    html += row("Board", sscboard.value);
    html += row("School", sscschool.value);
    html += row("Year", sscyop.value);
    html += row("Percentage", sscpercentage.value + "%");

    html += section("Experience");
    html += row("Company", Company.value);
    html += row("Role", Role.value);
    html += row("Experience", Experience.value + " Years");
    html += row("Description", ExpDetails.value);

   html += `
    <div style="text-align:center; margin:40px 0; display:flex; justify-content:center; gap:20px;">

        <button onclick="location.reload()"
        style="padding:12px 40px; background:#9e9e9e; color:white;
        border:none; border-radius:6px; font-size:16px; cursor:pointer;">
        Edit Again
        </button>

        <button onclick="finalSubmit()"
        style="padding:12px 40px; background:#4caf50; color:white;
        border:none; border-radius:6px; font-size:16px; cursor:pointer;">
        Final Submit
        </button>

    </div>
`;


    preview.innerHTML = html;

    // Append to body
    document.body.appendChild(preview);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function finalSubmit() {
    swal({
        title: "Submitted Successfully 🎉",
        text: "Employee onboarding details have been saved!",
        icon: "success",
        button: "OK"
    }).then(() => {
        location.reload();   // Reset after submit
    });
}
