let collapsible = (el, parameter) => {
    /**
     *  Yapı içinde olan özellikler
     * > accordion
     * > Expandable // oto kapanma özelliği (accordion için varsayılan default)
     * > activeClass aktif olduğunda content'e atanacak class
     **
     * accordion yapısı
     *  > .collapse-group ana grup
     *  > .collapse-group > .collapse-item > .collapse-toggle tetikleyici
     *  > .collapse-group > .collapse-item > .collapse-content çöküş itemi
     **
     * collapse yapısı
     *  > .collapse-toggle
     *  > .collapse-content
     */
    let trigger, content,
        collapseToggle = el !== undefined ? ".collapse-toggle" + el : ".collapse-toggle",
        delay = parameter !== undefined && parameter.delay !== undefined ? parameter.delay : 200,
        accordion = parameter !== undefined && parameter.accordion !== undefined ? parameter.accordion : false,
        expandable = parameter !== undefined && parameter.expandable !== undefined ? parameter.expandable : true,
        activeClass = parameter !== undefined && parameter.activeClass !== undefined ? parameter.activeClass : "",
        run = (item, callback) => {
            Array.prototype.forEach.call (item, callback);
            return this;
        };
    if (accordion !== false) {
        trigger = document.querySelectorAll (".collapse-group" + el + " > .collapse-item > .collapse-toggle");
        let collapseRun = (el) => {
            content = el.nextElementSibling;
            content.classList.toggle ("show");
            content.classList.toggle (activeClass);
            slide (content).toggle (delay);
            content.parentNode.classList.toggle("active");
        };
        run (trigger, function (el) {
            el.addEventListener ("click", function (e) {
                if (expandable || expandable === "true") {
                    content = el.closest (".collapse-group").querySelectorAll (".collapse-content.show");
                    if (content.length > 0) {
                        run (content, function (expandableItem) {
                            expandableItem.classList.remove ("show",activeClass);
                            expandableItem.parentNode.classList.remove("active");
                            slide (expandableItem).toggle (delay);
                            if (expandableItem !== el.nextElementSibling) {
                                let step = setTimeout (() => {
                                    window.clearTimeout (step);
                                    return collapseRun (el);
                                }, 10);
                            }
                        });
                    } else {
                        return collapseRun (el);
                    }
                } else {
                    return collapseRun (el);
                }
            });
        });
    } else {
        trigger = document.querySelectorAll (collapseToggle + "[data-href]");
        run (trigger, function (toggle, i) {
            let item_id = toggle.getAttribute ("data-href");
            let collapse = document.querySelector (".collapse-content[data-id='" + item_id + "']");
            toggle.addEventListener ("click", function (e) {
                slide (collapse).toggle (delay);
            });
        });
    }
};