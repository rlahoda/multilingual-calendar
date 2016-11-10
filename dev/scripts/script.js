var info = {
    "english": {
        "month": "month",
        "currenttime": "current time",
        "today": "today",
        "yesterday": "yesterday",
        "tomorrow": "tomorrow",
        "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "years": ["two thousand sixteen", "two thousand seventeen", "two thousand eighteen"],
        "numbers": ["zero", "one", "two", "three", "four", "five", "six", "Seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine", "ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine", "hundred"],
        "ordinals": ["zero", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentyeth", "twenty-first", "twenty-second", "twenty-third", "twenty-fourth", "twenty-fifth", "twenty-sixth", "twenty-seventh", "twenty-eighth", "twenty-ninth", "thirtieth", "thirty-first"]
    },
    "french": {
        "month": "mois",
        "currenttime": "heure actuelle",
        "today": "aujourd'hui",
        "yesterday": "hier",
        "tomorrow": "demain",
        "days": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        "months": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        "years": ["deux mille seize", "deux mille dix-sept", "deux mille dix-huit"],
        "numbers": ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt et un", "vingt-deux", "vingt-trois", "vingt-quatre", "vingt-cinq", "vingt-six", "vingt-sept", "vingt-huit", "vingt-neuf", "trente", "trente et un", "trente-deux", "trente-trois", "trente-quatre", "trente-cinq", "trente-six", "trente-sept", "trente-huit", "trente-neuf", "quarante", "quarante et un", "quarante-deux", "quarante-trois", "quarante-quatre", "quarante-cinq", "quarante-six", "quarante-sept", "quarante-huit", "quarante-neuf", "cinquante", "cinquante et un", "cinquante-deux", "cinquante-trois", "cinquante-quatre", "cinquante-cinq", "cinquante-six", "cinquante-sept", "cinquante-huit", "cinquante-neuf", "soixante", "soixante et un", "soixante-deux", "soixante-trois", "soixante-quatre", "soixante-cinq", "soixante-six", "soixante-sept", "soixante-huit", "soixante-neuf", "soixante-dix", "soixante-et-onze", "soixante-douze", "soixante-treize", "soixante-quatorze", "soixante-quinze", "soixante-seize", "soixante-dix-sept", "soixante-dix-huit", "soixante-dix-neuf", "quatre-vingts", "quatre-vingt-un", "quatre-vingt-deux", "quatre-vingt-trois", "quatre-vingt-quatre", "quatre-vingt-cinq", "quatre-vingt-six", "quatre-vingt-sept", "quatre-vingt-huit", "quatre-vingt-neuf", "quatre-vingt-dix", "quatre-vingt-onze", "quatre-vingt-douze", "quatre-vingt-treize", "quatre-vingt-quatorze", "quatre-vingt-quinze", "quatre-vingt-seize", "quatre-vingt-dix-sept", "quatre-vingt-dix-huit", "quatre-vingt-dix-neuf", "cent"],
        "ordinals": ["zéro", "premier", "deuxième", "troisième", "quatrième", "cinquième", "sixième", "septième", "huitième", "neuvième", "dixième", "onzième", "douzième", "treizième", "quatorzième", "quinzième", "seizième", "dix-septième", "dix-huitième", "dix-neuvième", "vingtème", "vingt et unième", "vingt-deuxième", "vingt-troisième", "vingt -quatrième", "vingt-cinquième", "vingt-sixième", "vingt-septième", "vingt-huitième", "vingt-neuvième", "trentième", "trente et unième"]
    }
}

var languageGlobal = 'english';
var runFirstTime = true;

var mon = 'sun';
var dateOrder = 'mdy';

function leapYear(year) {
    if (year % 4 == 0) // basic rule
        return true // is leap year
        /* else */ // else not needed when statement is "return"
    return false // is not leap year
}

function monthDays(month, year) {
    var ar = new Array(12)
    ar[0] = 31 // January
    ar[1] = (leapYear(year)) ? 29 : 28 // February
    ar[2] = 31 // March
    ar[3] = 30 // April
    ar[4] = 31 // May
    ar[5] = 30 // June
    ar[6] = 31 // July
    ar[7] = 31 // August
    ar[8] = 30 // September
    ar[9] = 31 // October
    ar[10] = 30 // November
    ar[11] = 31 // December

    // return number of days in the specified month (parameter)
    return ar[month]
}

function masterDate() {
    var today = new Date();
    // var today = new Date("January 14, 2017");
    // var today = new Date("April 14, 2017");
    var year = today.getYear();
    if (year < 1000)
        year += 1900;
    var day = today.getDay() + 2;

    var month = today.getMonth() + 1;
    if (month < 10)
        month = "0" + month;
    var month1 = today.getMonth();
    var day1 = today.getDate();
    // console.log(day1);
    var firstDay = new Date(year, month1, 1);
    var firstDayNumber = firstDay.getDay();
    console.log(mon + '3');
    if (mon === 'mon') {
        if (firstDayNumber === 0) {
            firstDayNumber = firstDayNumber + 6;
        } else {
            firstDayNumber = firstDayNumber - 1;
        }

    }

    var monthLength = monthDays(month1, year);
    // console.log(firstDayNumber);

    var daysLeft = 42 - (monthLength + firstDayNumber);

    return {today : today, year : year, day : day, month : month, month1 : month1, day1 : day1, firstDay : firstDay, firstDayNumber : firstDayNumber}

}

function startWeekDay(day) {
    startWeekDaySwap(day);
    var overallDate = masterDate();
    var today = overallDate.today;
console.log(overallDate.firstDayNumber);
    if (day !== mon) {
        if (day === 'mon') {
          if (overallDate.firstDayNumber === 0) {
            for (var i = 0; i < 6; i++) {
              createSpacer(i);
              }
          } else {
            var parent = document.getElementById('cal__days__grid');
            var child = document.getElementById("cal__days__spacer0");
            parent.removeChild(child);
          }

        } else if (day === 'sun') {
          if (overallDate.firstDayNumber === 6) {
            for (var i = 0; i < 6; i++) {
              var parent = document.getElementById('cal__days__grid');
              var child = document.getElementById("cal__days__spacer" + i);
              parent.removeChild(child);
              }
          } else {
            createSpacer(0);
          }

        }
        mon = day;
    }
}

function dateDigitSwap(order) {
    if (order !== dateOrder) {
        if (order === 'dmy') {
          document.getElementById('clockdate__digit__container--yesterday--month').classList.add("clockdate__digit__container--third");
          document.getElementById('clockdate__digit__container--yesterday--month').classList.remove("clockdate__digit__container--first");
          document.getElementById('clockdate__digit__container--yesterday--day').classList.add("clockdate__digit__container--first");
          document.getElementById('clockdate__digit__container--yesterday--day').classList.remove("clockdate__digit__container--third");

          document.getElementById('clockdate__digit__container--today--month').classList.add("clockdate__digit__container--third");
          document.getElementById('clockdate__digit__container--today--month').classList.remove("clockdate__digit__container--first");
          document.getElementById('clockdate__digit__container--today--day').classList.add("clockdate__digit__container--first");
          document.getElementById('clockdate__digit__container--today--day').classList.remove("clockdate__digit__container--third");

          document.getElementById('clockdate__digit__container--tomorrow--month').classList.add("clockdate__digit__container--third");
          document.getElementById('clockdate__digit__container--tomorrow--month').classList.remove("clockdate__digit__container--first");
          document.getElementById('clockdate__digit__container--tomorrow--day').classList.add("clockdate__digit__container--first");
          document.getElementById('clockdate__digit__container--tomorrow--day').classList.remove("clockdate__digit__container--third");

        } else if (order === 'mdy') {
            document.getElementById('clockdate__digit__container--yesterday--month').classList.add("clockdate__digit__container--first");
            document.getElementById('clockdate__digit__container--yesterday--month').classList.remove("clockdate__digit__container--third");
            document.getElementById('clockdate__digit__container--yesterday--day').classList.add("clockdate__digit__container--third");
            document.getElementById('clockdate__digit__container--yesterday--day').classList.remove("clockdate__digit__container--first");

            document.getElementById('clockdate__digit__container--today--month').classList.add("clockdate__digit__container--first");
            document.getElementById('clockdate__digit__container--today--month').classList.remove("clockdate__digit__container--third");
            document.getElementById('clockdate__digit__container--today--day').classList.add("clockdate__digit__container--third");
            document.getElementById('clockdate__digit__container--today--day').classList.remove("clockdate__digit__container--first");

            document.getElementById('clockdate__digit__container--tomorrow--month').classList.add("clockdate__digit__container--first");
            document.getElementById('clockdate__digit__container--tomorrow--month').classList.remove("clockdate__digit__container--third");
            document.getElementById('clockdate__digit__container--tomorrow--day').classList.add("clockdate__digit__container--third");
            document.getElementById('clockdate__digit__container--tomorrow--day').classList.remove("clockdate__digit__container--first");
          }
        dateOrder = order;
        }
}

function languageSwap(language) {
    if (language != languageGlobal) {
        languageGlobal = language;
    }

    startTime();
    weekNames();
    startCal();
}

function startWeekDaySwap(day) {
    if (day === "mon") {
        document.getElementById('cal__week__day--sun').classList.add("cal__week__day--last");
        document.getElementById('cal__week__day--sun').classList.remove("cal__week__day--first");
    } else {
        document.getElementById('cal__week__day--sun').classList.add("cal__week__day--first");
        document.getElementById('cal__week__day--sun').classList.remove("cal__week__day--last");
    };
}

function startTime() {
    var overallDate = masterDate();
    var today = overallDate.today;
    var todayNum = today.getDate();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    var tomorrowNum = tomorrow.getDate();
    var yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    var yesterdayNum = yesterday.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var m1 = today.getMinutes();
    var s1 = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var year = today.getYear();
    if (year < 1000)
        year += 1900;
    var day = today.getDay() + 2;
    // console.log(day);
    var month = today.getMonth() + 1;
    if (month < 10)
        month = "0" + month;
    var year_word = year - 2016;


    var year_y = yesterday.getYear();
    if (year_y < 1000)
        year_y += 1900;
    var month_y = yesterday.getMonth() + 1;
    if (month < 10)
        month = "0" + month;
    var year_y_word = year_y - 2016;

    var year_t = tomorrow.getYear();
    if (year_t < 1000)
        year_t += 1900;
    var month_t = tomorrow.getMonth() + 1;
    var year_t_word = year_t - 2016;

    if (month < 10)
        month = "0" + month;
    var daym = tomorrow.getDate();
    if (daym < 10)
        daym = "0" + daym;
    document.getElementById('clock__time__label').innerHTML = info[languageGlobal].currenttime;
    document.getElementById('clock__num__hour').innerHTML = h;
    document.getElementById('clock__num__min').innerHTML = m;
    document.getElementById('clock__num__sec').innerHTML = s;

    document.getElementById('clock__word__hour').innerHTML = info[languageGlobal].numbers[h];
    document.getElementById('clock__word__min').innerHTML = info[languageGlobal].numbers[m1];
    document.getElementById('clock__word__sec').innerHTML = info[languageGlobal].numbers[s1];


    document.getElementById('date__today__label').innerHTML = info[languageGlobal].today;
    document.getElementById('date__num__day--today').innerHTML = todayNum;
    document.getElementById('date__num__month--today').innerHTML = month;
    document.getElementById('date__num__year--today').innerHTML = year;

    document.getElementById('date__word__day--today').innerHTML = info[languageGlobal].numbers[todayNum];
    document.getElementById('date__word__month--today').innerHTML = info[languageGlobal].months[month - 1];
    document.getElementById('date__word__year--today').innerHTML = info[languageGlobal].years[year_word];


    document.getElementById('date__yesterday__label').innerHTML = info[languageGlobal].yesterday;
    document.getElementById('date__num__day--yesterday').innerHTML = yesterdayNum;
    document.getElementById('date__num__month--yesterday').innerHTML = month_y;
    document.getElementById('date__num__year--yesterday').innerHTML = year_y;

    document.getElementById('date__word__day--yesterday').innerHTML = info[languageGlobal].numbers[yesterdayNum];
    document.getElementById('date__word__month--yesterday').innerHTML = info[languageGlobal].months[month_y - 1];
    document.getElementById('date__word__year--yesterday').innerHTML = info[languageGlobal].years[year_y_word];


    document.getElementById('date__tomorrow__label').innerHTML = info[languageGlobal].tomorrow;
    document.getElementById('date__num__day--tomorrow').innerHTML = tomorrowNum;
    document.getElementById('date__num__month--tomorrow').innerHTML = month_t;
    document.getElementById('date__num__year--tomorrow').innerHTML = year_t;

    document.getElementById('date__word__day--tomorrow').innerHTML = info[languageGlobal].numbers[tomorrowNum];
    document.getElementById('date__word__month--tomorrow').innerHTML = info[languageGlobal].months[month_t - 1];
    document.getElementById('date__word__year--tomorrow').innerHTML = info[languageGlobal].years[year_t_word];

    // document.getElementById('cal__heading--month').innerHTML = info[languageGlobal].month;
    // document.getElementById('cal__heading--monthName').innerHTML = info[languageGlobal].months[month - 1];

    var t = setTimeout(startTime, 500);

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function weekNames(language) {
    for (var i = 0; i < 7; i++) {
        document.getElementById('cal__week__day--' + i).innerHTML = info[languageGlobal].days[i];
    };
    //add names to week in language
}


// create calendar day
function createDay(dayNumber, dayClass) {
    var h2 = document.createElement("h2");
    h2.className = "cal__days__day--num";
    h2.id = "h2__" + dayNumber;
    var h2Text = document.createTextNode(dayNumber);
    h2.appendChild(h2Text);

    var h3 = document.createElement("h3");
    h3.className = "cal__days__day--text";
    h3.id = "h3__" + dayNumber;
    var h3Text = document.createTextNode(info[languageGlobal].numbers[dayNumber]);
    h3.appendChild(h3Text);

    var h4 = document.createElement("h4");
    h4.className = "cal__days__day--ordinal";
    h4.id = "h4__" + dayNumber;
    var h4Text = document.createTextNode(info[languageGlobal].ordinals[dayNumber]);
    h4.appendChild(h4Text);

    var dayCard = document.createElement("div")
        // console.log(dayClass);
    if (dayClass) {
        dayCard.className = "cal__days__day " + dayClass;
    } else {
        dayCard.className = "cal__days__day ";
    }
    dayCard.appendChild(h2);
    dayCard.appendChild(h3);
    dayCard.appendChild(h4);

    // console.log(h3);
    // console.log(h4);
    // console.log(h5);

    document.getElementById("cal__days__grid").appendChild(dayCard)
}

function createSpacer(num) {
    var dayCard = document.createElement("div")
    dayCard.className = "cal__days__spacer";
    dayCard.id = "cal__days__spacer" + num;
    document.getElementById("cal__days__grid").appendChild(dayCard)
}

function createEndSpacer() {
    var dayCard = document.createElement("div")
    dayCard.className = "cal__days__spacer--end";

    document.getElementById("cal__days__grid").appendChild(dayCard)
}


function startCal() {
    var overallDate = masterDate();
    var today = overallDate.today;
    // var today = new Date();
    // var today = new Date("January 14, 2017");
    var year = today.getYear();
    if (year < 1000)
        year += 1900;
    var day = today.getDay() + 2;

    var month = today.getMonth() + 1;
    if (month < 10)
        month = "0" + month;
    var month1 = today.getMonth();
    var day1 = today.getDate();
    // console.log(day1);
    var firstDay = new Date(year, month1, 1);
    var firstDayNumber = firstDay.getDay();
    console.log(mon + '3');
    if (mon === 'mon') {
        if (firstDayNumber === 0) {
            firstDayNumber = firstDayNumber + 6;
        } else {
            firstDayNumber = firstDayNumber - 1;
        }

    }

    var monthLength = monthDays(month1, year);
    // console.log(monthLength);

    var daysLeft = 42 - (monthLength + firstDayNumber);

    document.getElementById('cal__heading--month').innerHTML = info[languageGlobal].month;
    document.getElementById('cal__heading--monthName').innerHTML = info[languageGlobal].months[month - 1];

    //create calendar item for total number of days in month and add incrementing numbers in it
    if (runFirstTime) {
        for (var i = 1; i <= monthLength; i++) {
            if (i + firstDayNumber === 1) {
                if (i === day1) {
                    createDay(i, 'cal__days__day--today');
                } else {
                    createDay(i, 'cal__days__day--weekend');
                }
            } else if ((i + firstDayNumber) % 7 === 0) {
                if (i === day1) {
                    createDay(i, 'cal__days__day--today');
                } else {
                    createDay(i, 'cal__days__day--weekend');
                }
            } else if ((i + firstDayNumber) % 7 === 1) {
                if (i === day1) {
                    createDay(i, 'cal__days__day--today');
                } else {
                    createDay(i, 'cal__days__day--weekend');
                }
            } else {
                if (i === day1) {
                    createDay(i, 'cal__days__day--today');
                } else {
                    createDay(i);
                }
            }

        }
        for (var i = 0; i < firstDayNumber; i++) {
            createSpacer(i);
        }
        for (var i = 0; i < daysLeft; i++) {
            createEndSpacer();
        }
    }
    if (runFirstTime) {

    } else {
        for (var i = 1; i <= monthLength; i++) {
            document.getElementById("h3__" + i).innerHTML = info[languageGlobal].numbers[i];
            document.getElementById("h4__" + i).innerHTML = info[languageGlobal].ordinals[i];
        }
    }
    runFirstTime = false;
}
