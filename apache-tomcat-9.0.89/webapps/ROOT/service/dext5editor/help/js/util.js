function getMenuList() {
    if (document.querySelectorAll) {
        menuList = document.querySelectorAll('h3');
    } else {
        menuList = document.getElementsByTagName('h3');
    }
    return menuList;
}

function ulStyle(tag, length) {
    for (var i = 0; i < length; i++) {
        tag[i].style.display = 'none';
    }
}

function mouseOverEvt(list, length) {
    for (var i = 0; i < length; i++) {
        setEvent(list[i], 'mouseover', function () {
            addClass(this, "over");
        })
        setEvent(list[i], 'mouseout', function () {
            removeClass(this, "over");
        })
    }
}

function addClass(node, addName) {
    if (node.classList) {
        if (node.length) {
            for (var i = 0; i < node.length; i++) {
                node[i].classList.add(addName);
            }
        } else {
            node.classList.add(addName);
        }
    } else {
        if (node.length) {
            for (var i = 0; i < node.length; i++) {
                if (node.className.indexOf(addName) < 0) {
                    var classArr = node[i].className.split(' ');
                    classArr.push(addName);
                    node[i].className = classArr.join(' ');
                }
            }
        } else {
            if (node.className.indexOf(addName) < 0) {
                var classArr = node.className.split(' ');
                classArr.push(addName);
                node.className = classArr.join(' ');
            }
        }
    }
}

function removeClass(node, addName) {
    if (node.classList) {
        if (node.length) {
            for (var i = 0; i < node.length; i++) {
                node[i].classList.remove(addName);
            }
        } else {
            node.classList.remove(addName);
        }
    } else {
        if (node.length) {
            for (var i = 0; i < node.length; i++) {
                if (node[i].className.indexOf(addName) > -1) {
                    var classArr = node[i].className.split(' ');
                    var index = -1;
                    for (var k = 0; k < classArr.length; k++) {
                        if (classArr[k] === addName) {
                            index = k;
                            break;
                        }
                    }
                    if (index > -1) {
                        classArr.splice(index, 1);
                        node[i].className = classArr.join(' ');
                    }
                }
            }
        } else {

            if (node.className.indexOf(addName) > -1) {
                var classArr = node.className.split(' ');
                var index = -1;
                for (var k = 0; k < classArr.length; k++) {
                    if (classArr[k] === addName) {
                        index = k;
                        break;
                    }
                }
                if (index > -1) {
                    classArr.splice(index, 1);
                    node.className = classArr.join(' ');
                }
            }
        }
    }
}

function setEvent(element, event, callback) {

    if (element.addEventListener) {
        element.addEventListener(event, callback)
    } else {
        element.attachEvent('on' + event, function (e) {
            if (event == 'mouseover' || event == 'mouseout') return;

            if (event == 'resize') {
                heightResize();
            } else {
                var _this = e.srcElement.parentElement;
                var allH3, allUl;
                var nextEl = getNextElementSibling(_this);
                var openUl;
                var closeUl = [];
                var duration = 250;

                if (document.querySelectorAll) {
                    allH3 = document.querySelectorAll('h3');
                    allUl = document.querySelectorAll('ul');
                } else {
                    allH3 = document.getElementsByTagName('h3');
                    allUl = document.getElementsByTagName('ul');
                }
                var h3Len = allH3.length;
                var allUlLen = allUl.length;

                for (var j = 0; j < h3Len; j++) {
                    if (allH3[j] != this) {
                        closeUl.push(allH3[j]);
                    }
                }
                for (var j = 0; j < allUlLen; j++) {
                    if (allUl[j].style.display != 'none') {
                        openUl = allUl[j];
                    }
                }
                if (nextEl == undefined) return;

                selectMenu(_this, nextEl, openUl, closeUl, duration);
            }
        })
    }
}

function heightResize() {
    if (window.innerHeight) {
        var leftContainer = document.getElementById("lnb");
        leftContainer.style.height = window.innerHeight - 20 + 'px';
    } else {
        var leftContainer = document.getElementById("lnb");
        leftContainer.style.height = document.documentElement.offsetHeight - 20 + 'px';
    }
}

function clickMenu(list, length) {
    for (var i = 0; i < length; i++) {

        setEvent(list[i], 'click', function (e) {
            var allH3 = document.querySelectorAll('h3');
            var h3Len = allH3.length;
            var allUl = document.querySelectorAll('ul');
            var allUlLen = allUl.length;
            var nextEl = this.nextElementSibling;
            var openUl;
            var closeUl = [];
            var duration = 250;

            for (var j = 0; j < h3Len; j++) {
                if (allH3[j] != this) {
                    closeUl.push(allH3[j]);
                }
            }
            for (var j = 0; j < allUlLen; j++) {
                if (allUl[j].style.display != 'none') {
                    openUl = allUl[j];
                }
            }
            selectMenu(this, nextEl, openUl, closeUl, duration);
        })
    }
}

function selectMenu(_this, nextEl, openUl, closeUl, duration) {
    if (nextEl.tagName == 'H3') {
        if (openUl != undefined) {
            slideUp(closeUl, openUl, duration);
        }
    } else if (nextEl.style.display == 'none') {
        if (openUl != undefined) {
            slideUp(closeUl, openUl, duration);
        }
        slideDown(_this, nextEl, duration);
    } else {
        slideUp(_this, nextEl, duration);
    }
}

function slideUp(menu, element, duration) {
    element.style.height = element.offsetHeight + 'px';
    element.style.overflow = 'hidden';

    if (menu.length == undefined) {
        removeClass(menu, "selected");
    } else {
        for (var i = 0; i < menu.length; i++) {
            removeClass(menu[i], "selected");
        }
    }

    if (element.style.transition == '') {
        element.style.transition = 'height ease-out ' + duration + 'ms 0s';

        setTimeout(function () {
            element.style.height = '0';
        }, 1)

        setTimeout(function () {
            element.style.display = 'none';
            removeProperty(element, 'height');
            removeProperty(element, 'transition');
            removeProperty(element, 'overflow');
        }, duration)
    } else {
        var startHeight = element.offsetHeight;
        var endHeight = 0;
        var increment = startHeight / (duration / 15);

        var animate = setInterval(function () {
            startHeight -= increment;
            if (startHeight <= endHeight) {
                clearInterval(animate);
                element.style.height = endHeight + 'px';
                element.style.display = 'none';
                setTimeout(function () {
                    removeProperty(element, 'height');
                    removeProperty(element, 'overflow');
                }, 10)
            } else {
                element.style.height = startHeight + 'px';
            }
        }, 10)
    }


}

function slideDown(menu, element, duration) {
    removeProperty(element, 'display');
    var h = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = '0';

    addClass(menu, "selected");

    if (element.style.transition == '') {
        element.style.transition = 'height ease-out ' + duration + 'ms 0s';
        setTimeout(function () {
            element.style.height = h + 'px';
        }, 1)

        setTimeout(function () {
            element.removeAttribute('style');
        }, duration)

    } else {
        var increment = h / (duration / 15);
        startHeight = 0;
        var animate = setInterval(function () {
            startHeight += increment;
            if (startHeight >= h) {
                clearInterval(animate);
                element.style.height = h + 'px';
                setTimeout(function () {
                    element.removeAttribute('style');
                }, 10)
            } else {
                element.style.height = startHeight + 'px';
            }
        }, 10);
    }
}


function getNextElementSibling(e) {
    if (e.tagName != 'H3') {
        return;
    }
    var nextEl = e.nextSibling;
    while (nextEl && nextEl.nodeType !== 1) {
        nextEl = nextEl.nextSibling;
    }
    return nextEl;
}

function removeProperty(element, value) {
    if (element.style.removeProperty) {
        element.style.removeProperty(value);
    } else {
        element.style[value] = '';
    }
}