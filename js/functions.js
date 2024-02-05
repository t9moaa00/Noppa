const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

document.getElementById('dice').addEventListener('click', () => {
    console.log('click')
    const randomized_number = getRandomIntNumberInRange(1,6)
    console.log (randomized_number)
    document.getElementById('noppa').src="./img/" + randomized_number + ".png"
    
})