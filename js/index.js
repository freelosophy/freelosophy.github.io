let spinner = document.getElementById('spinner');
let btn = document.getElementsByTagName('button')[0];
let searchForm = document.getElementById('searchForm');
let input = document.getElementsByTagName('input')[0];

btn.addEventListener('click', () => {
  if (input.value !== "") {
    searchForm.style.display = 'none';
    spinner.style.display = 'block';
  }
});
