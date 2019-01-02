alert("Welcome!");
var trig = document.getElementById("Home");
var reload = function () {
    location.reload();
};
trig.addEventListener("click", reload );
var sub = document.getElementById("submit");
var createCSV = function () {
    const rows = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function(rowArray){
       let row = rowArray.join(",");
       csvContent += row + "\r\n";
    }); 
    var download = function(content, fileName, mimeType) {
        var a = document.createElement('a');
        mimeType = mimeType || 'application/octet-stream';
      
        if (navigator.msSaveBlob) { // IE10
          navigator.msSaveBlob(new Blob([content], {
            type: mimeType
          }), fileName);
        } else if (URL && 'download' in a) { //html5 A[download]
          a.href = URL.createObjectURL(new Blob([content], {
            type: mimeType
          }));
          a.setAttribute('download', fileName);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
        }
      }
      
      download(csvContent, 'dowload.csv', 'text/csv;encoding:utf-8');
};
var redirect = function () {
  window.location.replace("calendar.html")
}
sub.addEventListener("click",redirect);

