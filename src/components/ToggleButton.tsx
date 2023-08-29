
import React, { useState } from 'react';
import { View, Switch, StyleSheet, StyleProp, ViewStyle } from 'react-native';

export type ToggleButtonProps = {
    styleContainer?: StyleProp<ViewStyle>;
    value: boolean;
    onChange?: () => void;
  };
const _ToggleButton: React.FC<ToggleButtonProps> = (props) => { 
    const {value,onChange} = props;
  return (
    <View style={StyleSheet.flatten([_styles.container, props.styleContainer])}>
      <Switch
        trackColor={{ false: '#FFFFFF', true: '#FFFFFF' }}
        thumbColor={value ? '#000000' : '#BABABA'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    height: 25,
    width: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#c7c7c7",
  },
});

export const ToggleButton = React.memo(_ToggleButton);