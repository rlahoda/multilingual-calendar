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
        "numbers": ["zero", "one", "two", "three", "four", "five", "six", "Seven", "eight", "new", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine", "ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine", "hundred"],
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


function startWeekDay(day) {
  startWeekDaySwap(day);
}

function startWeekDaySwap(day) {
console.log(day + " as is");
  if (day === "mon") {
    console.log(day + "if mon");
    document.getElementById('cal__week__day--sun').classList.add("cal__week__day--last");
    document.getElementById('cal__week__day--sun').classList.remove("cal__week__day--first");
  } else {
    console.log(day + "if sun");
    document.getElementById('cal__week__day--sun').classList.add("cal__week__day--first");
    document.getElementById('cal__week__day--sun').classList.remove("cal__week__day--last");
  };
}

// function startWeekDaySunday () {
//   document.getElementById('cal__week__day--sun').classList.remove("cal__week__day--last");
// }

// function startWeekDaySwap() {
//   if (document.getElementById('cal__week__day--sun').className.match(/(?:^|\s)cal__week__day--first(?!\S)/)) {
//     document.getElementById('cal__week__day--sun').className = document.getElementById('cal__week__day--sun').className.replace(/(?:^|\s)cal__week__day--first(?!\S)/g, ' cal__week__day--last');
//
//   } else {
//     document.getElementById('cal__week__day--sun').className = document.getElementById('cal__week__day--sun').className.replace(/(?:^|\s)cal__week__day--last(?!\S)/g, ' cal__week__day--first');
//   };
// };


function leapYear(year) {
    if (year % 4 == 0) // basic rule
        return true // is leap year
        /* else */ // else not needed when statement is "return"
    return false // is not leap year
}

function monthDays(month) {
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

function startTime(language) {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
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
    var day_y = yesterday.getDay() + 2;
    // var day_y=yesterday.getUTCDate();
    var month_y = yesterday.getMonth() + 1;
    if (month < 10)
        month = "0" + month;
    var year_y_word = year_y - 2016;

    var year_t = tomorrow.getYear();
    if (year_t < 1000)
        year_t += 1900;
    var day_t = tomorrow.getDay() + 2;
    // var day_t=tomorrow.getUTCDate();
    var month_t = tomorrow.getMonth() + 1;
    var year_t_word = year_t - 2016;

    if (month < 10)
        month = "0" + month;
    var daym = tomorrow.getDate();
    if (daym < 10)
        daym = "0" + daym;
    document.getElementById('clock__time__label').innerHTML = info[language].currenttime;
    document.getElementById('clock__num__hour').innerHTML = h;
    document.getElementById('clock__num__min').innerHTML = m;
    document.getElementById('clock__num__sec').innerHTML = s;

    document.getElementById('clock__word__hour').innerHTML = info[language].numbers[h];
    document.getElementById('clock__word__min').innerHTML = info[language].numbers[m1];
    document.getElementById('clock__word__sec').innerHTML = info[language].numbers[s1];


    document.getElementById('date__today__label').innerHTML = info[language].today;
    document.getElementById('date__num__day--today').innerHTML = day;
    document.getElementById('date__num__month--today').innerHTML = month;
    document.getElementById('date__num__year--today').innerHTML = year;

    document.getElementById('date__word__day--today').innerHTML = info[language].numbers[day];
    document.getElementById('date__word__month--today').innerHTML = info[language].months[month - 1];
    document.getElementById('date__word__year--today').innerHTML = info[language].years[year_word];


    document.getElementById('date__yesterday__label').innerHTML = info[language].yesterday;
    document.getElementById('date__num__day--yesterday').innerHTML = day_y;
    document.getElementById('date__num__month--yesterday').innerHTML = month_y;
    document.getElementById('date__num__year--yesterday').innerHTML = year_y;

    document.getElementById('date__word__day--yesterday').innerHTML = info[language].numbers[day_y];
    document.getElementById('date__word__month--yesterday').innerHTML = info[language].months[month_y - 1];
    document.getElementById('date__word__year--yesterday').innerHTML = info[language].years[year_y_word];


    document.getElementById('date__tomorrow__label').innerHTML = info[language].tomorrow;
    document.getElementById('date__num__day--tomorrow').innerHTML = day_t;
    document.getElementById('date__num__month--tomorrow').innerHTML = month_t;
    document.getElementById('date__num__year--tomorrow').innerHTML = year_t;

    document.getElementById('date__word__day--tomorrow').innerHTML = info[language].numbers[day_t];
    document.getElementById('date__word__month--tomorrow').innerHTML = info[language].months[month_t - 1];
    document.getElementById('date__word__year--tomorrow').innerHTML = info[language].years[year_t_word];



    document.getElementById('cal__heading--month').innerHTML = info[language].month;
    document.getElementById('cal__heading--monthName').innerHTML = info[language].months[month - 1];

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
    document.getElementById('cal__week__day--'+i).innerHTML = info[language].days[i];
  };
  //add names to week in language
}


// cal__week__day--sun



// function startCal() {
//   var today = new Date();
//   var year = today.getYear();
//   if (year < 1000)
//       year += 1900;
//   var day = today.getDay() + 2;
//   // console.log(day);
//   var month = today.getMonth() + 1;
//   if (month < 10)
//       month = "0" + month;
//
//   var firstDay = new Date(year, month, 1)
//   console.log(firstDay);
//
//   var monthLength = monthDays(month);
//
//
//
//   //create calendar item for total number of days in month and add incrementing numbers in it
//   for (var i = 0, i < monthLength, i++) {
//
//
//   }
//
//
//   //determine what day of the week the first day lands on and add enough empty date boxes in front to push the days to start on the correct day
//
//   //if the first day is sunday (0) AND the first day of the week is set to Monday, add 6 blanks
//   var dayNumber = today.getDay()
//
//   for (i = 0, i <= dayNumber, i++)
//
// }
