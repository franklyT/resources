// React component version of random number function, framed within "Helper" class
class Helper {
    static randomIntBetween(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
      }
    }
export default Helper;


// React date parser
class ParseDate {
  static GetToday() {
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
}

export default ParseDate;


// React Lorem Ipsum generator, used for prototyping

class LoremIpsum {
  static GetDictionary() {
    return ['a', 'ac', 'accumsan', 'ad', 'adipiscing', 'aenean', 'aenean', 'aliquam', 'aliquam', 'aliquet', 'amet', 'ante', 'aptent',
            'arcu', 'at', 'auctor', 'augue', 'bibendum', 'blandit', 'class', 'commodo', 'condimentum', 'congue', 'consectetur',
            'consequat', 'conubia', 'convallis', 'cras', 'cubilia', 'curabitur', 'curabitur', 'curae', 'cursus', 'dapibus', 'diam',
            'dictum', 'dictumst', 'dolor', 'donec', 'donec', 'dui', 'duis', 'egestas', 'eget', 'eleifend', 'elementum', 'elit', 'enim',
            'erat', 'eros', 'est', 'et', 'etiam', 'eu', 'euismod', 'facilisis', 'fames', 'faucibus', 'felis', 'fermentum', 'feugiat',
            'fringilla', 'fusce', 'gravida', 'habitant', 'habitasse', 'hac', 'hendrerit', 'himenaeos', 'iaculis', 'id', 'imperdiet',
            'in', 'inceptos', 'integer', 'interdum', 'ipsum', 'justo', 'lacinia', 'lacus', 'laoreet', 'lectus', 'leo', 'libero',
            'ligula', 'litora', 'lobortis', 'lorem', 'luctus', 'maecenas', 'magna', 'malesuada', 'massa', 'mattis', 'mauris', 'metus',
            'mi', 'mollis', 'morbi', 'nam', 'nec', 'neque', 'netus', 'nibh', 'nisi', 'nisl', 'non', 'nostra', 'nulla', 'nullam', 'nunc',
            'odio', 'orci', 'ornare', 'pellentesque', 'per', 'pharetra', 'phasellus', 'placerat', 'platea', 'porta', 'porttitor',
            'posuere', 'potenti', 'praesent', 'pretium', 'primis', 'proin', 'pulvinar', 'purus', 'quam', 'quis', 'quisque', 'quisque',
            'rhoncus', 'risus', 'rutrum', 'sagittis', 'sapien', 'scelerisque', 'sed', 'sem', 'semper', 'senectus', 'sit', 'sociosqu',
            'sodales', 'sollicitudin', 'suscipit', 'suspendisse', 'taciti', 'tellus', 'tempor', 'tempus', 'tincidunt', 'torquent',
            'tortor', 'tristique', 'turpis', 'ullamcorper', 'ultrices', 'ultricies', 'urna', 'ut', 'varius', 'vehicula', 'vel', 'velit',
            'venenatis', 'vestibulum', 'vitae', 'vivamus', 'viverra', 'volutpat', 'vulputate'
           ];
  }

  static GetText(count = 35) {
    let textLength = count;
    let text = [];

    while (textLength > 0) {
      textLength--;
      text.push(
        this.GetDictionary()[
          Math.floor(Math.random() * this.GetDictionary().length)
        ]
      );
    }
    text[0] = text[0][0].toUpperCase() + text[0].slice(1, text[0].length - 1);

    return text.join(' ');
  }
}

export default LoremIpsum;
