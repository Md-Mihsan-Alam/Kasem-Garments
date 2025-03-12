import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rS, vS, mS } from '@/style/responsive';

const InputField = ({ title, value, placeholder, handleChangeText, keyboardType, secureTextEntry, otherStyles, iconName }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        {iconName && <Icon name={iconName} style={styles.icon} />}
        <TextInput
          style={[styles.input, otherStyles]}
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#757575"
          onChangeText={handleChangeText}
        // keyboardType={keyboardType || 'default'}
        // secureTextEntry={secureTextEntry && !showPassword}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: rS(300),
    backgroundColor: '#FFFFFF',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: mS(12),
    paddingVertical: mS(10),
  },
  title: {
    marginTop: vS(10),
    fontSize: mS(15),
    marginBottom: vS(5),
    color: '#202634',
    marginLeft: mS(5),
  },
  input: {
    width: rS(220),
    fontSize: mS(14),
    color: 'gray',
    flex: 1,
  },
  icon: {
    fontSize: mS(20),
    color: '#757575',
    marginRight: mS(8),
  }
});

export default InputField;

// import React, { useState } from 'react';
// import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { rS, vS, mS } from '@/style/responsive';

// const InputField = ({ title, value, placeholder, handleChangeText, keyboardType, secureTextEntry, otherStyles }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <View>
//       <Text style={styles.title}>{title}</Text>
//       <View style={styles.container}>
//         <TextInput
//           style={[styles.input, otherStyles]}
//           placeholder={placeholder}
//           value={value}
//           placeholderTextColor="#757575"
//           onChangeText={handleChangeText}
//           keyboardType={keyboardType || 'default'}
//           secureTextEntry={secureTextEntry && !showPassword}
//         />
// {/*
//         {secureTextEntry && (
//           <TouchableOpacity
//             style={styles.iconContainer}
//             onPress={() => setShowPassword(!showPassword)}
//           >
//             <Icon name={showPassword ? 'eye' : 'eye-slash'} size={mS(18)} color="#757575" />
//           </TouchableOpacity>
//         )} */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // marginLeft: mS(10),
//     // height: vS(30),
//     width: rS(300),
//     backgroundColor: '#FFFFFF',
//     borderColor: '#D3D3D3',
//     borderWidth: 1,
//     borderRadius: 6,
//     paddingHorizontal: mS(12),
//     paddingVertical: mS(10),
//   },
//   title: {
//     marginTop: vS(10),
//     fontSize: mS(15),
//     marginBottom: vS(5),
//     color: '#202634',
//     marginLeft: mS(5),
//   },
//   input: {
//     // paddingHorizontal: mS(12),
//     // height: vS(20),
//     width: rS(250),
//     fontSize: mS(14),
//     color: 'gray',
//     // flex: 1,
//     // paddingVertical: vS(6),
//   },
//   // iconContainer: {
//   //   marginLeft: mS(250),
//   //   marginTop: mS(-40),
//   //   padding: mS(8),
//   // },
// });

// export default InputField;
