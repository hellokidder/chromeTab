console.log("hello",chrome);
// chrome.tabs.query({},(tab)=>{
//     console.log('tabs', tabs)
// })
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // 处理接收到的消息
    console.log("接收",message);
});
  