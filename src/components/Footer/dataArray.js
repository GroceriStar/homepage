let facebook = {
    linkClassName: 'icon alt fa-facebook',
    to: '/auth/facebook',
    spanClassName: 'label',
    spanContent: 'Continue with Facebook'
};

let github = {
    linkClassName: 'icon alt fa-github',
    to: 'https://github.com/GroceriStar',
    spanClassName: 'label',
    spanContent: 'GitHub Project'
};

let linkedin = {
     linkClassName: 'icon alt fa-linkedin',
    to: 'https://www.linkedin.com/company/11486092/',
    spanClassName: 'label',
    spanContent: 'LinkedIn'
};
        
let twitter = {
    linkClassName: 'icon alt fa-twitter',
    to: 'https://twitter.com/GroceriStar',
    spanClassName: 'label',
    spanContent: 'Twitter'
};

let email = {
    linkClassName: 'icon alt fa-envelope',
    to: 'mailto:arthur.tkachenko.netweight@gmail.com',
    spanClassName: 'label',
    spanContent: 'Email Us'
};

let terms = {
    to: '/terms',
    spanClassName: 'label',
    spanContent: 'Terms'
};

let privacy = {
    to: '/privacy',
    spanClassName: 'label',
    spanContent: 'Privacy'
};

let credits = {
    to: '/credits',
    spanClassName: 'label',
    spanContent: 'Credits'
};

let copyright = {
    to: '/credits',
    spanClassName: 'label',
    spanContent: 'Credits'
};

let social = [facebook, github, linkedin, twitter, email];
let legal = [terms, privacy, credits];

let data = [
    social,
    legal
];

export default data;