function CachetPlugin(url){
  this.url = url;
}

CachetPlugin.prototype.setUrl = function(url){
  cachet_plugin.url = url;
}

CachetPlugin.prototype.fetch = function(callback, part){
  var data = JSON.stringify(false);
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var response = JSON.parse(this.responseText);
      callback(response);
    }
  });

  xhr.open("GET", this.url+"/api/v1/"+part);

  xhr.send(data);
}

CachetPlugin.prototype.fetchComponents = function(callback){
  this.fetch(callback, "components");
}

CachetPlugin.prototype.statusSimple = function(e){
  var element = document.querySelector(e);
  this.fetchComponents(function(response){
    var components = response.data;
    var status_array = [];
    components.forEach(function(c){
      status_array.push(c.status);
    });

    var element_class = "green";
    if(status_array.includes(2)){
      element_class = "yellow";
    }
    if(status_array.includes(3)){
      element_class = "orange";
    }
    if(status_array.includes(4)){
      element_class = "red";
    }
    console.log(status_array);
    element.classList.add(element_class);

  });
}

cachet_plugin = new CachetPlugin();
