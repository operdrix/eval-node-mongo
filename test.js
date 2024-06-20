const htmlCode = `
<p>Les flippers <strong>Sega Enterprises Ltd.</strong> sont rares en France. Même sur les gros salons, il est difficile d'en voir.</p><p>L'aventure Sega Pinball, Inc a duré près de 5 ans pendant lesquels la compagnie a produit une vingtaine de <a href="https://www.lyon-flipper.com/flippers">flippers dotmatrix</a>. Le premier étant le flipper Mary Shelley's Frankenstein sorti en janvier 1995 et le dernier, le Harley Davidson sorti en septembre 1999.</p><p>Pour l'anecdote, le dernier flipper Sega Harley Davidson est d'abord sorti sous la marque Sega Pinball, Inc puis il a été réédité sous la marque Stern Pinball, Inc.</p>
`;

const jsonObject = {
    "htmlContent": htmlCode
};

console.log(JSON.stringify(jsonObject));