document.addEventListener('visibilitychange', function (event) {
    console.log("visibility")
    if (document.hidden) {
        document.title = 'Hey, sua classificação é importante!';
    } else {
        document.title = "Simulador SISU";
    }
});
