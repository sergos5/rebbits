const squareBody = document.querySelector('.square-body');
const resetBtn = document.querySelector('.btn-reset');

let blocks = document.querySelectorAll('.block');

squareBody.addEventListener('click', (e) => {
    blocks = document.querySelectorAll('.block');
    if (e.target.closest('.block') && e.target.closest('.arrow')) {
        blocks.forEach((item, index) => {
            const targetBlock = e.target.closest('.block');
            const targetArrow = e.target.closest('.arrow');
            if (item === targetBlock) {
                if (targetArrow.classList.contains('right') && (index + 1) < blocks.length) {
                    blocks[index + 1].after(blocks[index]);
                }
                if (targetArrow.classList.contains('left') && (index) > 0) {
                    blocks[index - 1].before(blocks[index]);
                }
                if (targetArrow.classList.contains('top') && (index - 4) > 0) {
                    blocks[index - 5].before(blocks[index]);
                    blocks[index + 1].before(blocks[index - 5]);
                }
                if (targetArrow.classList.contains('bottom') && (index + 5) < blocks.length) {
                    blocks[index + 5].after(blocks[index]);
                    blocks[index - 1].after(blocks[index+5]);                     
                }
            }
        });
    }
});

resetBtn.addEventListener('click', () => {
    blocks = document.querySelectorAll('.block');
    blocks.forEach((item, index) => {
        const blockNumber = item.querySelector('.block-number');
        blockNumber.textContent = index + 1;
    });
});