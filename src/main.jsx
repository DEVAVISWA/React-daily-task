import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const cardDatas = [
    {
        id: 1,
        smallHeadder: "FREE",
        price: "$0/month",
        features: ['✔ Single User', '✔ 50GB storage', '✔ Unlimited Public Projects', '✔ Community Access', '✘ Unlimited Private Projects', '✘ Deticated Phone Support', '✘ Free Subdomain', '✘ Monthly Status Reports'],
        feature1: {
            feature: 'Single User',
            condition: true
        },
        feature2: {
            feature: '50GB Storage',
            condition: true
        },
        feature3: {
            feature: 'Unlimited Public Projects',
            condition: true
        },
        feature4: {
            feature: 'Community Access',
            condition: true
        },
        feature5: {
            feature: 'Unlimited Private Projects',
            condition: false
        },
        feature6: {
            feature: 'Deticated Phone Support',
            condition: false
        },
        feature7: {
            feature: 'Free Subdomain',
            condition: false
        },
        feature8: {
            feature: 'Monthly Status Reports',
            condition: false
        }
    },
    {
        id: 2,
        smallHeadder: "PLUS",
        price: "$9/month",
        features: ['✔ 5 User', '✔ 50GB storage', '✔ Unlimited Public Projects', '✔ Community Access', '✔ Unlimited Private Projects', '✔ Deticated Phone Support', '✔ Free Subdomain', '✘ Monthly Status Reports'],
        feature1: {
            feature: 'Single User',
            condition: true
        },
        feature2: {
            feature: '50GB Storage',
            condition: true
        },
        feature3: {
            feature: 'Unlimited Public Projects',
            condition: true
        },
        feature4: {
            feature: 'Community Access',
            condition: true
        },
        feature5: {
            feature: 'Unlimited Private Projects',
            condition: true
        },
        feature6: {
            feature: 'Deticated Phone Support',
            condition: true
        },
        feature7: {
            feature: 'Free Subdomain',
            condition: true
        },
        feature8: {
            feature: 'Monthly Status Reports',
            condition: false
        }
    },
    {
        id: 3,
        smallHeadder: "PRO",
        price: "$49/month",
        features: ['✔ Unlimited User', '✔ 50GB storage', '✔ Unlimited Public Projects', '✔ Community Access', '✔ Unlimited Private Projects', '✔ Deticated Phone Support', '✔ Free Subdomain', '✔ Monthly Status Reports'],
        feature1: {
            feature: 'Single User',
            condition: true
        },
        feature2: {
            feature: '50GB Storage',
            condition: true
        },
        feature3: {
            feature: 'Unlimited Public Projects',
            condition: true
        },
        feature4: {
            feature: 'Community Access',
            condition: true
        },
        feature5: {
            feature: 'Unlimited Private Projects',
            condition: true
        },
        feature6: {
            feature: 'Deticated Phone Support',
            condition: true
        },
        feature7: {
            feature: 'Free Subdomain',
            condition: true
        },
        feature8: {
            feature: 'Monthly Status Reports',
            condition: true
        }

    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App data={cardDatas} />)
