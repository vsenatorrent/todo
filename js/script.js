var addbtn = document.querySelector('.button');

addbtn.onclick = function () {
  var inputValue = document.querySelector('.input').value;
  var list = document.getElementById('list');
  var li = document.createElement('li');
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (document.querySelector('.input').value == '') {
    alert('добавьте задачу');
  } else {
    list.appendChild(li);
  }

  var readyList = document.getElementsByTagName('li');
  for (var i = 0; i < readyList.length; i++) {
    var span = document.createElement('span');
    var x = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(x);
    readyList[i].appendChild(span);
    readyList[i].onclick = function () {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {

      }
    }
  }

  var close = document.querySelectorAll('.close');

  for (var j = 0; j < close.length; j++) {
    close[j].onclick = function () {

      for (var i = 0; i < readyList.length; i++) {
        if (readyList[i].classList.contains('active')) {
          var parent = this.parentElement;
          parent.style.display = 'none';
        }
      }

    }
  }



}
