import React from 'react';

import { dictionaryLatin } from '../Dictionary/Latin.js'

  export function helperRandomIntBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }

  // Quick templating to prevent peppering the codebase with tags
  export function helperTemplateText(replacer, text, delimiter = '%') {
    return <div dangerouslySetInnerHTML={{__html: text.split(delimiter).join(replacer)}} />;
  }

  export function helperGetToday() {
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept','Oct', 'Nov', 'Dec'],
          days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
          today = new Date(),
          dd = today.getDate(),
          mm = today.getMonth(),
          yyyy = today.getFullYear();

    return `${ days[today.getDay()] }, ${ months[mm < 10 ? (0 + mm): mm] } ${
      dd < 10 ? (0 + dd) : dd
    }, ${yyyy}`;
  }

  export function helperGetText(count = 35) {
    let textLength = count;
    let text = [];

    while (textLength > 0) {
      textLength--;
      text.push(
        dictionaryLatin[
          Math.floor(Math.random() * dictionaryLatin.length)
        ]
      );
    }
    text[0] = text[0][0].toUpperCase() + text[0].slice(1, text[0].length - 1);

    return text.join(' ');
  }

  export function helperGetCategory() {
    const categories = ["TECH", "WORLD", "U.S.", "BUSINESS", "CULTURE", "SPORTS", "HEALTH", "OPINION"];
    return categories[helperRandomIntBetween(0, categories.length-1)];
  }
