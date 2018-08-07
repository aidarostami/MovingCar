var setSkrollr = function($el, data) {
    for (var i = 0, l = data.length; i < l; i++) {
        var d = data[i],
            px = d[0];
            css = d[1];
        $el.attr('data-' + px, css);
    }
}

jQuery(function($) {
    setSkrollr($('#background'), [[0, 'transform:translateX(-40%)'], [1500, 'transform:translateX(0%)']]);
    setSkrollr($('#car'), [[0, 'width:200px'], [50, 'transform:translateX(100%)'],[900, 'transform:translateX(350%)'],[500, 'width:300px'], [1500, 'width:340px']]);
    setSkrollr($('#scroll-me-forward'), [[10, 'visibility: visible'], [50, 'visibility: hidden'], [1500, 'visibility: hidden']]);
    setSkrollr($('#scroll-me-back'), [[10, 'visibility: hidden'], [1200, 'visibility: visible'], [1500, 'visibility: visible']]);
    skrollr.init({
        smoothScrolling: true
    });
});