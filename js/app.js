const firebaseConfig = {
    apiKey: "AIzaSyBttEQbkpTE0VtL8CHkJmESXDRG8HE5Euw",
    authDomain: "train-time-14e67.firebaseapp.com",
    databaseURL: "https://train-time-14e67.firebaseio.com",
    projectId: "train-time-14e67",
    storageBucket: "train-time-14e67.appspot.com",
    messagingSenderId: "624509235349",
    appId: "1:624509235349:web:b9f30a331980601e752b9c",
    measurementId: "G-BLCSD4S5YP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var trainData = firebase.database();
  // make data avaiable to send to firebase on every click for every input this will store all forms into trainname, destination, first train, and frequency
  $("#addTrainBtn").on("click",function(){
      var trainName = $("#trainNameInput").val().trim();
      var destination = $("#destinationInput").val().trim();
      var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
      var frequency = $("#frequencyInput").val().trim();

      var newTrain = {
          name: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
      }

      trainData.ref().push(newTrain);

      alert("Train Added"); 

      $("#trainNameInput").val("");
      $("#destinationInput").val("");
      $("#firstTrainInput").val("");
      $("#frequencyInput").val("");

      // add return false due to button type being submit or else page will relead. 
      return false;
  })
  // collect data from firebase
  trainData.ref().on("child_added",function(snapshot){
      var name = snapshot.val().name;
      var destination = snapshot.val().name;
      var frequency = snapshot.val().frequency;
      var firstTrain = snapshot.val().firstTrain;
      //figure out when the next train will be and how many minutes are left until the next train arrives. look into js momemt documentation

      var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
      var minutes = frequency - remainder; 
      var arrival = moment().add(minutes,"m").format("hh:mm A");

      console.log(remainder);
      console.log(minutes);
      console.log(arrival); 
  })


