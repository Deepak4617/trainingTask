// // Listen for when a tab is updated
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   // Check if the tab has finished loading
//   if (changeInfo.status === 'complete') {
//     // Do something with the tab, for example, send a message to the content script
//     chrome.tabs.sendMessage(tabId, { message: 'TabUpdated', url: tab.url });
//   }
// });

// // Listen for messages from the content scripts or other parts of the extension
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   // Check the message type
//   if (message.type === 'SomeMessageType') {
//     // Handle the message
//     console.log('Received message:', message);
    
//     // Send a response if needed
//     sendResponse({ response: 'Message received' });
//   }
// });

// // Additional background script logic can be added here
// Listen for when a tab is updated
// Listen for the click event on the browser action (icon)
// chrome.action.onClicked.addListener((tab) => {
//   // Get the URL of the currently active tab
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     // Log the URL to the console
//     console.log('Website URL:', tabs[0].url);
//   });
// });
chrome.action.onClicked.addListener((tab) => {
  // Get the URL of the currently active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const websiteUrl = tabs[0].url;

    // Display or log the URL based on your extension's needs
    console.log('Website URL:', websiteUrl); // Log to console for debugging

    // Options for displaying the URL:
    // 1. Send a message to the popup window:
    //    chrome.runtime.sendMessage({ message: "showUrl", url: websiteUrl });
    // 2. Create a browser notification:
    //    chrome.notifications.create({
    //      type: "basic",
    //      iconUrl: "icon.png", // Optional icon for the notification
    //      title: "Website URL",
    //      message: websiteUrl
    //    });
  });
});



