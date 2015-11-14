function snoopsnoo(info)
{
    var searchstring = info.selectionText;
    if(searchstring.indexOf("/u/" == -1))
    {
      searchstring = "/u/" + searchstring;
    }
    chrome.tabs.create({url: "http://snoopsnoo.com" + searchstring})
}

chrome.contextMenus.create({title: 
  "Search SnoopSnoo For User", contexts:["selection"], 
  onclick: snoopsnoo});