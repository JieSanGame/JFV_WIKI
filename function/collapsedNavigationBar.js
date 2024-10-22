var content = document.getElementById("content");
function onTileClick() {
  content.style.height = content.offsetHeight === 800 ? 0 + "px" : 800 + "px";
}
