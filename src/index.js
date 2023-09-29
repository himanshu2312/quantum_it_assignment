const CurrentUser={
      name:"Dr.Alex Hess"
}

var lawIndex=-1;
var upIndex=3;

const User={
      name:"Roger Curtis",
      age: 36,
      information:[
            {
            key:"Gender",
            value: "Male"
            },
            {
            key:"Blood Type",
            value: "O+ (Positive)"
            },
            {
            key:"Allergies",
            value: "Milk, Penicilin"
            },
            {
            key:"Diseases",
            value: "Diabetes, Blood Disorders"
            },
            {
            key:"Height",
            value: "1.75m"
            },
            {
            key:"Weight",
            value: "65 kg"
            },
            {
            key:"Patient Id",
            value: "208898786"
            },
            {
            key:"Last Visit",
            value: "25th Oct, 2019"
            }
      ],
      prescriptions:[
            {
                  prescription: "Heart Diseases",
                  date:"25th August 2019",
                  duration:"3 months"
            },
            {
                  prescription: "Skin Care",
                  date:"8th October 2019",
                  duration:"2 months"
            }
      ],
      test:[
            {
                  test:"CT Scan -Full Body",
                  date:"12th February 2020"
            },
            {
                  test:"Creatine kinase T",
                  date:"12th February 2020"
            },
            {
                  test:"Eye Fluorescein Test",
                  date:"12th February 2020"
            }
      ],
      heartRate: "80bpm",
      bodyTemp:"36.5c",
      glucose:"100mg/dl"
}
const showInfo=()=>{
      document.getElementById("userName").innerHTML=CurrentUser.name;
      info();
      prescription();
      tests();
      statusInfo();
}

const updateIndex=()=>{
      lawIndex+=3;
      upIndex+=3;
      tests();
}

const info=()=>{
      User.information.map((info)=>{
            var tableRow= document.createElement("tr");
            var th=document.createElement("th");
            th.innerText=info.key+":"
            var td=document.createElement("td");
            var span=document.createElement("span");
            span.innerText=info.value
            td.appendChild(span)
            tableRow.appendChild(th);
            tableRow.appendChild(td);
            document.getElementById("informationBody").appendChild(tableRow);
      })
}

const prescription=()=>{
      User.prescriptions.map((prescription)=>{
            var tableRow= document.createElement("tr");
            
            var head=document.createElement("td");
            head.setAttribute('style','color:black;')
            var img=document.createElement("img");
            img.setAttribute('alt','file.png');
            var p=document.createElement("p");
            p.innerText=prescription.prescription;
            head.appendChild(img)
            head.appendChild(p)

            var td1=document.createElement("td");
            td1.innerHTML=prescription.date;
            var td2=document.createElement("td");
            td2.innerHTML=prescription.duration;

            tableRow.classList.add("prescriptionsContent")
            tableRow.appendChild(head)
            tableRow.appendChild(td1);
            tableRow.appendChild(td2);
            document.getElementById("prescriptionsDeails").appendChild(tableRow);
      })
}

const tests=()=>{
      User.test.map((test,index)=>{
            console.log(index)
            if(index<upIndex && index>lawIndex){
                  console.log("true")
                  var td=document.createElement("td");
                  var img=document.createElement("img");
                  img.setAttribute('alt','test.png');
                  var p=document.createElement("p");
                  var testName = document.createTextNode(test.test);
                  var br=document.createElement("br");
                  var span=document.createElement("span");
                  span.innerText=test.date;
      
                  p.appendChild(testName)
                  p.appendChild(br);
                  p.appendChild(span);
                  td.appendChild(img);
                  td.appendChild(p);
      
                  document.getElementById("testDetails").appendChild(td);
            }
            if(index==upIndex){
                  var btn=document.createElement("button")
                  btn.innerHTML=">"
                  btn.setAttribute('onclick','updateIndex()')

                  document.getElementById("testDetails").appendChild(btn);
            }
      })
}

const statusInfo=()=>{
      var hr=document.createElement("p");
      hr.innerHTML=User.heartRate
      var bt=document.createElement("p");
      bt.innerHTML=User.bodyTemp
      var g=document.createElement("p");
      g.innerHTML=User.glucose
      
      document.getElementById("heartRateCard").appendChild(hr);
      document.getElementById("temperatureCard").appendChild(bt);
      document.getElementById("glucoseCard").appendChild(g);
}