import { AppRegistry } from 'react-native';
import Header from "./components/header";

const app = () => {
  return (
      <Header></Header>
  )
};

AppRegistry.registerComponent('albums', () => App);
