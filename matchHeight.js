matchHeight = function(){
    var allElements = document.getElementsByClassName("matchHeight");
    var grupedElements = [];
    Array.prototype.forEach.call(allElements,function(element){
        if(!grupedElements[element.dataset.matchgroup])
            grupedElements[element.dataset.matchgroup] = [];
        if(!grupedElements[element.dataset.matchgroup][element.offsetTop])
            grupedElements[element.dataset.matchgroup][element.offsetTop] = [];
        grupedElements[element.dataset.matchgroup][element.offsetTop].push(element);
    });
    console.dir(grupedElements);
    var getMaxHeight = function(group){
        var maxHeight = 0;
        group.forEach(function(element){
            element.style.height = "auto";
            maxHeight = (element.offsetHeight > maxHeight) ? element.offsetHeight : maxHeight;
        });
        return maxHeight;
    };
    var setHeight = function(group){
      var maxHeight = getMaxHeight(group);
      if(group.length > 1)
		  group.forEach(function(element){
			  element.style.height = maxHeight+"px";
		  })
    };
    grupedElements.forEach(function(grupe){
        grupe.forEach(setHeight);
    });
};

window.addEventListener("load",matchHeight,false);
window.addEventListener("resize",matchHeight,false);
