const timeElement = [
    document.getElementById('dac-time'),
    document.getElementById('smd-time'),
    document.getElementById('os-time'),
    document.getElementById('lms-time'),
    document.getElementById('dtu-time'),
    document.getElementById('c1-time'),
    document.getElementById('c2-time'),
    document.getElementById('c3-time'),
    document.getElementById('aquifer-time'),
    document.getElementById('cmu1-time'),
];
const descriptionElement = [
    document.getElementById('dac-description'),
    document.getElementById('smd-description'),
    document.getElementById('os-description'),
    document.getElementById('lms-description'),
    document.getElementById('dtu-description'),
    document.getElementById('c1-description'),
    document.getElementById('c2-description'),
    document.getElementById('c3-description'),
    document.getElementById('aquifer-description'),
    document.getElementById('cmu1-description'),
];

function adjustHeight() {
    for (let index = 0; index < timeElement.length; index++) {
        timeElement[index].style.height = `${descriptionElement[index].offsetHeight + 40}px`;
    }
}

// Adjust height on load and on window resize
window.onload = adjustHeight;
window.onresize = adjustHeight;
