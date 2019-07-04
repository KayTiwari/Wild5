import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

<RadioForm formHorizontal={true} animation={true}>
  {/* To create radio buttons, loop through your array of options */}
  {radio_props.map((obj, i) => {
    <RadioButton labelHorizontal={true} key={i}>
      {/*  You can set RadioButtonLabel before RadioButtonInput */}
      <RadioButtonInput
        obj={obj}
        index={i}
        isSelected={this.state.value3Index === i}
        onPress={onPress}
        borderWidth={1}
        buttonInnerColor={"#e74c3c"}
        buttonOuterColor={this.state.value3Index === i ? "#2196f3" : "#000"}
        buttonSize={40}
        buttonOuterSize={80}
        buttonStyle={{}}
        buttonWrapStyle={{ marginLeft: 10 }}
      />
      <RadioButtonLabel
        obj={obj}
        index={i}
        labelHorizontal={true}
        onPress={onPress}
        labelStyle={{ fontSize: 20, color: "#2ecc71" }}
        labelWrapStyle={{}}
      />
    </RadioButton>;
  })}
</RadioForm>;
