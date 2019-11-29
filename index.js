const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
});



const createMeal = meal => {
        const ingredients = [];


        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(
                        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
    }


const newInnerHTML = `
<div class="row">
    <div class="columns five">
        <img src="${meal.strMealThumb}" alt="Meal Image">
        ${
    meal.strCategory
        ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
        : ''
    }
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${
    meal.strTags
        ? `<p><strong>Tags:</strong> ${meal.strTags
            .split(',')
            .join(', ')}</p>`
        : ''
    }
        <h5>Ingredients:</h5>
        <ul>
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
    </div>
    <div class="columns seven">
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
    </div>
</div>
${
    meal.strYoutube
        ? `
<div class="row">
    <h5>Video Recipe</h5>
    <div class="videoWrapper">
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
        </iframe>
    </div>
</div>`
        : ''
    }
    <footer class="myfooter">
    <h2 id="foot">Enjoy!!!!!!!!!</h2>
    <br>
    <p id="pfoot">follow me on social media</p>
    <div class="social">
        <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
        <a href="https://twitter.com/code_sammy98"><i class="fa fa-twitter fa-2x"></i></a>
        <a href="htttps://github.com/sammy-code98"><i class="fa fa-github fa-2x"></i></a>
    </div>
    <p id="copy" All right reserved &copy; 2019</p>



</footer>
`;

meal_container.innerHTML = newInnerHTML;

};