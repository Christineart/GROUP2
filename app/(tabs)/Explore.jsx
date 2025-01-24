import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For using icon library

const ExplorePage = ({ navigation }) => {
  const [chosenColors, setChosenColors] = useState([]);
  const [filteredFlags, setFilteredFlags] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState(null);

  const colors = [ '#FF0000', '#D52B1E', '#FF0033', '#D62612', '#FF6600', 
    '#D90012', '#EE1C25', '#D72E30', '#D40000', '#E8112D',
    '#D7141A', '#C60C30', '#D71A28', '#009739', '#00A84F', '#008751', '#006A4E', '#00ADEF', 
  '#008000', '#00966E', '#007A33', '#00B9E4', '#00AFCA', 
  '#009639', '#007847', '#239F40', '#006600', '#00843D', 
  '#75AADB', '#0033A0','#003399', '#0033A0', '#0018A8', '#003F87', '#003287', 
  '#003082', '#00778B', '#003893', '#003478', '#0055A4', 
  '#009966', '#0000FF', '#00267F', '#002A8F', '#003580', 
  '#003087', '#002B7F', '#0033A0', '#003478', '#004225', 
  '#0073CF', '#4997D0', '#012169', '#3A75C4', '#3A8A0E', 
  '#002776', '#003F87', '#007A5E',  '#FFD100', '#FEDF00', '#FFD700', '#FFC726', '#FCD116', 
  '#FCE300', '#FECB00', '#FFCC00', '#FCE300', '#FFCE00',  '#FFFFFF', '#000000', '#F42A41', '#EF3340', '#FCD116', '#FECB00', '#E8112D', 
  '#D40000', '#DD0000', '#006B3F', '#0D5EAF', '#CE1126', 
  '#CD2A3E', '#436F4D', '#3C3B6E', '#005A47', '#005AA7',
  '#009966', '#003478', '#0055A4', '#009C3B', '#007A33', 
  '#BC002D', '#239F40', '#007847', '#002664', '#DE2910'];
const flags = [
  {
  name: 'AFGHANISTAN',
  colors: ['#FF0000', '#FFFFFF', '#009739'],
  image: 'https://flagcdn.com/w320/af.png',
  capital: 'Kabul',
  currency: 'Afghani',
  language: 'Pashto, Dari',
  },
  {
  name: 'ALGERIA',
  colors: ['#006233', '#FFFFFF', '#D71A28'],
  image: 'https://flagcdn.com/w320/dz.png',
  capital: 'Algiers',
  currency: 'Algerian Dinar',
  language: 'Arabic, Berber',
  },
  {
  name: 'ANDORRA',
  colors: ['#FFCC00', '#003399', '#FF0033'],
  image: 'https://flagcdn.com/w320/ad.png',
  capital: 'Andorra la Vella',
  currency: 'Euro',
  language: 'Catalan',
  },
  {
  name: 'ANGOLA',
  colors: ['#D62612', '#000000', '#FFD100'],
  image: 'https://flagcdn.com/w320/ao.png',
  capital: 'Luanda',
  currency: 'Kwanza',
  language: 'Portuguese',
  },
  {
  name: 'ARGENTINA',
  colors: ['#75AADB', '#FFFFFF', '#FFD700'],
  image: 'https://flagcdn.com/w320/ar.png',
  capital: 'Buenos Aires',
  currency: 'Argentine Peso',
  language: 'Spanish',
  },
  {
  name: 'ARMENIA',
  colors: ['#FF0000', '#0033A0', '#FFCC00'],
  image: 'https://flagcdn.com/w320/am.png',
  capital: 'Yerevan',
  currency: 'Dram',
  language: 'Armenian',
  },
  {
  name: 'AUSTRALIA',
  colors: ['#012169', '#FFFFFF', '#FF0000'],
  image: 'https://flagcdn.com/w320/au.png',
  capital: 'Canberra',
  currency: 'Australian Dollar',
  language: 'English',
  },
  {
  name: 'AUSTRIA',
  colors: ['#FF0000', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/at.png',
  capital: 'Vienna',
  currency: 'Euro',
  language: 'German',
  },
  {
  name: 'AZERBAIJAN',
  colors: ['#009739', '#FFFFFF', '#FF0000', '#00B9E4'],
  image: 'https://flagcdn.com/w320/az.png',
  capital: 'Baku',
  currency: 'Manat',
  language: 'Azerbaijani',
  },
  {
  name: 'BAHAMAS',
  colors: ['#00778B', '#FFD700', '#000000'],
  image: 'https://flagcdn.com/w320/bs.png',
  capital: 'Nassau',
  currency: 'Bahamian Dollar',
  language: 'English',
  },
  {
  name: 'BAHRAIN',
  colors: ['#FFFFFF', '#D71A28'],
  image: 'https://flagcdn.com/w320/bh.png',
  capital: 'Manama',
  currency: 'Bahraini Dinar',
  language: 'Arabic',
  },
  {
  name: 'BANGLADESH',
  colors: ['#006A4E', '#F42A41'],
  image: 'https://flagcdn.com/w320/bd.png',
  capital: 'Dhaka',
  currency: 'Taka',
  language: 'Bengali',
  },
  {
  name: 'BARBADOS',
  colors: ['#00267F', '#FFC726', '#000000'],
  image: 'https://flagcdn.com/w320/bb.png',
  capital: 'Bridgetown',
  currency: 'Barbadian Dollar',
  language: 'English',
  },
  {
  name: 'BELARUS',
  colors: ['#D72E30', '#00A84F', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/by.png',
  capital: 'Minsk',
  currency: 'Belarusian Ruble',
  language: 'Belarusian, Russian',
  },
  {
  name: 'BELGIUM',
  colors: ['#000000', '#FFCC00', '#FF0000'],
  image: 'https://flagcdn.com/w320/be.png',
  capital: 'Brussels',
  currency: 'Euro',
  language: 'Dutch, French, German',
  },
  {
  name: 'BELIZE',
  colors: ['#003F87', '#FF0000', '#FFFFFF', '#009739'],
  image: 'https://flagcdn.com/w320/bz.png',
  capital: 'Belmopan',
  currency: 'Belize Dollar',
  language: 'English',
  },
  {
  name: 'BENIN',
  colors: ['#FCD116', '#E8112D', '#008751'],
  image: 'https://flagcdn.com/w320/bj.png',
  capital: 'Porto-Novo',
  currency: 'West African CFA Franc',
  language: 'French',
  },
  {
  name: 'BHUTAN',
  colors: ['#FFCC00', '#FF6600', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/bt.png',
  capital: 'Thimphu',
  currency: 'Ngultrum',
  language: 'Dzongkha',
  },
  {
  name: 'BOLIVIA',
  colors: ['#007A33', '#FFD100', '#D50032'],
  image: 'https://flagcdn.com/w320/bo.png',
  capital: 'Sucre',
  currency: 'Boliviano',
  language: 'Spanish, Quechua, Aymara',
  },
  {
  name: 'BOSNIA AND HERZEGOVINA',
  colors: ['#0033A0', '#FCD116', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/ba.png',
  capital: 'Sarajevo',
  currency: 'Convertible Mark',
  language: 'Bosnian, Croatian, Serbian',
  },
  {
  name: 'BOTSWANA',
  colors: ['#00ADEF', '#FFFFFF', '#000000'],
  image: 'https://flagcdn.com/w320/bw.png',
  capital: 'Gaborone',
  currency: 'Pula',
  language: 'English, Setswana',
  },
  {
  name: 'BRAZIL',
  colors: ['#FECB00', '#00A859', '#002776', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/br.png',
  capital: 'Brasília',
  currency: 'Real',
  language: 'Portuguese',
  },
  {
  name: 'BRUNEI',
  colors: ['#FCE300', '#FFFFFF', '#000000', '#EF3340'],
  image: 'https://flagcdn.com/w320/bn.png',
  capital: 'Bandar Seri Begawan',
  currency: 'Brunei Dollar',
  language: 'Malay',
  },
  {
  name: 'BULGARIA',
  colors: ['#FFFFFF', '#00966E', '#D62612'],
  image: 'https://flagcdn.com/w320/bg.png',
  capital: 'Sofia',
  currency: 'Lev',
  language: 'Bulgarian',
  },
  {
  name: 'BURKINA FASO',
  colors: ['#EE1C25', '#FCD116', '#009739'],
  image: 'https://flagcdn.com/w320/bf.png',
  capital: 'Ouagadougou',
  currency: 'West African CFA Franc',
  language: 'French',
  },
  {
  name: 'BURUNDI',
  colors: ['#FFD100', '#008000', '#EE1C25', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/bi.png',
  capital: 'Gitega',
  currency: 'Burundian Franc',
  language: 'Kirundi, French',
  },
  {
  name: 'CAMBODIA',
  colors: ['#002F6C', '#FFFFFF', '#D90012'],
  image: 'https://flagcdn.com/w320/kh.png',
  capital: 'Phnom Penh',
  currency: 'Riel',
  language: 'Khmer',
  },
  {
  name: 'CAMEROON',
  colors: ['#007A5E', '#FFD100', '#CE1126'],
  image: 'https://flagcdn.com/w320/cm.png',
  capital: 'Yaoundé',
  currency: 'Central African CFA Franc',
  language: 'French, English',
  },
  {
  name: 'CANADA',
  colors: ['#FF0000', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/ca.png',
  capital: 'Ottawa',
  currency: 'Canadian Dollar',
  language: 'English, French',
  },
  {
  name: 'CAPE VERDE',
  colors: ['#003893', '#FFFFFF', '#FF0000', '#FFD100'],
  image: 'https://flagcdn.com/w320/cv.png',
  capital: 'Praia',
  currency: 'Cape Verdean Escudo',
  language: 'Portuguese',
  },
  {
  name: 'CENTRAL AFRICAN REPUBLIC',
  colors: ['#003082', '#FFD100', '#00843D', '#CE1126', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/cf.png',
  capital: 'Bangui',
  currency: 'Central African CFA Franc',
  language: 'French, Sango',
  },
  {
  name: 'CHAD',
  colors: ['#002664', '#FFD100', '#CE1126'],
  image: 'https://flagcdn.com/w320/td.png',
  capital: 'N’Djamena',
  currency: 'Central African CFA Franc',
  language: 'French, Arabic',
  },
  {
  name: 'CHILE',
  colors: ['#002F6C', '#FFFFFF', '#D52B1E'],
  image: 'https://flagcdn.com/w320/cl.png',
  capital: 'Santiago',
  currency: 'Chilean Peso',
  language: 'Spanish',
  },
  {
  name: 'CHINA',
  colors: ['#DE2910', '#FFDE00'],
  image: 'https://flagcdn.com/w320/cn.png',
  capital: 'Beijing',
  currency: 'Renminbi (Yuan)',
  language: 'Mandarin',
  },
  {
  name: 'COLOMBIA',
  colors: ['#FFD100', '#003087', '#CE1126'],
  image: 'https://flagcdn.com/w320/co.png',
  capital: 'Bogotá',
  currency: 'Colombian Peso',
  language: 'Spanish',
  },
  {
  name: 'COMOROS',
  colors: ['#009639', '#FFD100', '#FFFFFF', '#EE1C25', '#003087'],
  image: 'https://flagcdn.com/w320/km.png',
  capital: 'Moroni',
  currency: 'Comorian Franc',
  language: 'Comorian, Arabic, French',
  },
  {
  name: 'CONGO',
  colors: ['#FFD100', '#009739', '#EF3340'],
  image: 'https://flagcdn.com/w320/cg.png',
  capital: 'Brazzaville',
  currency: 'Central African CFA Franc',
  language: 'French',
  },
  {
  name: 'COSTA RICA',
  colors: ['#002B7F', '#FFFFFF', '#CE1126'],
  image: 'https://flagcdn.com/w320/cr.png',
  capital: 'San José',
  currency: 'Costa Rican Colón',
  language: 'Spanish',
  },
  {
  name: 'CROATIA',
  colors: ['#FF0000', '#FFFFFF', '#0000FF'],
  image: 'https://flagcdn.com/w320/hr.png',
  capital: 'Zagreb',
  currency: 'Euro',
  language: 'Croatian',
  },
  {
  name: 'CUBA',
  colors: ['#002A8F', '#FFFFFF', '#D52B1E'],
  image: 'https://flagcdn.com/w320/cu.png',
  capital: 'Havana',
  currency: 'Cuban Peso',
  language: 'Spanish',
  },
  {
  name: 'CYPRUS',
  colors: ['#FFFFFF', '#D4AF37', '#008000'],
  image: 'https://flagcdn.com/w320/cy.png',
  capital: 'Nicosia',
  currency: 'Euro',
  language: 'Greek, Turkish',
  },
  {
  name: 'CZECHIA',
  colors: ['#D7141A', '#FFFFFF', '#11457E'],
  image: 'https://flagcdn.com/w320/cz.png',
  capital: 'Prague',
  currency: 'Czech Koruna',
  language: 'Czech',
  },
  {
  name: 'DEMOCRATIC REPUBLIC OF THE CONGO',
  colors: ['#007FFF', '#FFD700', '#CE1126'],
  image: 'https://flagcdn.com/w320/cd.png',
  capital: 'Kinshasa',
  currency: 'Congolese Franc',
  language: 'French',
  },
  {
  name: 'DENMARK',
  colors: ['#C8102E', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/dk.png',
  capital: 'Copenhagen',
  currency: 'Danish Krone',
  language: 'Danish',
  },
  {
  name: 'DJIBOUTI',
  colors: ['#6AB2E7', '#FFFFFF', '#008000', '#FF0000'],
  image: 'https://flagcdn.com/w320/dj.png',
  capital: 'Djibouti',
  currency: 'Djiboutian Franc',
  language: 'French, Arabic',
  },
  {
  name: 'DOMINICA',
  colors: ['#006600', '#FFD700', '#FFFFFF', '#FF0000', '#000000'],
  image: 'https://flagcdn.com/w320/dm.png',
  capital: 'Roseau',
  currency: 'East Caribbean Dollar',
  language: 'English',
  },
  {
  name: 'DOMINICAN REPUBLIC',
  colors: ['#002D62', '#FFFFFF', '#D7141A'],
  image: 'https://flagcdn.com/w320/do.png',
  capital: 'Santo Domingo',
  currency: 'Dominican Peso',
  language: 'Spanish',
  },
  {
  name: 'ECUADOR',
  colors: ['#FFD100', '#00247D', '#D52B1E'],
  image: 'https://flagcdn.com/w320/ec.png',
  capital: 'Quito',
  currency: 'United States Dollar',
  language: 'Spanish',
  },
  {
  name: 'EGYPT',
  colors: ['#CE1126', '#FFFFFF', '#000000'],
  image: 'https://flagcdn.com/w320/eg.png',
  capital: 'Cairo',
  currency: 'Egyptian Pound',
  language: 'Arabic',
  },
  {
  name: 'EL SALVADOR',
  colors: ['#0047AB', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/sv.png',
  capital: 'San Salvador',
  currency: 'United States Dollar',
  language: 'Spanish',
  },
  {
  name: 'EQUATORIAL GUINEA',
  colors: ['#3E5EB9', '#FFFFFF', '#D7141A', '#43B02A'],
  image: 'https://flagcdn.com/w320/gq.png',
  capital: 'Malabo',
  currency: 'Central African CFA Franc',
  language: 'Spanish, French, Portuguese',
  },
  {
  name: 'ERITREA',
  colors: ['#418FDE', '#FFC726', '#EF3340'],
  image: 'https://flagcdn.com/w320/er.png',
  capital: 'Asmara',
  currency: 'Eritrean Nakfa',
  language: 'Tigrinya, Arabic, English',
  },
  {
  name: 'ESTONIA',
  colors: ['#0072CE', '#000000', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/ee.png',
  capital: 'Tallinn',
  currency: 'Euro',
  language: 'Estonian',
  },
  {
  name: 'ESWATINI',
  colors: ['#002D62', '#FFD100', '#D21034'],
  image: 'https://flagcdn.com/w320/sz.png',
  capital: 'Mbabane',
  currency: 'Swazi Lilangeni',
  language: 'English, Swazi',
  },
  {
  name: 'ETHIOPIA',
  colors: ['#FCDD09', '#078930', '#E31B23'],
  image: 'https://flagcdn.com/w320/et.png',
  capital: 'Addis Ababa',
  currency: 'Ethiopian Birr',
  language: 'Amharic',
  },
  {
  name: 'FIJI',
  colors: ['#5CBFEB', '#FFFFFF', '#D22630', '#FFD100'],
  image: 'https://flagcdn.com/w320/fj.png',
  capital: 'Suva',
  currency: 'Fijian Dollar',
  language: 'English, Fijian, Hindi',
  },
  {
  name: 'FINLAND',
  colors: ['#003580', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/fi.png',
  capital: 'Helsinki',
  currency: 'Euro',
  language: 'Finnish, Swedish',
  },
  {
  name: 'FRANCE',
  colors: ['#0055A4', '#FFFFFF', '#EF4135'],
  image: 'https://flagcdn.com/w320/fr.png',
  capital: 'Paris',
  currency: 'Euro',
  language: 'French',
  },
  {
  name: 'GABON',
  colors: ['#009639', '#FCD116', '#0072CE'],
  image: 'https://flagcdn.com/w320/ga.png',
  capital: 'Libreville',
  currency: 'Central African CFA Franc',
  language: 'French',
  },
  {
  name: 'GAMBIA',
  colors: ['#3A75C4', '#FFFFFF', '#DE2110', '#3A8A0E'],
  image: 'https://flagcdn.com/w320/gm.png',
  capital: 'Banjul',
  currency: 'Dalasi',
  language: 'English',
  },
  {
  name: 'GEORGIA',
  colors: ['#FFFFFF', '#D40000'],
  image: 'https://flagcdn.com/w320/ge.png',
  capital: 'Tbilisi',
  currency: 'Georgian Lari',
  language: 'Georgian',
  },
  {
  name: 'GERMANY',
  colors: ['#000000', '#FFCE00', '#DD0000'],
  image: 'https://flagcdn.com/w320/de.png',
  capital: 'Berlin',
  currency: 'Euro',
  language: 'German',
  },
  {
  name: 'GHANA',
  colors: ['#FCD116', '#D21034', '#006B3F', '#000000'],
  image: 'https://flagcdn.com/w320/gh.png',
  capital: 'Accra',
  currency: 'Ghanaian Cedi',
  language: 'English',
  },
  {
  name: 'GREECE',
  colors: ['#0D5EAF', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/gr.png',
  capital: 'Athens',
  currency: 'Euro',
  language: 'Greek',
  },
  {
  name: 'GRENADA',
  colors: ['#FFD100', '#CE1126', '#007A33', '#FCD116'],
  image: 'https://flagcdn.com/w320/gd.png',
  capital: 'St. George\'s',
  currency: 'East Caribbean Dollar',
  language: 'English',
  },
  {
  name: 'GUATEMALA',
  colors: ['#4997D0', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/gt.png',
  capital: 'Guatemala City',
  currency: 'Guatemalan Quetzal',
  language: 'Spanish',
  },
  {
  name: 'GUINEA',
  colors: ['#CE1126', '#FCD116', '#009639'],
  image: 'https://flagcdn.com/w320/gn.png',
  capital: 'Conakry',
  currency: 'Guinean Franc',
  language: 'French',
  },
  {
  name: 'GUINEA-BISSAU',
  colors: ['#CE1126', '#FCD116', '#009739', '#000000'],
  image: 'https://flagcdn.com/w320/gw.png',
  capital: 'Bissau',
  currency: 'West African CFA Franc',
  language: 'Portuguese',
  },
  {
  name: 'GUYANA',
  colors: ['#009739', '#FFD100', '#000000', '#FFFFFF', '#EF3340'],
  image: 'https://flagcdn.com/w320/gy.png',
  capital: 'Georgetown',
  currency: 'Guyanese Dollar',
  language: 'English',
  },
  {
  name: 'HAITI',
  colors: ['#00209F', '#D21034', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/ht.png',
  capital: 'Port-au-Prince',
  currency: 'Haitian Gourde',
  language: 'French, Haitian Creole',
  },
  {
  name: 'HONDURAS',
  colors: ['#0073CF', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/hn.png',
  capital: 'Tegucigalpa',
  currency: 'Honduran Lempira',
  language: 'Spanish',
  },
  {
  name: 'HUNGARY',
  colors: ['#CD2A3E', '#FFFFFF', '#436F4D'],
  image: 'https://flagcdn.com/w320/hu.png',
  capital: 'Budapest',
  currency: 'Hungarian Forint',
  language: 'Hungarian',
  },
  {
  name: 'HOLY SEE',
  colors: ['#FFD700', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/va.png',
  capital: 'Vatican City',
  currency: 'Euro',
  language: 'Italian, Latin',
  },
  {
  name: 'HONG KONG',
  colors: ['#DE2910', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/hk.png',
  capital: 'Hong Kong',
  currency: 'Hong Kong Dollar',
  language: 'Chinese, English',
  },
  {
  name: 'JAMAICA',
  colors: ['#FFD100', '#000000', '#007847'],
  image: 'https://flagcdn.com/w320/jm.png',
  capital: 'Kingston',
  currency: 'Jamaican Dollar',
  language: 'English, Jamaican Patois',
  },
  {
  name: 'JAPAN',
  colors: ['#FFFFFF', '#BC002D'],
  image: 'https://flagcdn.com/w320/jp.png',
  capital: 'Tokyo',
  currency: 'Japanese Yen',
  language: 'Japanese',
  },
  {
  name: 'JORDAN',
  colors: ['#CE1126', '#FFFFFF', '#007A33', '#000000'],
  image: 'https://flagcdn.com/w320/jo.png',
  capital: 'Amman',
  currency: 'Jordanian Dinar',
  language: 'Arabic',
  },
  {
  name: 'JERSEY',
  colors: ['#FFFFFF', '#CE1126', '#FFD700'],
  image: 'https://flagcdn.com/w320/je.png',
  capital: 'Saint Helier',
  currency: 'British Pound, Jersey Pound',
  language: 'English, French',
  },
  {
  name: 'KAZAKHSTAN',
  colors: ['#00AFCA', '#FFD600'],
  image: 'https://flagcdn.com/w320/kz.png',
  capital: 'Astana',
  currency: 'Kazakhstani Tenge',
  language: 'Kazakh, Russian',
  },
  {
  name: 'KENYA',
  colors: ['#006600', '#FF0000', '#FFFFFF', '#000000'],
  image: 'https://flagcdn.com/w320/ke.png',
  capital: 'Nairobi',
  currency: 'Kenyan Shilling',
  language: 'Swahili, English',
  },
  {
  name: 'KIRIBATI',
  colors: ['#CE1126', '#FFFFFF', '#003F87', '#FFD100'],
  image: 'https://flagcdn.com/w320/ki.png',
  capital: 'Tarawa',
  currency: 'Kiribati Dollar, Australian Dollar',
  language: 'English, Gilbertese',
  },
  {
  name: 'KOREA, NORTH',
  colors: ['#C60C30', '#FFFFFF', '#003893'],
  image: 'https://flagcdn.com/w320/kp.png',
  capital: 'Pyongyang',
  currency: 'North Korean Won',
  language: 'Korean',
  },
  {
  name: 'KOREA, SOUTH',
  colors: ['#FFFFFF', '#003478', '#C60C30'],
  image: 'https://flagcdn.com/w320/kr.png',
  capital: 'Seoul',
  currency: 'South Korean Won',
  language: 'Korean',
  },
  {
  name: 'LITHUANIA',
  colors: ['#FFD700', '#007A33', '#EE6C00'],
  image: 'https://flagcdn.com/w320/lt.png',
  capital: 'Vilnius',
  currency: 'Euro',
  language: 'Lithuanian',
  },
  {
  name: 'LATVIA',
  colors: ['#D52B1E', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/lv.png',
  capital: 'Riga',
  currency: 'Euro',
  language: 'Latvian',
  },
  {
  name: 'LIBERIA',
  colors: ['#EF3340', '#FFFFFF', '#009739'],
  image: 'https://flagcdn.com/w320/lr.png',
  capital: 'Monrovia',
  currency: 'Liberian Dollar',
  language: 'English',
  },
  {
  name: 'LEBANON',
  colors: ['#CE1126', '#FFFFFF', '#009739'],
  image: 'https://flagcdn.com/w320/lb.png',
  Capital: 'Beirut',
  Currency: 'Lebanese Pound',
  language: 'Arabic',
  },
  {
  name: 'LUXEMBOURG',
  colors: ['#D52B1E', '#FFFFFF', '#007A33'],
  image: 'https://flagcdn.com/w320/lu.png',
  capital: 'Luxembourg City',
  currency: 'Euro',
  language: 'Luxembourgish, French, German',
  },
  {
  name: 'MEXICO',
  colors: ['#009C3B', '#C60C30', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/mx.png',
  capital: 'Mexico City',
  currency: 'Mexican Peso',
  language: 'Spanish',
  },
  {
  name: 'MALAYSIA',
  colors: ['#1C1D26', '#FFCD00', '#CE1126'],
  image: 'https://flagcdn.com/w320/my.png',
  capital: 'Kuala Lumpur',
  currency: 'Malaysian Ringgit',
  language: 'Malay',
  },
  {
  name: 'MONGOLIA',
  colors: ['#009639', '#DA291C', '#005AA7'],
  image: 'https://flagcdn.com/w320/mn.png',
  capital: 'Ulaanbaatar',
  currency: 'Tugrik',
  language: 'Mongolian',
  },
  {
  name: 'MOROCCO',
  colors: ['#DA291C', '#005A47'],
  image: 'https://flagcdn.com/w320/ma.png',
  capital: 'Rabat',
  currency: 'Moroccan Dirham',
  language: 'Arabic',
  },
  {
  name: 'MYANMAR',
  colors: ['#009C3B', '#CE1126', '#F8F405'],
  image: 'https://flagcdn.com/w320/mm.png',
  capital: 'Naypyidaw',
  currency: 'Kyat',
  language: 'Burmese',
  },
  {
  name: 'OMAN',
  colors: ['#CE1126', '#FFFFFF', '#009739'],
  image: 'https://flagcdn.com/w320/om.png',
  capital: 'Muscat',
  currency: 'Omani Rial',
  language: 'Arabic',
  },
  {
  name: 'PHILIPPINES',
  colors: ['#0033A0', '#FFD700', '#CE1126', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/ph.png',
  capital: 'Manila',
  currency: 'Philippine Peso',
  language: 'Filipino, English',
  },
  {
  name: 'POLAND',
  colors: ['#FFFFFF', '#CE1126'],
  image: 'https://flagcdn.com/w320/pl.png',
  capital: 'Warsaw',
  currency: 'Polish Zloty',
  language: 'Polish',
  },
  {
  name: 'PORTUGAL',
  colors: ['#007A33', '#CE1126', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/pt.png',
  capital: 'Lisbon',
  currency: 'Euro',
  language: 'Portuguese',
  },
  {
  name: 'PERU',
  colors: ['#DA291C', '#FFFFFF', '#004225'],
  image: 'https://flagcdn.com/w320/pe.png',
  capital: 'Lima',
  currency: 'Sol',
  language: 'Spanish',
  },
  {
  name: 'PAKISTAN',
  colors: ['#009966', '#FFFFFF', '#007A33'],
  image: 'https://flagcdn.com/w320/pk.png',
  capital: 'Islamabad',
  currency: 'Pakistani Rupee',
  language: 'Urdu, English',
  },
  {
  name: 'QATAR',
  colors: ['#D52B1E', '#F4F4F4', '#00693C'],
  image: 'https://flagcdn.com/w320/qa.png',
  capital: 'Doha',
  currency: 'Qatari Rial',
  language: 'Arabic',
  },
  {
  name: 'RUSSIA',
  colors: ['#0033A0', '#FFFFFF', '#CE1126'],
  image: 'https://flagcdn.com/w320/ru.png',
  capital: 'Moscow',
  currency: 'Russian Ruble',
  language: 'Russian',
  },
  {
  name: 'ROMANIA',
  colors: ['#0033A0', '#FFD700', '#CE1126'],
  image: 'https://flagcdn.com/w320/ro.png',
  capital: 'Bucharest',
  currency: 'Romanian Leu',
  language: 'Romanian',
  },
  {
  name: 'THAILAND',
  colors: ['#009C3B', '#D52B1E', '#FFFFFF'],
  image: 'https://flagcdn.com/w320/th.png',
  capital: 'Bangkok',
  currency: 'Thai Baht',
  language: 'Thai',
  },
  {
  name: 'TURKEY',
  colors: ['#D52B1E', '#FFFFFF', '#009C3B'],
  image: 'https://flagcdn.com/w320/tr.png',
  capital: 'Ankara',
  currency: 'Turkish Lira',
  language: 'Turkish',
  },
  {
  name: 'UNITED STATES',
  colors: ['#0033A0', '#FFFFFF', '#CE1126'],
  image: 'https://flagcdn.com/w320/us.png',
  capital: 'Washington, D.C.',
  currency: 'United States Dollar',
  language: 'English',
  },
  {
  name: 'UKRAINE',
  colors: ['#FFD700', '#005A9C', '#0038A8'],
  image: 'https://flagcdn.com/w320/ua.png',
  capital: 'Kyiv',
  currency: 'Hryvnia',
  language: 'Ukrainian',
  },
  {
  name: 'VIETNAM',
  colors: ['#CE1126', '#FFD700', '#009B3A'],
  image: 'https://flagcdn.com/w320/vn.png',
  capital: 'Hanoi',
  currency: 'Vietnamese Dong',
  language: 'Vietnamese',
  },
  {
  name: 'WESTERN SAMOA',
  colors: ['#CE1126', '#00205B'],
  image: 'https://flagcdn.com/w320/ws.png',
  capital: 'Apia',
  currency: 'Samoan Tala',
  language: 'Samoan',
  },
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

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./../../assets/images/logo.png')} style={styles.image} />
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
      <ScrollView contentContainerStyle={styles.colorsContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorOption, { backgroundColor: color }]}
            onPress={() => handleColorClick(color)}
          />
        ))}
      </ScrollView>

      {/* Generate Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.generateButton} onPress={handleGenerateFlags}>
          <Text style={styles.generateButtonText}>Generate Flags</Text>
        </TouchableOpacity>
      </View>

      {/* Filtered Flags Section */}
      <ScrollView contentContainerStyle={styles.flagsContainer}>
        {filteredFlags.map((flag, index) => (
          <TouchableOpacity
            key={index}
            style={styles.flagItem}
            onPress={() => setSelectedFlag(flag)}
          >
            <Image source={{ uri: flag.image }} style={styles.flagImage} />
            <Text style={styles.flagName}>{flag.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Flag Details Modal */}
      {selectedFlag && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={!!selectedFlag}
          onRequestClose={() => setSelectedFlag(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedFlag.image }} style={styles.modalFlagImage} />
              <Text style={styles.modalFlagName}>{selectedFlag.name}</Text>
              <Text style={styles.modalText}>Capital: {selectedFlag.capital}</Text>
              <Text style={styles.modalText}>Currency: {selectedFlag.currency}</Text>
              <Text style={styles.modalText}>Language: {selectedFlag.language}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedFlag(null)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  logoContainer: {
    marginLeft: 300,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  chosenColorsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  chosenColorsTitle: {
    fontSize: 18,
    color: 'black',
  },
  chosenColors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginLeft: 10,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 5,
  },
  refreshButton: {
    padding: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  generateButton: {
    backgroundColor: '#004C75',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '80%',
  },
  generateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 5,
  },
  flagItem: {
    width: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  flagImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  flagName: {
    fontSize: 14,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalFlagImage: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  modalFlagName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#004C75',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ExplorePage;