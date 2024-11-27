function onMarkActive(e) {
  let projects = [
    "Underreacted",
    "HtmlViewer",
    "Blacker",
    "Beatsy",
    "Slacktivism",
    "Supplymint",
  ];
  let current = e.target.id;
  projects.map((_) => {
    let element = document.getElementsByClassName(_);
    let tabElement = document.getElementById(_);
    if (_ == current) {
      tabElement.classList.add("active");

      element[0].classList.add("dblock");
      element[0].classList.remove("dnone");
    } else {
      tabElement.classList.remove("active");

      element[0].classList.add("dnone");
      element[0].classList.remove("dblock");
    }
  });
}

function loadFunc() {
  let load = document.getElementById("loading");
  load.style.display = "none";
}
