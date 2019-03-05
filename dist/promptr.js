function promptr(options) {
    var defaultOptions = { className: 'promptr' };
    var configOptions = { ...options, ...defaultOptions };
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
        var generatedCSS = '<style>.promptr-backdrop{z-index:10000;position:fixed;top:0;right:0;bottom:0;left:0;opacity:.5;background-color:#333}.promptr-title{display:inline-block}.promptr-prompt{z-index:10001;position:relative;margin:0 auto;width:500px;padding:10px;background-color:#fff;color:#000}.x{float:right;color:#000;position:relative;min-width:10px;width:10px;height:10px;opacity:.3;border:solid #000 1px}.x:hover{opacity:1;cursor:pointer}.promptr-prompt .button-container{text-align:right}</style>';
        return generatedCSS;
    }

    function generatedHTML() {
        var generatedHTML = '<div class="promptr-backdrop"></div><div class="promptr-prompt"><div class="promptr-title">Confirm</div><span class="x promptr-close"></span><hr><div class="promptr-content">Are you sure you want to delete that thing?</div><hr><div class="button-container"><button class="promptr-decline">No</button> <button class="promptr-confirm">Yes</button></div></div>';
        return generatedHTML;
    }

    function init() {
        document.addEventListener('click', preCheck);
    }

    init();
}