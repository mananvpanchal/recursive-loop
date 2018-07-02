function forEach(src, target, opr, idx = 0) {
    if (idx === src.length - 1) {
        return opr(src[idx], target, idx, src);
    } else {
        return forEach(src, opr(src[idx], target, idx, src), opr, idx + 1);
    }
};

function forLoop(count, target, opr, idx = 0) {
    if (idx === count - 1) {
        return opr(idx, target, count);
    } else {
        return forLoop(count, opr(idx, target, count), opr, idx + 1);
    }
};

exports.forEach = forEach;
exports.forLoop = forLoop;