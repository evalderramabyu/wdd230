const input = document.querySelector('#favchap');
const button = document.querySelector('.input button');
const list = document.querySelector(".listcontainer .list");

function addChapter() {
		if (input.value != '') {
			const listItem = document.createElement('li');
			listItem.textContent = input.value;

			const listBtn = document.createElement('button');
			listBtn.textContent = "❌";

			listBtn.addEventListener('click', () => {
				list.removeChild(listItem);
			});

			listItem.appendChild(listBtn);
			list.appendChild(listItem);

			input.value = '';
			input.focus();
		}
}


button.addEventListener("click", addChapter);
