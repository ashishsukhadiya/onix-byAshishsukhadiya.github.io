//images slider
			  $('.myCarousel').split({
			  theme: 'bottom-to-top-fade-out,bottom-to-top-zoom-in,bottom-to-top-fade-out,fade-in-out,fade-in-out',
			  delay: '50',
			  height: '600',
			  infinite: 'true'
			});
		
			  var _gaq = _gaq || [];
			  _gaq.push(['_setAccount', 'UA-36251023-1']);
			  _gaq.push(['_setDomainName', 'jqueryscript.net']);
			  _gaq.push(['_trackPageview']);

			  (function() {
			    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();

			
			try {
			  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
			    return true;
			  }).catch(function(e) {
			    var carbonScript = document.createElement("script");
			    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
			    carbonScript.id = "_carbonads_js";
			    document.getElementById("carbon-block").appendChild(carbonScript);
			  });
			} catch (error) {
			  console.log(error);
			}


//tab
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName(".btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

			
