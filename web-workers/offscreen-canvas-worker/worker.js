let canvasB = null;
let ctxWorker = null;

// Waiting to receive the OffScreenCanvas
self.onmessage = (event) => {
  if (event.data === "slowDown") {
    fibonacci(42);
  } else {
    canvasB = event.data.canvas;
    ctxWorker = canvasB.getContext("2d");
    startCounting();
  }
};

// Fibonacci function to add some delay to the thread
function fibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Start the counter for Canvas B
let counter = 0;
function startCounting() {
  setInterval(() => {
    redrawCanvasB();
    counter++;
  }, 100);
}

// Redraw Canvas B text
function redrawCanvasB() {
  ctxWorker.clearRect(0, 0, canvasB.width, canvasB.height);
  ctxWorker.fillStyle = "#ff0000"; // try changing this to "#fe0000"
  ctxWorker.fillRect(0, 0, canvasB.width, canvasB.height);
}
