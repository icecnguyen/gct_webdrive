document.getElementById("drop-area").addEventListener("dragover", (event) => {
    event.preventDefault();
});

document.getElementById("drop-area").addEventListener("drop", (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
});

document.getElementById("file-input").addEventListener("change", (event) => {
    handleFiles(event.target.files);
});

document.getElementById("browse-btn").addEventListener("click", () => {
    document.getElementById("file-input").click();
});

function handleFiles(files) {
    const fileList = document.getElementById("file-list");
    fileList.innerHTML = "";
    let fileNames = [];
    for (const file of files) {
        fileNames.push(`${file.name} <button class='remove-file' onclick='removeFile("${file.name}")'>X</button>`);
    }
    fileList.innerHTML = fileNames.join(", ");
}

function removeFile(fileName) {
    const fileList = document.getElementById("file-list");
    let files = fileList.innerHTML.split(", ");
    fileList.innerHTML = files.filter(file => !file.includes(fileName)).join(", ");
}

document.getElementById("upload-btn").addEventListener("click", () => {
    alert("Upload successful!");
});
