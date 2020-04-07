export function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
export function Cliff(num, min, max) {
    if (num < min) {
        num = min
    }
    if (num > max) {
        num = max
    }
    return num
}

export function ChangeDirect(direct) {
    
}

export function RandomRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '1.0'/*r().toFixed(1)*/ + ')';
}
