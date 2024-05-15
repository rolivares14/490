const textarea = document.querySelector('.text_input');

textarea.addEventListener('input', function() {
  this.style.height = 'auto'; 
  this.style.height = this.scrollHeight + 'px'; 
});

