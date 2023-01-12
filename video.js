const responseArea = document.getElementById("response");
const requestButton = document.getElementById("req-btn");
const progressBar = document.getElementById("progress-bar");
const progressPercentage = document.getElementById("progress-percentage");

requestButton.onclick = newRequest;

function newRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "./train.mp4");
    xhr.responseType = "blob";

    xhr.onprogress = (progress) => {
        const value = Math.floor((progress.loaded / progress.total) * 100);
        progressBar.value = value;
        progressPercentage.textContent = String(value) + "%";
    }

    xhr.onloadend = (progress) => {
        const value = Math.floor((progress.loaded / progress.total) * 100);
        progressBar.value = value;
        progressPercentage.textContent = String(value) + "%";

        responseArea.innerHTML = "";

        const video = document.createElement("video");

        const reader = new FileReader();

        reader.onloadend = () => {
            video.setAttribute("controls", true)
            video.src = reader.result;
        }

        reader.readAsDataURL(xhr.response)

        responseArea.appendChild(video);
        video.play();
    }

    xhr.send();
}

function render(src) {
    
}