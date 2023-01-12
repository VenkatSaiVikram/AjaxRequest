const responseArea = document.getElementById("response");
const requestButton = document.getElementById("req-btn");
const progressBar = document.getElementById("progress-bar");
const progressPercentage = document.getElementById("progress-percentage");

requestButton.onclick = newRequest;

function newRequest() {
    progressBar.value = 0;
    progressPercentage.textContent = "0%";
    test()

    async function test() {
        const xhr = new XMLHttpRequest();
        xhr.open("get", "https://jsonplaceholder.typicode.com/photos");
        xhr.onloadend = (progress) => {
            const end = progress.loaded;

            main(end);

        }
        xhr.send();
    }

    function main(total) {
        const xhr = new XMLHttpRequest();
        xhr.open("get", "https://jsonplaceholder.typicode.com/photos");

        xhr.onprogress = (progress) => {
            const value = Math.floor((progress.loaded / total) * 100);
            progressBar.value = value;
            progressPercentage.textContent = String(value) + "%";
        }
    
        xhr.onloadend = (progress) => {
            const value = Math.floor((progress.loaded / total) * 100);
            progressBar.value = value;
            progressPercentage.textContent = String(value) + "%";
            console.log(typeof JSON.parse(xhr.response));        
        }
    
        xhr.send();
    }

    function render(str) {

    }
}