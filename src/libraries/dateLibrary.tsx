export function getMatchDuration(date: string, startTimeStr: string, finishTimeStr: string): string {
    const arrStart = numFromStr(date).concat(numFromStr(startTimeStr));
    const arrFinish = numFromStr(date).concat(numFromStr(finishTimeStr));

    const d1 = new Date(arrStart[0], arrStart[1], arrStart[2], arrStart[3], arrStart[4], arrStart[5], arrStart[6]);
    const d2 = new Date(arrFinish[0], arrFinish[1], arrFinish[2], arrFinish[3], arrFinish[4], arrFinish[5], arrFinish[6]);

    const res1 = [d1.getHours(), d1.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":");
    const res2 = [d2.getHours(), d2.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
    }).join(":");
    return res1 + ' - ' + res2;
}

export function getWeekDay(dateStr: string) {
    const date = new Date(dateStr);
    let days = [
        'Воскресенье', 'Понедельник', 'Вторник',
        'Среда', 'Четверг', 'Пятница', 'Суббота'
    ];
    return days[date.getDay()];
}

function addLeadZero(val: number) {
    if (+val < 10) return '0' + val;
    return val;
}

export function getFormattedDate(str: string) {
    const a = new Date(str);

    return [
        addLeadZero(a.getDate()),
        addLeadZero(a.getMonth() + 1),
        a.getFullYear()
    ].join('.');
}

function numFromStr(str: string){
    return Array.from(str)
        .map(i => {if(isFinite(+i) || i === "."){return i}else{return " "}})
        .join("")
        .split(" ")
        .filter(i => i !== "")
        .map(i => Number(i))
}
