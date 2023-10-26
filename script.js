// dummy text assing here.
const dummyText = [
    'Pie macaroon cake tootsie roll chocolate cake chocolate bar. Powder sesame snaps gingerbread cheesecake gingerbread caramels fruitcake. Candy gingerbread fruitcake sweet roll pastry gummi bears shortbread cake. Candy jelly-o shortbread biscuit chocolate cake cookie marzipan wafer topping. Lollipop tiramisu danish bonbon biscuit lollipop. Soufflé powder soufflé gummi bears muffin. Fruitcake jelly chocolate cake sesame snaps marshmallow toffee. Bonbon sugar plum tart cake liquorice tiramisu biscuit chocolate bar. Chocolate bar pie sesame snaps icing bear claw. Topping oat cake lemon drops icing topping tootsie roll croissant.',
    'Tiramisu chocolate cake liquorice lemon drops jelly. Biscuit gingerbread sesame snaps candy canes soufflé. Jujubes jelly beans shortbread carrot cake bonbon tiramisu gingerbread. Pudding icing icing pie cookie chocolate bar halvah. Tootsie roll lollipop biscuit topping powder chupa chups powder topping lemon drops. Sweet roll shortbread cupcake sugar plum halvah candy canes. Cotton candy pastry chupa chups carrot cake chocolate cake bonbon.',
    'Cheesecake tootsie roll topping croissant dessert. Danish bonbon croissant liquorice pie oat cake oat cake tiramisu shortbread. Sugar plum tart pudding cake sweet roll jelly-o chupa chups tootsie roll wafer. Oat cake marshmallow chupa chups wafer carrot cake muffin cake. Candy sweet brownie caramels liquorice. Macaroon dragée gummi bears cake lollipop liquorice. Ice cream halvah tootsie roll caramels dragée chupa chups brownie icing oat cake. Brownie cheesecake bonbon cake sesame snaps oat cake.',
    'Donut gummi bears cake bear claw brownie ice cream powder chocolate danish. Jelly donut gummi bears candy canes icing pudding. Chupa chups chupa chups tiramisu topping tiramisu. Cake carrot cake tiramisu oat cake marzipan gummi bears marzipan soufflé oat cake. Cheesecake carrot cake dragée jelly-o gummi bears. Biscuit liquorice sugar plum tiramisu lemon drops jelly-o. Topping pie ice cream toffee brownie soufflé ice cream caramels. Tootsie roll croissant jelly beans cupcake marshmallow chocolate caramels lollipop gingerbread. Cheesecake icing carrot cake biscuit chocolate tiramisu wafer donut. Liquorice bonbon chupa chups wafer shortbread biscuit chupa chups.',
    'Bear claw caramels muffin sesame snaps cotton candy cake lollipop tootsie roll. Icing sweet roll gingerbread topping oat cake cheesecake fruitcake. Macaroon cookie biscuit candy pastry shortbread caramels. Pastry tart jelly beans bear claw gummi bears toffee. Chocolate cake liquorice croissant soufflé marshmallow sesame snaps lemon drops. Cookie pastry oat cake jelly jujubes muffin caramels caramels.',
    'Carrot cake gummi bears cheesecake lollipop fruitcake croissant. Sugar plum chupa chups danish croissant wafer. Sesame snaps oat cake fruitcake jelly-o dragée ice cream jelly beans jelly-o. Oat cake croissant donut lemon drops danish pudding danish. Sesame snaps jelly-o tiramisu chocolate bar chocolate cake icing. Marzipan cake croissant danish pudding chocolate cake gummies muffin toffee.',
    'Cake powder gummi bears lemon drops bear claw. Marshmallow sesame snaps tootsie roll gummies sugar plum brownie dragée. Sugar plum biscuit jelly-o sweet roll chupa chups pastry chocolate bar. Lemon drops soufflé donut dessert carrot cake candy canes. Powder candy bonbon chocolate bar fruitcake. Chocolate lollipop pastry pie pudding. Dessert pastry gingerbread halvah chocolate bar brownie soufflé icing.',
    'Halvah croissant biscuit chocolate bar gummi bears gummies chocolate cake chocolate bar topping. Soufflé marshmallow bonbon oat cake chupa chups croissant. Sweet roll gingerbread oat cake cookie pudding tart. Dragée gummies candy jelly cotton candy chocolate. Candy jelly beans marzipan chupa chups cookie gummies. Ice cream shortbread marzipan cotton candy jelly beans sweet.',
    'Shortbread marzipan candy donut chocolate cake danish. Oat cake icing sweet liquorice dragée pudding pudding. Biscuit dessert bear claw chocolate cake jujubes cake wafer bonbon. Croissant oat cake sweet candy brownie chocolate cake caramels chocolate. Chocolate cake croissant toffee dragée cheesecake pastry. Topping tootsie roll sweet roll biscuit toffee brownie. Toffee gummi bears croissant oat cake pie chocolate gummies chocolate bar.'
]

// DOM element selection.
const formInput = document.querySelector("#paragraphNumber");
const formBtn = document.querySelector("#generatorBtn");

const generatedText = document.querySelector("#generatedText");



// event listener for text generation.
formBtn.addEventListener("click", (event) => {
    event.preventDefault();
   // variable declaretion and assign the value.
    const inputValue = parseInt(formInput.value);
    const randomValue = Math.floor(Math.random() * dummyText.length);

    if (isNaN(inputValue) || inputValue <= 0 || inputValue >= dummyText.length) {
        generatedText.innerHTML = `<p>${dummyText[randomValue]}</p>`
    } else {
        let slicedArray = dummyText.slice(0, inputValue);
    
        generatedText.innerHTML = slicedArray.map((singleDummyText) => {
            return `<p>${singleDummyText}</p>`;
        }).join("");
    }
});        
