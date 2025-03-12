// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { rS, vS, mS } from '@/style/responsive';

// const IconButton = ({ title, onPress, otherStyles, icon }) => {
//   return (
//     <TouchableOpacity style={[styles.button, otherStyles]} onPress={onPress}>
//       {/* <Text style={styles.icon}></Text> */}
//       <Text style={[styles.buttonText, otherStyles]}>{icon} {' '} {title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     marginLeft: mS(10),
//     marginTop: mS(20),
//     width: rS(300),
//     backgroundColor: '#4CAF50',
//     borderRadius: 5,
//     paddingVertical: mS(12),
//     paddingHorizontal: mS(25),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: mS(18),
//     fontWeight: 'bold',
//   },
//   icon: {
//     // marginRight: mS(140),
//     // marginTop: mS(10),
//     // marginLeft: mS(10),
//     color: 'white',
//     fontSize: mS(20),
//   },
// });

// export default IconButton;









// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Or any icon library you prefer
// import {mS, rS} from '@/style/responsive';

// const IconButton = ({ title, otherStyles, onPress, icon }) => {
//   return (
//     <TouchableOpacity style={styles.button}>
//       <View style={styles.buttonContent}>
//         <Icon name={icon} style={styles.icon} />
//         <Text style={styles.buttonText}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   // button: {
//   //   backgroundColor: '#4CAF50', // Green color
//   //   paddingVertical: 12,
//   //   paddingHorizontal: 24,
//   //   borderRadius: 4,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   width: 200, // Adjust width as needed
//   // },
//     button: {
//     marginLeft: mS(10),
//     marginTop: mS(20),
//     width: rS(300),
//     backgroundColor: '#4CAF50',
//     borderRadius: 5,
//     paddingVertical: mS(12),
//     paddingHorizontal: mS(25),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     size: 20,
//     color: 'white',
//     marginRight: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default IconButton;

















import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { mS, rS } from '@/style/responsive';

const IconButton = ({ title, iconName, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Icon name={iconName} style={styles.icon} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: mS(10),
    marginTop: mS(20),
    width: rS(300),
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: mS(12),
    paddingHorizontal: mS(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: mS(8),
    fontSize: mS(16),
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: mS(16),
  },
});

export default IconButton;