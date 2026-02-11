

//footer

export const logoSubtext = 'Some days call for salads, and some days call for the cheesy, gooey comfort of a fresh pizza'

// ----------------------------------------------------------------------------

//Home -> Hero Section

export const pizzaLovers = 'pizza lovers'
export const highlight1 = 'pizza'
export const highlight2 = 'blogging'
export const heroSubtext = 'A pizza slice a day, keeps sadness away'
export const heroButtonText = 'Explore now'


//Home -> blog of the day section

export const blogOfDay = 'Blog of the day'


//pizzas
export const pizzas = [
    {
        _id:111,
        link:'/chessypizza.png',
        title:'creamy cheesy pizza',
        slug:'Pizza was jokingly called Cheese On Cheese Action',
        ingredients: ['cheese', 'dough','cream'],
        totalIngredients: 'below 5',
        variety:'cheese',
        instructions:[
            'At least 30 minutes before you plan to bake your pizza, preheat the oven to 450° Fahrenheit (232°C). If you have one, place a pizza steel or pizza stone into the oven before preheating.',
            'If your pizza dough is cold, allow it to warm at room temperature for 20 to 30 minutes.',
            'When ready to bake your pizza, prepare a pizza peel or pizza pan by dusting it with semolina flour.',
            'In a medium bowl, mix the shredded mozzarella, parmesan, chives, and oregano together.',
            'Dust a clean work surface with all-purpose flour, and then form your pizza dough into a round, large enough to fit your pizza peel or pan. To stretch the dough, avoid rolling it out, as this can flatten the bubbles that have formed. Instead, use your fingers to make dimples in the dough, starting from the center and working outwards. Carefully stretch and push the dough to fit your pizza pan or',
            'Transfer the dough round to your pizza peel or pan, and reform it if it shrinks back a bit.',
            'Spread pizza sauce over the pizza, leaving a thin edge untouched for the crust. Scatter the cheese mixture over the sauce.',
            'Bake until the crust is set and golden brown and the cheese has melted with golden spots all over, 6 to 15 minutes, depending on oven temperature. Remove from the oven, cut, and serve.'
        ],
        nutrition:[
            {
                nutrient:'calories',
                quantity:330
            },
            {
                nutrient:'fat',
                quantity:9.1
            },
            {
                nutrient:'Cholesterol',
                quantity:27.2
            },
            {
                nutrient:'Carbohydrate ',
                quantity:45.5
            },
            {
                nutrient:'Sugar ',
                quantity:1.7
            },
            {
                nutrient:'Protein',
                quantity:15.8
            },
        ],
        keyword:'today',
        status:'NA',
        publishedAt:'03 JAN 2026'
    },
    {
        _id:222,
        link:'/paneerpizza.png',
        title:'spicy paneer pizza',
        ingredients: ['chilli', 'dough','paneer', 'origono'],
        totalIngredients: 'below 5',
        variety:'paneer',
        keyword:'today',
        status:'A',
        publishedAt:'03 JAN 2026'
    },
    {
        _id:333,
        link:'/seafoodpizza.png',
        title:'delicious sea food pizza',
        ingredients: ['prawn', 'dough'],
        totalIngredients: 'below 5',
        variety:'sea food',
        keyword:'today',
        status:'NA',
        publishedAt:'03 JAN 2026'
    },
    {
        _id:444,
        link:'/chillipizza.png',
        title:'chilli pizza',
        variety:'chilli',
        ingredients: ['chilli', 'dough', 'Mexican blend cheese', 'olive', 'scallion', 'onion', 'tomatos', 'sour cream', 'guacamole'],
        totalIngredients: 'above 5',
        keyword:'featured',
        status:'A',
        publishedAt:'07 DEC 2025'
    },
    {
        _id:555,
        link:'/baconpizza.png',
        title:'bacon pizza',
        variety:'bacon',
        ingredients: ['chilli', 'dough', 'Mexican blend cheese', 'olive', 'scallion', 'onion', 'tomatos', 'sour cream', 'guacamole'],
        totalIngredients: 'above 5',
        keyword:'featured',
        status:'A',
        publishedAt:'27 NOV 2025'
    },
    {
        _id:666,
        link:'/tomatopizza.png',
        title:'tomato pizza',
        variety:'tomato',
        ingredients: ['chilli', 'dough', 'Mexican blend cheese', 'olive', 'scallion', 'onion', 'tomatos', 'sour cream', 'guacamole'],
        totalIngredients: 'above 5',
        keyword:'featured',
        status:'A',
        publishedAt:'02 MAY 2025'
    }
]

//Home -> featured blog

export const featuredBlog = 'Featured blog'


//Home -> Subscribe box

export const subscribeHeading = 'Never Miss a Blog!'
export const subscribePara = 'Subscribe to get the latest blog, new tech, and exclusive news.'
export const subscribeButton = 'Subscribe'

// ----------------------------------------------------------------------------

//blog -> Hero Section

export const blogHeaderText = 'Explore our blogs'
export const blogSubTextData = [
    'Dough-licious Discoveries: New Toppings to Try',
    'The Ultimate Guide to the Perfect Pizza Night',
    'From Oven to Doorstep: Our Pizza Journey',
    'Cheese. Sauce. Repeat',
    'Your next slice is just one tap away,'
]

//blog -> filter section

export const filter = 'Filters'
export const variety = [
    'cheese',
    'chilli',
    'paneer',
    'sea food',
    'bacon'
]
export const nutrients = [
    'calories', 'fat', 'vitamin', 'mineral', 'protein'
]
export const keywords = ['today', 'featured', 'normal']

export const noIngredients = [ 'below 5', 'above 5', 'above 10', 'above 20']

export const filters = [
    {
        title:'Select a pizza variety',
        valueTag:"variety",
        options: variety,
    },
    {
        title:'No of ingredients',
        valueTag:"ingredients",
        options: noIngredients
    },
]

export const searchMore = 'search more...'
export const apply = 'Apply'

// ----------------------------------------------------------------------------

//blog detail 

export const ingredientHeaderText = 'Ingredients'
export const noOfIngredientText = 'No of Ingredients'
export const stepHeaderText = 'Instructions'
export const nutrientHeaderText = 'Nutrients'
export const commentHeaderText = 'Comments'
export const addComment = 'Add a comment...'
export const sendText = 'send'
export const noComments = 'No comments found...'

export const comments = [
    {
        blogId:111,
        comments: [
            {
                _id:'user1',
                userName: 'priya',
                comment:'Nice recipe, helps to make easy'
            },
            {
                _id:'user2',
                userName: 'harish',
                comment:'This recipe helps to convince child cravings'
            }
        ],
    },
    {
        blogId:222,
        comments: [
            {
                _id:'user3',
                userName: 'preethi',
                comment:'Good'
            },
            {
                _id:'user4',
                userName: 'Balaji',
                comment:'Very tasty and delicious recipe. Everyone must try this!'
            },
            {
                _id:'user5',
                userName: 'Seeni',
                comment:'Great!'
            },
            {
                _id:'user6',
                userName: 'Prakash',
                comment:'Yummy!'
            },
            {
                _id:'user7',
                userName: 'Viji',
                comment:'Nice'
            },
            {
                _id:'user8',
                userName: 'Amir',
                comment:'😍'
            },
            {
                _id:'user1',
                userName: 'Bregya',
                comment:'Loved it'
            },
            {
                _id:'user9',
                userName: 'Swathi',
                comment:'🤩🤩🤩'
            },
        ],
    },
    {
        blogId:333,
        comments: [
            {
                _id:'user10',
                userName: 'Archana',
                comment:'Try to add more ingrediant🥲'
            },
            {
                _id:'user11',
                userName: 'Pooja',
                comment:'Ingrediants are not sufficient'
            },
            {
                _id:'user12',
                userName: 'Bharath',
                comment:'Nice try'
            },
            {
                _id:'user13',
                userName: 'Aswini',
                comment:'🤗'
            },
            {
                _id:'user15',
                userName: 'Vicky',
                comment:'Need more detailed explanation'
            },
            {
                _id:'user16',
                userName: 'Jansi',
                comment:'Nice to have video as a reference'
            },
        ],
    },
]


// ----------------------------------------------------------------------------

//Search -> hero section

export const searchHighlight = 'Search'
export const searchHeroText = 'Your Pizzaaa...'


//-----------------------------------------------------------------------------

//Not found
export const notFound = 'Blog not found 😥'
export const refresh = 'Refresh'


//***************************************** ADMIN ***********************************************

// login

export const loginText = 'Login'

//side bar 

export const adminLogoText = 'Admin'


//-----------------------------------------------------------------------------

//dashboard -> chart section

export const featuredChartHeaderText = 'Featured'
export const commentChartHeaderText = 'Comment'
export const blogChartHeaderText = 'Blog'
export const todayBlogHeaderText = 'Today\'s blog'


//-----------------------------------------------------------------------------

//blog -> recent blog section

export const approvedButtonText = 'Approved'
export const notApprovedButtonText = 'Not Approved'
export const recentBlogTableHeaderText = 'Recent Blog'
export const addButtonText = 'Add'
export const updateButtonText = 'Update'
export const viewButtonText = 'View'

export const recentBlogTable = [
    {
        _id:'recent-sno',
        title:'S.no'
    },
    {
        _id:'recent-id',
        title:'Id'
    },
    {
        _id:'recent-blogName',
        title:'Blog Name'
    },
    {
        _id:'recent-status',
        title:'Status'
    },
]

export const viewBlogTable = [
    {
        _id:'recent-sno',
        title:'S.no'
    },
    {
        _id:'view-id',
        title:'Id'
    },
    {
        _id:'view-blogName',
        title:'Blog Name'
    },
    {
        _id:'view-action',
        title:'Action'
    },
]


//-----------------------------------------------------------------------------

//comment -> comment section

export const commentTableHeaderText = 'Comments by blog'

export const commentBlogTable = [
    {
        _id:'recent-sno',
        title:'S.no'
    },
    {
        _id:'comment-id',
        title:'User Id'
    },
    {
        _id:'comment-comment',
        title:'Comment'
    },
    {
        _id:'comment-action',
        title:'Action'
    },
]
