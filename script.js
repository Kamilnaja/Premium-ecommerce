function Slider(container, nav) {
    'use strict';
    this.container = container;
    this.nav = nav;
    this.imgs = this.container.find('img');
    this.imgWidth = 390;
    this.imgsLen = this.imgs.length;
    this.current = 0;
}
Slider.prototype.transition = function (coords) {
    'use strict';
    this.container.animate({
        'margin-left': coords || -(this.current * this.imgWidth)
    });
};
Slider.prototype.setCurrent = function (dir) {
    'use strict';
    var pos = this.current;
    pos += (~~(dir === 'next') || -1);
    this.current = (pos < 0)
        ? this.imgsLen - 1
        : pos % this.imgsLen;
    return pos;
};