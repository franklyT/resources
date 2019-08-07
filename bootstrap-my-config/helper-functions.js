// querySelector helper rewrites, polyfill querySelector if necessary
function select(sel) {
  return typeof sel === 'string' ? document.querySelector(sel) : sel;
}

function selectAll(sel) {
  return typeof sel === 'string' ? document.querySelectorAll(sel) : sel;
}

// native safety check
function isNative(fn) {
  console.log(/\{\s*\[native code\]\s*\}/.test(`${fn}`));
}

// load to the DOM with a performance metric
async function callWithPerf(fn) {
  const start = new Date().getTime();
  await fn();
  console.log(`${fn.name} took ${new Date().getTime() - start} ms to execute.`);
}

// DOM load wrapper
function onDOMLoad(method) {
  return window.addEventListener(
    'DOMContentLoaded',
    () => {
      // eslint-disable-next-line no-unused-expressions
      method;
    },
    false,
  );
}


// random number utility function
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// React component version of random number function, framed within "Helper" class
class Helper {
    static randomIntBetween(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
      }
    }
export default Helper;


// console clear utility function, should largely not be used
function cClear(timeoutinms) {
  setTimeout(() => {
    console.clear();
    console.log('Console was cleared.');
  }, timeoutinms);
}

// capitalization utility function
function capitalizeMe(text) {
  const capitalText = text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  return capitalText;
}

function timeConverter(time) {
  const timeR = time.split(':'); // convert to array

  // fetch
  const hours = Number(timeR[0]);
  const minutes = Number(timeR[1]);

  // calculate
  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = `${hours}`;
  } else if (hours > 12) {
    timeValue = `${hours - 12}`;
  } else if (hours === 0) {
    timeValue = '12';
  }

  timeValue += minutes < 10 ? `:0${minutes}` : `:${minutes}`; // get minutes
  timeValue += hours >= 12 ? ' P.M.' : ' A.M.'; // get AM/PM

  return timeValue;
}

// Helper function for time of day
function getDayState() {
  const dayTime = new Date().getHours();
  if (dayTime < 12) {
    return 'Morning';
  }
  if (dayTime >= 12 && dayTime < 17) {
    return 'Afternoon';
  }
  if (dayTime >= 17) {
    return 'Night';
  }
  return null;
}


// Helper function to test whether or not an element is outside of the viewport bounds
function isInViewport(elm) {
  const bounding = elm.getBoundingClientRect();
  return (
    bounding.top >= 0
    && bounding.left >= 0
    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

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

