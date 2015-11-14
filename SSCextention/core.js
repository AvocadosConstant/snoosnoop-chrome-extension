function snoopsnoo(info) {
    console.log(info.linkUrl);
    var searchstring = info.linkUrl;
    /*if(searchstring.indexOf("/u/" == -1)) {
      searchstring = "/u/" + searchstring;
    }*/
    
    searchstring = searchstring.replace(/https:\/\/www\.reddit\.com\/user\//, '');
    alert(searchstring);
    chrome.tabs.create({url: "http://snoopsnoo.com/u/" + searchstring})
}

chrome.contextMenus.create({
    title: "Search SnoopSnoo For User", 
    contexts:["link"], 
    onclick: snoopsnoo});
