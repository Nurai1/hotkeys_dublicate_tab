chrome.action.onClicked.addListener((tab) => {
    console.log(`tab "${tab}" triggered`);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['enhance_duplicate_by_keys.js']
    });
  });