const fetch = require('cross-fetch');

const JSON_URL = 'https://docs.blockstack.org/faqs/allfaqs.json'

module.exports = async () => {
    const response = await fetch(JSON_URL);
    const json = await response.json();

    let categories = {}
    await Promise.all(json.faqs.map(async (question) => {
        categories[question.category] = json.faqs.filter(q => q.category === question.category)
    }))

    return categories;
};
