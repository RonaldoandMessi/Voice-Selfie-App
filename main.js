var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function startselfie(){
    document.getElementById("tie").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    content=event.results[0][0].transcript;

    document.getElementById("tie").innerHTML=content;
    speechData();
}

function speechData(){
    if (content=="take my selfie"){
        console.log(content);
        speak_data="Taking your selfie in 5 seconds!";
        setTimeout(function(){
            take_snapshot();
            save();
        },5000);
    }
    else {
    speak_data="Please say take my selfie";
    }
    var synth=window.speechSynthesis;//API
    //speak_data=document.getElementById("tie").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);//function of that API which converts text to speech
    synth.speak(utterThis);
    Webcam.attach(camera);

}

Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

var camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="screenshot" src="'+data_uri+'">';
    });
}

function save(){
link=document.getElementById("link");
image=document.getElementById("screenshot").src;
link.href=image;
link.click();
}