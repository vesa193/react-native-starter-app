import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons';

export const startTabs = () => (
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('share-outline', 30)
  ]).then(source => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'awesome-places.FindPlaceScreen',
                    }
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Find Place',
                    icon: source[0]
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'awesome-places.SharePlaceScreen'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: 'Share Place',
                    icon: source[1]
                  }
                }
              }
            }
          ]
        }
      }
    })
  })
)
