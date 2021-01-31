import Toast from 'react-native-root-toast';

export default function showMessage(message){
  Toast.show(message, {
    duration: 2000,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
}
