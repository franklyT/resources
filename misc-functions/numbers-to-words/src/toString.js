window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#numberToPrint').addEventListener('change', () => {
    document.querySelector('#numberPrint').innerHTML = printToNum(
      document.querySelector('#numberToPrint').value,
    );
  });
});

// https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript

function printToNum(n) {
  const arr = x => Array.from(x);
  const num = x => Number(x) || 0;
  const isEmpty = xs => xs.length === 0;
  const take = n => xs => xs.slice(0, n);
  const drop = n => xs => xs.slice(n);
  const reverse = xs => xs.slice(0).reverse();
  const comp = f => g => x => f(g(x));
  const not = x => !x;
  const chunk = n => xs => (isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))]);

  const a = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const g = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
  ];
  const makeGroup = ([ones, tens, huns]) => [
    num(huns) === 0 ? '' : `${a[huns]} hundred `,
    num(ones) === 0 ? b[tens] : (b[tens] && `${b[tens]}-`) || '',
    a[tens + ones] || a[ones],
  ].join('');
  const thousand = (group, i) => (group === '' ? group : `${group} ${g[i]}`);
  if (typeof n === 'number') return printToNum(String(n));
  if (n === '0') return 'zero';
  return comp(chunk(3))(reverse)(arr(n))
    .map(makeGroup)
    .map(thousand)
    .filter(comp(not)(isEmpty))
    .reverse()
    .join(' ');
}
