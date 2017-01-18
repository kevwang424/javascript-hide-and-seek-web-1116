function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const numbers = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < numbers.length; i++){
    numbers[i].innerHTML = parseInt(numbers[i].innerHTML) + n
  }
}

function deepestChild(){
  const deep = document.querySelector('div#grand-node')

  const rachel = deep.getElementsByTagName('div')
  return rachel[rachel.length - 1]
}
