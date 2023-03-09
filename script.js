const ifDashboard = document.getElementById("ifDashboard");
const URL = "https://5kxkhs7v2h.execute-api.ap-south-1.amazonaws.com/dev/qsembeddemo-bnm?key=BNM-DEMO-QS-FEB-2023&mode=getAuthor";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function showViewer() {
  axios.get(URL)
    .then((response) => {
      console.log(response);
      ifDashboard.src = response.data.DashboardEmbedUrl;
    })
}

function showAdmin() {
  axios.get(URL)
    .then((response) => {
      console.log(response);
      ifDashboard.src = response.data.QEmbedUrl;
    })
}

document.addEventListener("DOMContentLoaded", function () {
  showViewer();
});
