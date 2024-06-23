## 📜 Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

## 📝 Overview

### The challenge

- Your challenge is to integrate with the [REST Countries V2 API](https://restcountries.com/#api-endpoints-v2) to pull country data and display it like in the designs.

- Your users should be able to:
  - See all countries from the API on the homepage
  - Search for a country using an `input` field
  - Filter countries by region
  - Click on a country to see more detailed information on a separate page
  - Click through to the border countries on the detail page
  - Toggle the color scheme between light and dark mode

### Screenshot

<img src="https://user-images.githubusercontent.com/59930625/151432133-e3d8e53c-c0ff-4716-b71a-cb08856a45de.png" alt="Screenshot 1">
<img src="https://user-images.githubusercontent.com/59930625/151432125-4300ddd7-2c0d-400f-97db-de7c2d088f07.png" alt="Screenshot 2">

### Links

- Solution URL: [Link](https://github.com/Ravi-Singh-Git/Geo-Glance.git)
- Live Site URL: [Link](https://ravi-singh-git.github.io/Geo-Glance)

## 💡 My process

### Built with

- React JS
- React Router
- Redux
- Material UI
- CSS custom properties

### What I learned

#### 😎 Proud of this CSS:

**I feel that this is one of the cleanest ways for toggling the theme.**

1. Define all related colour values in `index.css`.

```css
:root {
  --dark-mode-text: hsl(0, 0%, 100%);
  --dark-mode-bg: hsl(207, 26%, 17%);
  --dark-mode-elements: hsl(209, 23%, 22%);

  --light-mode-text: hsl(200, 15%, 8%);
  --light-mode-bg: hsl(0, 0%, 98%);
  --light-mode-elements: hsl(0, 0%, 100%);
  --light-mode-input: hsl(0, 0%, 52%);
}
```

2. Use general variables like `text-color` in further code and change the values of such variables by simply reassigning them in `App.css`.

```css
.app {
  --text-color: var(--light-mode-text);
  --bg-color: var(--light-mode-bg);
  --elements-color: var(--light-mode-elements);
  --input-color: var(--light-mode-input);

  min-height: 100vh;
  width: 100%;
  background: var(--bg-color);
}

.darkmode.app {
  --text-color: var(--dark-mode-text);
  --bg-color: var(--dark-mode-bg);
  --elements-color: var(--dark-mode-elements);
  --input-color: var(--dark-mode-text);
}
```

#### 😎 Proud of this JS:

This could contain the entire JS code in this project. But I've chosen the part that took me longest amount of time to figure out.

_The response to `https://restcountries.com/v2/alpha/${id}` has borders in their codes (eg: IND for India). In order to get the country names, I had to fetch those countries separately._

**Here, I fetch _all_ countries once and then filter that response to find country names for the borders.**

```js
const [country, setCountry] = useState(empty);
const [allCountries, setAllCountries] = useState([]);

useEffect(() => {
  async function getThisCountry() {
    await fetch(`https://restcountries.com/v2/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((err) => console.log(err));
  }
  async function getAllCountries() {
    await fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
      })
      .catch((err) => console.log(err));
  }

  getThisCountry();
  getAllCountries();
}, [id]);

function getCountryName(countryId) {
  let borderCountry = allCountries.filter((country) => {
    if (country.alpha3Code === countryId) {
      return true;
    } else {
      return false;
    }
  });
  return borderCountry[0] ? borderCountry[0].name : "";
}
```

```js
<div className="countryDetails__borders">
  <span>Border Countries: </span>
  {country.borders ? (
    <div className="countryDetails__bordersBtn">
      {country.borders.map((border) => {
        return (
          <Button onClick={() => history.push(`/country/${border}`)}>
            {getCountryName(border)}
          </Button>
        );
      })}
    </div>
  ) : (
    "None"
  )}
</div>
```

### Continued development

I want to refine the search and filter functionailties on main page further.

- Searching on typing. Right now user has to press `Enter`.
- Intermixing both. Like:
  - Searching filtered items
  - Filtering searched items

## 🔎 Useful resources

#### 📙 API Documentation:

- [REST COUNTRIES API Documentation](https://restcountries.com/#api-endpoints-v2)

#### 🧩 Stackoverflow:

- [Get id from url in react.js](https://stackoverflow.com/a/64238645/12302691)

- [Calling only once two functions in useEffect](https://stackoverflow.com/a/61577142/12302691)

- [How to print a number with commas as thousands separators in JavaScript](https://stackoverflow.com/a/2901298/12302691)

- [Text overflow ellipsis on two lines](https://stackoverflow.com/a/34559614/12302691)

## ⭐ Author

- GitHub - [@anushkachauhxn](https://github.com/Ravi-Singh-Git)
- LinkedIn - [@anushka-chauhan](https://www.linkedin.com/in/ravi-singh-942b20298/)

















To update changes in your GitHub Pages deployment, follow these steps:

Step 1: Make Changes to Your Project
Make the necessary changes to your React project locally.

Step 2: Commit and Push Changes to GitHub
Stage your changes:

sh
Copy code
git add .
Commit your changes:

sh
Copy code
git commit -m "Describe your changes"
Push your changes to the main branch:

sh
Copy code
git push origin main
Step 3: Deploy Changes to GitHub Pages
After pushing your changes to the repository, you need to deploy the updated project to GitHub Pages.

Build your project:

sh
Copy code
npm run build
Deploy to GitHub Pages:

sh
Copy code
npm run deploy
