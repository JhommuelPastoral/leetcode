function reformatDate(date: string): string {
    
    const dateArr = date.split(' ');
    const monthMap = new Map<string,string>([
        ['Jan', '01'],
        ['Feb', '02'],
        ['Mar', '03'],
        ['Apr', '04'],
        ['May', '05'],
        ['Jun', '06'],
        ['Jul', '07'],
        ['Aug', '08'],
        ['Sep', '09'],
        ['Oct', '10'],
        ['Nov', '11'],
        ['Dec', '12'],
    ]);

    let day = '';
    for(const ch of dateArr[0]){
        if(!isNaN(parseInt(ch))) day += ch;
        else break;
    }
    let formatedDate = `${dateArr[2]}-${monthMap.get(dateArr[1])}-${day.length === 1 ? `0${day}` : day}`;

    return formatedDate;


};

const date = "20th Oct 2052";
console.log(reformatDate(date));