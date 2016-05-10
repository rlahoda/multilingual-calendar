# Web design file layout template

This is my own attempt at creating a template for my web development. So far I'm just working with HTML and CSS and just getting started a little with JS. I'm doing my CSS in SASS and my HTML in HAML so I've got those files in place. I'm assuming that when I set up the project in my preprocessor I'll tell it where to put the styles.css and index.haml files so as of right now I don't have any of those config files in place.

---

## Here's the overall structure of this template:

+ **root**

  + readme.md

  + **css**

  + **haml**

    + index.haml -_Index file for site: Set preprocessor to output Index.html to the root of the project_

  + **js**

  + **scss**

    + **modules** -_Common modules_

      + _all.scss -_Include to get all modules_

      + _colors.scss     

      + _utility.scss

    + **partials**

      + _base.scss -_imports for all mixins + global project variables_

      + _buttons.scss

      + _figures.scss

      + _grids.scss

      + _reset.scss

      + _state.scss -_Refers to the states for items. "Hidden", "Visible", "Active", "inactive" etc_

      + _typography.scss

    + **vendor**

    + styles.scss -_Master SCSS file that compiles all of the other parts together to output the final CSS file_







_Adapted from [http://thesassway.com/beginner/how-to-structure-a-sass-project](http://thesassway.com/beginner/how-to-structure-a-sass-project)_
