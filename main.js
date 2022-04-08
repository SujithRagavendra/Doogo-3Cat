
function starty(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ts4rCAyON/model.json", modelLoaded)
    
}
function modelLoaded(){
    console.log("Model Loaded Successfully")
    classifier.classify(gotResult)
}
function gotResult(error, result){
    if (error){
    console.log("error")
    }
    else{
        console.log(result)
        document.getElementById("icanhear").innerHTML="I Can Hear-"+result[0].label
        document.getElementById("lol").innerHTML="Accuracy Is-"+result[0].confidence.toFixed(3)
r=Math.floor(Math.random()*255)+1
g=Math.floor(Math.random()*255)+1
b=Math.floor(Math.random()*255)+1
document.getElementById("icanhear").style.color="rgb("+r+","+g+","+b+")"
document.getElementById("lol").style.color="rgb("+r+","+g+","+b+")"


    }

}
