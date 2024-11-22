import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

export default function ButtonSwitch () {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        onValueChange={() => setIsEnabled(previousState => !previousState)}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
