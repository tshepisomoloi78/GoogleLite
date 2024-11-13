function search() {
  var query = document.getElementById('searchQuery').value;
  if (query) {
    var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.location.href = url; // Redirect to Google search with the query
  }
}


