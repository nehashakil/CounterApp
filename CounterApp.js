
  var count = 0;
  var countEl = document.getElementById("counting");
  var saveEl = document.getElementById("saveEl");

  function increment(){
    count++;
    countEl.innerText = count;
  }

  function save(){ 
    let saveVar = count + " - ";
    saveEl.textContent += saveVar;
    console.log(saveVar);
    count = 0;
    countEl.innerText = count;
  }
