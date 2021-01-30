var familybook =[
    "Ajji.jpg",
    "Pappa.jpg",
    "Madhu.jpg",
    "Torsha.jpg"
    ];
    var names =[
      "Padma Srinivas",
      "Prashanth Kumar",
      "Madhumita Prashanth",
      "Torsha Prashanth"
      ];
    var i=0;
    function nextSlide(){
    document.getElementById("familybook").src=familybook[i];
    document.getElementById("names").innerHTML=names[i];
      i=i+1;
      if(i == 4)
      {
        i=0;
      }
    }