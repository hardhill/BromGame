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
    var i = randomInteger(1, 10)
    if (i > 9) {
        switch (direct) {
            case 0:
                if (randomInteger(1, 10) > 5) { direct = 6 } else { direct = 2 }
                console.log(direct)
                break
            case 2:
                if (randomInteger(1, 10) > 5) { direct = 0 } else { direct = 4 }
                break
            case 4:
                if (randomInteger(1, 10) > 5) { direct = 6 } else { direct = 2 }
                console.log(direct)
                break
            case 6:
                if (randomInteger(1, 10) > 5) { direct = 0 } else { direct = 4 }
                break
        }
    }

    return direct
}

export function RandomRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
