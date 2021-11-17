const image = new Image();
image.crossOrigin = "Anonymous";
image.src = "rise_of_ravens_slim_transparent.png"


image.addEventListener("load", () => {
  console.log("Image loaded")

  const canvas = document.getElementById("canvasRain");
  const ctx = canvas.getContext("2d");
  const ratio = image.height / image.width;
  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.width * ratio;

  const numberOfParticles = 5000;
  let particlesArray = [];
  const detail = 1;

  let counter = 0;
  setInterval(() => {
    counter++
  }, [500])

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

  try {
    localStorage.setItem("image", canvas.toDataURL("image/png"));
  }
  catch (err) {
    console.log("Error: " + err);
  }

  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let imMap = []
  for (let x = 0; x < canvas.width; x += detail) {
    let row = [];
    for (let y = 0; y < canvas.height; y += detail) {
      const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
      const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
      const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
      const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
      const brightness = calculateBrightness(red, green, blue) / 100;

      row.push({
        red: red,
        green: green,
        blue: blue,
        color: color,
        brightness: brightness
      })
    }
    imMap.push(row);
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
      this.base = Math.random() * detail + 0.5;
      this.size = this.base;
      this.speed = 0;
      this.velocity = Math.random() * Math.random();
    }

    update() {
      if (getMapPos(this.x, this.y) != undefined)
        this.speed = getMapPos(this.x, this.y).brightness;

      this.y -= ((2.55 - this.speed) + this.velocity) * 0.5;

      if (counter % 20 === 0) {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
      }


      // if (this.y >= canvas.height || this.y <= 0 || this.x >= canvas.width || this.x <= 0) {
      //   this.x = Math.random() * canvas.width;
      //   this.y = canvas.height;
      // }
    }

    draw() {
      ctx.beginPath();
      let red;
      let green;
      let blue;
      if (getMapPos(this.x, this.y) != undefined) {
        red = getMapPos(this.x, this.y).red;
        green = getMapPos(this.x, this.y).green;
        blue = getMapPos(this.x, this.y).blue;
      }
      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      if (this.size <= 0)
        this.size = this.base;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const init = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  init();


  const animate = () => {
    ctx.globalAlpha = 0.02;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.2;
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed * 0.5
      particlesArray[i].draw();
    }

    requestAnimationFrame(animate);
  }

  animate();

  //startRecording();

  function startRecording() {
    const chunks = []; // here we will store our recorded media chunks (Blobs)
    const stream = canvas.captureStream(); // grab our canvas MediaStream
    const rec = new MediaRecorder(stream); // init the recorder
    // every time the recorder has new data, we will store it in our array
    rec.ondataavailable = e => chunks.push(e.data);
    // only when the recorder stops, we construct a complete Blob from all the chunks
    rec.onstop = e => exportVid(new Blob(chunks, {type: 'video/webm'}));
    
    rec.start();
    setTimeout(()=>rec.stop(), 10000); // stop recording in 3s
  }

  function exportVid(blob) {
    const vid = document.createElement('video');
    vid.src = URL.createObjectURL(blob);
    vid.controls = true;
    document.body.appendChild(vid);
    const a = document.createElement('a');
    a.download = 'myvid.webm';
    a.href = vid.src;
    a.textContent = 'download the video';
    document.body.appendChild(a);
  }

  function calculateBrightness(red, green, blue) {
    return Math.sqrt(
      (red * red) * 0.299 +
      (green * green) * 0.587 +
      (blue * blue) * 0.114
    );
  }

  function getMapPos(x, y) {
    if (imMap[Math.floor(x / detail)] && imMap[Math.floor(x / detail)][Math.floor(y / detail)])
      return imMap[Math.floor(x / detail)][Math.floor(y / detail)];
    else
      return undefined;
  }


}, false)