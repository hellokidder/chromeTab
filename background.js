chrome.runtime.onInstalled.addListener(()=> {
    console.log('`first`')
    chrome.action.setBadgeText({text: '1'})
   
})

chrome.action.onClicked.addListener(async tab => {
    await chrome.scripting.executeScript({
        target:{
            tabId: tab.id,
        },
        files: ['a.js']
    })
  await chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log('tabs', tabs)
    chrome.tabs.query({}, tablist=>{
        chrome.tabs.sendMessage(tabs[0].id, tablist);
    })
});
      
})



chrome.commands.onCommand.addListener(async function(command) {
    if (command === "myShortcut") {
        // 处理 myShortcut 快捷键的逻辑
        console.log("My Shortcut is triggered!");
         chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log('tabs', tabs)
            chrome.tabs.query({}, tablist=>{
                chrome.tabs.sendMessage(tabs[0].id, tabs);
            })
        });
      }
})




