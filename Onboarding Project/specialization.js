let role = document.getElementById("primary-role");
let submitBtn = document.getElementById("search-btn");

role.addEventListener("input", checkForm);

function checkForm() {
  if (role.value) {
    submitBtn.style.backgroundColor = "orange";
  } else {
    submitBtn.style.backgroundColor = "";
  }
}

window.onload = function () {
  let rightSection = document.getElementById("right-section");
  if (window.location.href.includes("extra-specializations.html")) {
    rightSection.style.backgroundImage = "url('assets/yoda.gif')";
    rightSection.style.position = "center";
  }
};

let secondaryRoles = [
  "Android Engineer",
  "Art Director",
  "Automation Developer",
  "Backend Developer",
];

let secondaryRolesBtn = document.getElementById("secondary-roles-btn");

let searchSecondaryRole = document.getElementById("secondary-role");

function search() {
  let searchValue = searchSecondaryRole.value.toLowerCase();

  let filteredRoles = secondaryRoles.filter((role) => {
    let rolName = role.textContent.toLowerCase();
    return rolName.includes(searchValue);
  });

  secondaryRoles.forEach((role) => {
    role.style.display = "none";
  });

  filteredRoles.forEach((role) => {
    role.style.display = "block";
  });
}

searchSecondaryRole.addEventListener("click", search);
