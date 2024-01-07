chrome.commands.onCommand.addListener((command) => {
    if(command === "inject-script") {
        console.log(`Command "${command}" triggered`);
        chrome.tabs.create({ url: 'https://www.twitter.com' });
        chrome.tabs.create({ url: 'https://www.instagram.com' });
        chrome.tabs.create({ url: 'https://threads.net' });
    }
});