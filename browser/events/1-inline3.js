const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    alert('Hello World');
}, false); //userCapture = false, default value. UserCapture is a boolean value that specifies whether the event should happen in the capturing or bubbling phase. If true, the event will be executed in
// the capturing phase. If false, the event will be executed in the bubbling phase.