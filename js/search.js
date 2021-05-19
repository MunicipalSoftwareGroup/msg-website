async function getIndex(name) {
    return await $.getJSON("searchIndex.json", null).then(function (json) { 
        var index = json[name]
        
        if (index === undefined || index === null) {
            console.error("No index called " + name);
        }
        
        return index;
    });
}

async function search(indexName, term) {
    var results = document.getElementById("search-results");
    var questions = document.getElementById("questions-card");
    
    if (term.length == 0) {
        questions.style.display = "flex";
        results.style.display = "none";
        return;
    }
    
    if (term.length < 3)
        return;    
    
    // Cache search terms        
    if (sessionStorage.getItem(term)) {
        console.log("Using cached results");
        results.innerHTML = sessionStorage.getItem(term);
        showSearchResults();
        return;
    }
    
    results.innerHTML = "";
    
    var index = await getIndex(indexName);
    
    for (var key in index) {
        var success = find(index[key], term);
        
        if (success) {
            if (questions.style.display != "none")
                questions.style.display = "none";

            if (results.style.display != "flex")
                results.style.display = "flex";

            var el = document.getElementById(index[key].id).innerHTML;

            if (!results.innerHTML.includes(el)) {
                results.innerHTML += el;
            }
        }
    }
    
    sessionStorage.setItem(term, results.innerHTML);
}

function showSearchResults() {
    var results = document.getElementById("search-results");
    var questions = document.getElementById("questions-card");
    
    if (questions.style.display != "none")
                questions.style.display = "none";
    if (results.style.display != "flex")
                results.style.display = "flex";
}

function hideSearchResults() {
    var results = document.getElementById("search-results");
    var questions = document.getElementById("questions-card");
    
    if (questions.style.display != "flex")
                questions.style.display = "flex";
    if (results.style.display != "none")
                results.style.display = "none";
}

function find(item, term) {
    return item.question.includes(term);
}
