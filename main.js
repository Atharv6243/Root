noseX= 0;
noseY= 0;
rightEarX= 0;
rightEarY= 0;

function preload()
{
clown_nose= loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
clown_wig= loadImage("clown_wig.png");
}

function setup()
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX -15, noseY -10, 30, 30);
    image(clown_wig, rightEarX - 35, rightEarY - 120, 120, 120);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log("poseNet model loaded");
}

function gotPoses(results)
{
if(results.length > 0)
    {
console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
rightEarX= results[0].pose.rightEar.x;
rightEarY= results[0].pose.rightEar.y;
console.log("nose x= " + noseX);
console.log("nose y= " + noseY);
console.log("rightEar x= " + rightEarX);
console.log("rightEar y= " + rightEarY);
    }
}