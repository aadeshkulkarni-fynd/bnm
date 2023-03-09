const ifDashboard = document.getElementById("ifDashboard");
const keyCode = document.getElementById("keyCode");
const btnSubmit = document.getElementById("btnSubmit");
let key = "";
const URL = "https://5kxkhs7v2h.execute-api.ap-south-1.amazonaws.com/dev/qsembeddemo-bnm";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

function showViewer(key) {
  console.log("Viewer")
  axios.get(`${URL}?key=${key}&mode=getAuthor`).then((response) => {
    console.log(response);
    ifDashboard.src = response.data.DashboardEmbedUrl;
    document.getElementsByClassName("overlay")[0].style.display='none';
    document.getElementsByClassName("container")[0].style.display='block';
  })
  .catch(err=>{
    document.getElementsByClassName("overlay")[0].style.display='flex';
    document.getElementsByClassName("container")[0].style.display='none';
    console.log("Error: ",err);
  })
}

function showAdmin(key) {
  console.log("Admin")
  axios.get(`${URL}?key=${key}&mode=getAuthor`).then((response) => {
    console.log(response);
    ifDashboard.src = response.data.QEmbedUrl;
    document.getElementsByClassName("overlay")[0].style.display='none';
    document.getElementsByClassName("container")[0].style.display='block';
  })
  .catch(err=>{
    document.getElementsByClassName("overlay")[0].style.display='flex';
    document.getElementsByClassName("container")[0].style.display='none';
    console.log("Error: ",err)
  })
}

// document.addEventListener("DOMContentLoaded", function () {
//   showViewer();
// });

btnSubmit.addEventListener("click", function () {
  if (toggleCheckbox.checked) {
    showAdmin(keyCode.value);
  } else {
    showViewer(keyCode.value);
  }
});

const toggleCheckbox = document.querySelector("#toggle-checkbox");

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    showAdmin();
  } else {
    showViewer();
  }
});
