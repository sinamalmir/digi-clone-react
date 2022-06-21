 const shorten = (title) => {
    const splitedTitel = title.split(" ");
    const newTitle = `${splitedTitel[0]} ${splitedTitel[1]} `;
    return newTitle;
}


export {shorten};