import NavbarComponent from './../NavBarComponent/NavBarComponent.vue'
import CardComponent from '../shared/CardComponent/CardComponent.vue'

export default {
    name: 'HomeComponent',
    components: {
        NavbarComponent,
        CardComponent
    },
    data() {
        return {
            cardData: [
                {
                    icon: require('@/assets/images/badge.laravel-mix.svg'),
                    iconDescription: 'Automation',
                    subtitle: 'Roll Out',
                    title: 'Automatic Prototyping',
                    body: 'Webpack is the most powerful and flexible asset compilation tool available today. With that power, however, comes a certain level of complexity.'
                },
                {
                    icon: require('@/assets/images/badge.how-to-read-code.svg'),
                    iconDescription: 'Simplicity',
                    subtitle: 'Sip Coffee',
                    title: 'Complexity Simplified',
                    body: 'I know too many backend developers who are stifled by one glaring phobie: CSS. How do you construct a layout when nothing lines up?'
                },
            ]
        }
    }
}