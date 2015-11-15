function snoopsnoo(info) {
    var user = info.linkUrl;
    if(user.match(/https:\/\/www\.reddit\.com\/user\/+\w+/) == null) return;
    user = user.replace(/https:\/\/www\.reddit\.com\/user\//, '');
    chrome.tabs.create({url: "http://snoopsnoo.com/u/" + user})
}

chrome.contextMenus.create({
    title: "Search SnoopSnoo For User", 
    contexts:["link"], 
    onclick: snoopsnoo
});
