function timerLog(text, timeout) {
    setTimeout(() => {
        console.log("text: " + text + "\ntimeout: " + timeout);
    }, timeout);
}

timerLog("Hello world!", 3000);