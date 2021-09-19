# react-native-doubletap

## EN:

A react-native component that handles double tap and single tap events

### Installation

- `npm install --save @memrearal/react-native-doubletap`

### Usage

```js
import DoubleTap from "@memrearal/react-native-doubletap";
export default class App extends React.Component {
  render() {
    return (
      <View>
        <DoubleTap
          onSingleTap={() => {
            console.log("single tap!");
          }}
          onDoubleTap={() => {
            console.log("double tap!");
          }}
          delay={250}
        >
          <Button title="Single or Double Tap" />
        </DoubleClick>
      </View>
    );
  }
}
```

## Props

| Property    | Type     | Default | Description                   |
| ----------- | -------- | ------- | ----------------------------- |
| delay       | number   | 250     | Time for delay between taps   |
| onSingleTap | function | null    | callback for single tap event |
| onDoubleTap | function | null    | callback for double tap event |

## License

MIT

## TR:

Double Tap ve Single Tap olaylarını işleyen bir react-native component'i 

## Kurulum

- `npm install --save @memrearal/react-native-doubletap`

## Kullanım

```js
import DoubleTap from "@memrearal/react-native-doubletap";
export default class App extends React.Component {
  render() {
    return (
      <View>
        <DoubleTap
          onSingleTap={() => {
            console.log("single tap!");
          }}
          onDoubleTap={() => {
            console.log("double tap!");
          }}
          delay={250}
        >
          <Button title="Single or Double Tap" />
        </DoubleClick>
      </View>
    );
  }
}
```

## Proplar

| Prop Adı    | Tip       | Varsayılan | Açıklama                                |
| ----------- | --------- | ---------- | --------------------------------------- |
| delay       | sayı      | 250        | İki tap arası olması gereken max süre   |
| onSingleTap | fonksiyon | null       | tek tap sonunda işlenecek fonksiyon     |
| onDoubleTap | fonksiyon | null       | iki tap sonunda işlenecek fonksiyon     |

## Lisans

MIT