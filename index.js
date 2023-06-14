function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds=date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = {hours,minutes,seconds,ampm};
    console.log(strTime);
    return strTime;
  }
 
  
function updateTime()
{
  var date=new Date();
  var time=formatAMPM(date);
  var hours=document.getElementById("hours");
  hours.innerHTML=time.hours;
  var minutes=document.getElementById("minutes");
  minutes.innerHTML=time.minutes;
  var seconds=document.getElementById("seconds");
  seconds.innerHTML=time.seconds;
  var ampm=document.getElementById("ampm");
  ampm.innerHTML=time.ampm;
}  

function addAlarm()
{
  var add=document.getElementById("setAlarm");
  add.style.display="flex";

}
function duplicate()
{
  // Get the element
  var elem = document.querySelector('#list0');

  // Create a copy of it
  var clone = elem.cloneNode(true);

  // Update the ID and add a class
  clone.id = 'list'+i;
  //clone.classList.add('text-large');

  // Inject it into the DOM
  elem.after(clone);
}

function addAlarmList()
{
   //for the first time

  var noAlarm=document.getElementById("noAlarmSet");
  noAlarm.style.display="none";
   
  //needs to happen everytime
  //time choosing button should bbe gone
  var add=document.getElementById("setAlarm");
  add.style.display="none";
  //fetch value from time input
  var alarmTime=document.getElementById("add").value;

  //call duplicate to create a new div if i>0 i.e. 0th div already exists
  if(i>0)
  duplicate();
  //display the alarm div
  var add=document.getElementById("list"+i);
  add.style.display="flex";
  //add value to alarm time
  //var alarm=document.getElementById("alarmTime");
  var alarm = document.querySelector("#list"+i+" p");
  alarm.innerHTML=alarmTime;

  //using localstorage for adding alarm
  console.log("Loaclstorage value "+localStorage.getItem(i)+" "+i);
  localStorage.setItem(i++,alarmTime);
  
}

function deleteAlarm(id)
{
  //need to fetch id of button that called this function
  var parent=id.id;
  console.log(parent);
  //wont delete the original list
  if(parent!='list0')
  {
    let bodyElement = document.querySelector("#alarmList");
    var elem = document.querySelector("#"+parent);
    console.log(elem);
    elem.remove();
  }
  else
  {
    var del=document.getElementById(parent);
    del.style.display="none";
  }
  
 
  // var noAlarm=document.getElementById("noAlarmSet");
  // noAlarm.style.display="inline";
 
}
function toDate(dStr,format) {
  var now = new Date();
  if (format == "h:m") {
  now.setHours(dStr.substr(0,dStr.indexOf(":")));
  now.setMinutes(dStr.substr(dStr.indexOf(":")+1));
  now.setSeconds(0);
  return now;
  }else 
  return "Invalid Format";
  }

function checkIfTime()
{
console.log("checking alarmtime");
var date=new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds=date.getSeconds();

//check all localstorage items
for (var i = 0; i < localStorage.length; ++i) {
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  console.log(key + ': ' + value);

  var alarmTime = toDate(value,"h:m");
  console.log("Alarm ringing time "+alarmTime);

  if(alarmTime.getHours()==hours && alarmTime.getMinutes()==minutes && seconds==0)
  window.alert("Alarm!!!!")

  }
}

var i=0;
setInterval(checkIfTime,1000);

setInterval(updateTime,1000);

 