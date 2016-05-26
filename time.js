function formatSeconds(value) {
    if(Number(value)!=value){
        return value;
    }

    var s = parseInt(value);// 秒
    var m = 0;              // 分
    var h = 0;              // 小时

    if(s >= 60) {
        m = parseInt(s/60);
        s = parseInt(s%60);
        if(m >= 60) {
            h = parseInt(m/60);
            m = parseInt(m%60);
        }
    }

    var result = parseInt(s)+"秒";

    if(m > 0) {
        result = parseInt(m)+"分"+result;
    }

    if(h > 0) {
        result = parseInt(h)+"小时"+result;
    }

    return result;
}

console.log(formatSeconds('3601'));