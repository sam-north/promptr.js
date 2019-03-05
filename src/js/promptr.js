function promptr(options) {
    var defaultOptions = { className: 'promptr' };
    let configOptions = { ...options, ...defaultOptions };
    function close(e) {
        console.log('close()');
        if (e === undefined) {
            var containers = document.getElementsByClassName('promptr-container');
            for (var i = 0; i < containers.length; i++)
                containers[i].parentNode.removeChild(containers[i]);
        }
        else {
            var currentElement = e.target;
            var found = false;
            while (!found) {
                if (!currentElement.classList.contains('promptr-container'))
                    currentElement = currentElement.parentNode;
                else found = true;
            }
            currentElement.parentNode.removeChild(currentElement);
        }
    }

    function declineButtonClick() {
        console.log('declineButtonClick()');
        close();
    }

    function confirmButtonClick() {
        console.log('confirmButtonClick()');
        close();
        window[configOptions.confirmCallback]();
    }

    function instantiate(e) {
        document.body.insertAdjacentHTML("beforeend", '<div class="promptr-container">' + generatedCss() + generatedHTML() + '</div>');
        var closeButtons = document.getElementsByClassName('promptr-close');
        for (var i = 0; i < closeButtons.length; i++)
            closeButtons[i].addEventListener('click', close);
        var declineButtons = document.getElementsByClassName('promptr-decline');
        for (var j = 0; j < declineButtons.length; j++)
            declineButtons[j].addEventListener('click', declineButtonClick);
        var confirmButtons = document.getElementsByClassName('promptr-confirm');
        for (var k = 0; k < confirmButtons.length; k++)
            confirmButtons[k].addEventListener('click', confirmButtonClick);
    }

    function preCheck(e) {
        if (e.target.classList.contains(configOptions.className))
            instantiate(e);
    }

    function generatedCss() {
        var generatedCSS = '<style>@@generatedCss</style>';
        return generatedCSS;
    }

    function generatedHTML() {
        var generatedHTML = '@@generatedHTML';
        return generatedHTML;
    }

    function init() {
        document.addEventListener('click', preCheck);
    }

    init();
}