# Multilingual calendar and date

To see the working version of this code, check it out on CodePen at: [http://codepen.io/rlahoda/pen/ZpKAGj](http://codepen.io/rlahoda/pen/ZpKAGj)

## This project is a calendar that I created as a way to help with learning French and also Javascript. The idea was to create a calendar that could be changed into different languages so that readers are able to practice knowing the days of the week, numbers, months of the year and other information related to time and date.

---

The calendar pulls the language information using an AJAX call to the languages.json file here. Anyone can add a language by following the template set up in the file.

### To add a new language copy the block of code below and follow these steps:

1. Replace **"english"** with the language you want to add
1. JSON is structured with a label and the contents. So the label, the word before the colon, **must** stay in english. Translate the word or words inside the quotes to the language you want to add
  * Example: "month" : **"month"** would become "month" : **"mois"**
  * "today" : **"today"** would become "today" : **"aujourd'hui"**
1. The individual words you need to translate are:
  * month
  * current time
  * today
  * yesterday
  * tomorrow
1. Then there are groups of words that need to be translated
  * The days of the week
  * The months of the year
  * The next few years (my current has 2016, 2017 and 2018 written out)
  * The numbers from 0 to 100
  * The ordinal numbers (first, second, third, etc) from 0 to 31st
 1. **If you have a language (such as German) that has very long words, to allow it to break the text into multiple lines appropriately, please add \u00ad inside the word where you want it to break. This will tell the browser to add a hyphen (-) in the word.**
  * So in German the word for 2018 is "zweitausendachtzehn". Written with the break character it would be: "zweitausend\u00adachtzehn" and would result in this:
  
  "zweitausend-
  
  achtzehn"
  
1. Once you have the full code block translated, add it to the end of the language list in the `languages.json` file and create a pull request.

*Remember, the JSON format requires that there's a comma after every block of the code except the last one. So if you add your language to the end you must add a comma at the end of the block before it!*
So the overall code would be:
```{
    "english": {...
    },
    "french": {...
    }
}```



```json
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
}
```
