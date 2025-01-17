import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For using icon library

const ExplorePage = ({ navigation }) => {
  const [chosenColors, setChosenColors] = useState([]);
  const [filteredFlags, setFilteredFlags] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState(null);

  const colors = ['#0018A8', '#FEDF00', '#FFFFFF', '#D52B1E', '#000000']; // Simplified for brevity

  const flags = [
    { name: 'BRUNEI', colors: ['#FCE300', '#FFFFFF', '#000000', '#EF3340'], image: 'https://flagcdn.com/w320/bn.png' },
    { name: 'BULGARIA', colors: ['#FFFFFF', '#00966E', '#D62612'], image: 'https://flagcdn.com/w320/bg.png' },
    { name: 'BURKINA FASO', colors: ['#EF3340', '#FFCD00', '#009739'], image: 'https://flagcdn.com/w320/bf.png' },
    { name: 'BURUNDI', colors: ['#CE1126', '#FFFFFF', '#1EB53A'], image: 'https://flagcdn.com/w320/bi.png' },
    { name: 'CAMBODIA', colors: ['#032EA1', '#FFFFFF', '#E00025'], image: 'https://flagcdn.com/w320/kh.png' },
  ];

  const handleGenerateFlags = () => {
    const matchedFlags = flags.filter((flag) =>
      chosenColors.every((color) => flag.colors.includes(color))
    );
    setFilteredFlags(matchedFlags);
  };

  const handleRefreshColors = () => {
    setChosenColors([]);
    setFilteredFlags([]);
  };

  const handleColorClick = (color) => {
    if (!chosenColors.includes(color)) {
      setChosenColors([...chosenColors, color]);
    }
  };

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
  };

  return (
    <View style={styles.container}>
      <View style={{
        display:'flex',
        alignItems:'center',
        marginTop:-10,
        marginLeft:335,

      }}>
        <Image source={require('./../../assets/images/logo.png')}
            style={styles.image}
        />
      </View>
      {/* Chosen Colors Section */}
      <View style={styles.chosenColorsContainer}>
        <Text style={styles.chosenColorsTitle}>Chosen Colors:</Text>
        <View style={styles.chosenColors}>
          {chosenColors.map((color, index) => (
            <View key={index} style={[styles.colorBox, { backgroundColor: color }]} />
          ))}
        </View>
        <TouchableOpacity onPress={handleRefreshColors} style={styles.refreshButton}>
          <Ionicons name="refresh" size={30} color="red" />
        </TouchableOpacity>
      </View>

      {/* Colors Options Section */}
      <View style={styles.colorOptionsContainer}>
        <Text style={styles.colorOptionsTitle}>Available Colors:</Text>
        <ScrollView contentContainerStyle={styles.colorsContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorOption, { backgroundColor: color }]}
              onPress={() => handleColorClick(color)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.generateButton} onPress={handleGenerateFlags}>
        <Text style={styles.generateButtonText}>Generate Flags</Text>
      </TouchableOpacity>

      {/* Filtered Flags Section */}
      <ScrollView contentContainerStyle={styles.flagsContainer}>
        {filteredFlags.map((flag, index) => (
          <TouchableOpacity key={index} style={styles.flagItem} onPress={() => handleFlagClick(flag)}>
            <Image source={{ uri: flag.image }} style={styles.flagImage} />
            <Text style={styles.flagName}>{flag.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cococo',
    padding: 10,
  },
  chosenColorsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  chosenColorsTitle: {
    fontSize: 25,
    color: 'black',
  },
  chosenColors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 5,
  },
  colorOptionsContainer: {
    marginBottom: 20,
  },
  colorOptionsTitle: {
    fontSize: 20,
    color: 'Black',
    marginBottom: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorOption: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  generateButton: {
    backgroundColor: '#004C75',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  generateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flagItem: {
    width: '48%',
    marginBottom: 10,
    backgroundColor: '#cococo',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  flagImage: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  flagName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width:100,
    height:100,
},
});

export default ExplorePage;
