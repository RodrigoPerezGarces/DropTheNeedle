module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-snipcart-advanced`,
            options: {
                version: '3.0.15',
                publicApiKey: 'MmZiMzI4NjAtNjAzYi00OWI5LWJiNDctNzczNDZmZDBiMzg2NjM3MzE0MzI0NDM4MjM4MTQy', // use public api key here or in environment variable
                defaultLang: 'es',
                currency: 'eur',
                openCartOnAdd: false,
                locales: {
                    es: {
                        actions: {
                            checkout: 'Valider le panier',
                        },
                    }
                },
                innerHTML: `
            <billing section="bottom">
                <!-- Customization goes here -->
            </billing>`,
            },
        },
    ],
}