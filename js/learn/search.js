function getInputValue() {
  const input = document.getElementById('search-bar-entry');

  return input.value;
}

async function getIndex() {
  return await $.getJSON("/js/learn/learnIndex.json", null).then(function (json) {
    if (json === undefined || json === null) {
      console.error("No index found");
    }

    return json;
  });
}

function searchTitles(term, index) {
  var results = [];

  index.forEach(function (item) {
    if ('title' in item && item.title.toLowerCase().includes(term)) {
      results.push(item);
    }
  });

  return results;
}

async function search(term) {
  const url = new URL(location.href);
  const params = new URLSearchParams(url.search);
  term = params.get('term');
  
  if (term === null || term === undefined) {
    console.log("Search term is null or undefined.");
    return;
  }

  const index = await getIndex();
  term = term.toLowerCase();

  var results = searchTitles(term, index);

  console.log(results);

  showResults(results);
}

function showResults(results) {
  var resultsElement = document.getElementById('search-results');

  results.forEach(function (item) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    var href = "/learn/" + item.page;

    if (item.section != 0) {
      href += "#" + item.section;
    }
    
    a.setAttribute('href', href);
    a.innerHTML = item.title;

    li.appendChild(a);

    resultsElement.appendChild(li);
  });
}
