song=""
song1 ="";
song2 ="";
leftWristscore= 0;
rightWristscore =0;
function preload (){
song1=loadSound("music.mp3")
song2=loadSound("music2.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center();
    
    video=createCapture(VIDEO)
    video.hide();

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000")
    stroke("#2596be")
    song=song1.isPlaying();
        if (leftWristscore>0.2) {
            song1.stop();
            if (song==false) {
                song2.play();
            } else {
                document.getElementById("volume").innerHTML="playing song 2"
            }
        }
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristscore=results[0].pose.keypoints[9].score
        console.log(leftWristscore);
        rightWristscore=results[0].pose.keypoints[10].score
        console.log(rightWristscore);
        
    }
}