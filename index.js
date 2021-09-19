import React from "react";
import { Pressable } from "react-native";

export default class DoubleTap extends React.Component{
  constructor(props){
    super(props);
    /*
      EN: time interval between double clicks
      TR: double click sayılması için geçerli süre
    */
    this.delayTime = props.delay ? props.delay : 250;
    /*
      EN: bool to check whether user tapped once
      TR: ilk click olup olmadığını kontrol eden boolean
    */
    this.firstPress = true;
    /*
      EN: the last time user tapped
      TR: kullanıcının son click yaptığı zaman
    */
    this.lastTime = new Date();
    /*
     EN: a timer is used to run the single tap event
     TR: single tap için kullanılacak timer
    */
    this.timer = false;
  }
  _onTap = ()=>{
    /*
      EN: get the instance of time when pressed
      TR: click anındaki zamanı alalım
    */
    let now = new Date().getTime();

    if(this.firstPress){
      /*
        EN: set the flag indicating first press has occured
        TR: first click olduğunu belirtelim
      */
      this.firstPress = false;
      /*
        EN: timer started, if a second tap doesnt come in by the delay, trigger singleTap event handler
        TR: timer'ı başlatalım, eğer belirlenen süre içerisinde ikinci click gelmezse, onSingleTap event'i triggerlayalım
      */
      this.timer = setTimeout(() =>{
        /*
          EN: check if user passed singleTap event in prop
          TR: kullanıcının onSingleTap event'i prop olarak gönderip göndermediğini kontrol edelim
        */
        this.props.onSingleTap ? this.props.onSingleTap() : null;
        /*
          EN: reset back to initial state
          TR: ilk haline resetleyelim
        */
        this.firstPress = true;
        this.timer = false;
      }, this.delayTime);
      /*
        EN: mark the last time of the press
        TR: basılan son süreyi belirtelim
      */
      this.lastTime = now;
    }else{
      /*
        EN: if user pressed immediately again within span of delayTime, trigger doubleTap event handler
        TR: eğer belirlenen süre içerisinde ikinci click gelirse, doubleTap event'i triggerlayalım.
      */
      if(now - this.lastTime < this.delayTime){
        /*
          EN: clear the timeout for the single press
          TR: single click için timerı temizleyelim
        */
        this.timer && clearTimeout(this.timer);
        /*
          EN: check if user passed in prop for double click
          TR: kullanıcının doubleTap event'i prop olarak gönderip göndermediğini kontrol edelim
        */
        this.props.onDoubleTap ? this.props.onDoubleTap() : null;
        /*
          EN: reset back to initial state
          TR: ilk haline resetleyelim
        */
        this.firstPress = true;
      }
    }
  };
  render() {
    return (
      <Pressable onPress={this._onTap}>
        {this.props.children}
      </Pressable>
    );
  }

  componentWillUnmount() {
    /*
      EN: make sure to clear the timer when unmounting
      TR: unmount işleminde timer'ı temizleyelim
    */
    this.timer && clearTimeout(this.timer);
  }
}