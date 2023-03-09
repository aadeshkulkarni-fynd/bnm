const ifDashboard = document.getElementById("ifDashboard");

const API_1 = "https://5kxkhs7v2h.execute-api.ap-south-1.amazonaws.com/dev/qsembeddemo-bnm?key=BNM-DEMO-QS-FEB-2023&mode=getAuthor";
const API_2 = "https://5kxkhs7v2h.execute-api.ap-south-1.amazonaws.com/dev/qsembeddemo-bnm?key=BNM-DEMO-QS-FEB-2023&mode=getAuthor";

function makeAPIcall(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      ifDashboard.src = json.DashboardEmbedUrl;
    });
}

function showViewer() {
  console.log("Called 1");
  makeAPIcall(API_1);
}

function showAdmin() {
  console.log("Called 2");
  makeAPIcall(API_2);
}
