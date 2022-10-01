console.log('DOM FILE');

const body = document.querySelector('body');

const bodyStyling = () => {
    body.style.background = 'cadetblue';

};

const addTitle = (text) => {
    const title = document.createElement('h2');
    title.textContent = text;
    body.appendChild(title);
}

const thisTitle = 'WElcome to this world';

export {addTitle, bodyStyling, thisTitle}