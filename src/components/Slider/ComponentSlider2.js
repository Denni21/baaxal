import React from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';

export default function ComponentSlider2(){
  const images = [
    {
     image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
     desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
   {
     image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
     desc:
       'Red fort in India New Delhi is a magnificient masterpeiece of humans',
   },
   {
     image: 'https://images.unsplash.com/photo-1614102073832-030967418971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
     desc:'nueva imagen'
   }

   ]
   
return(
   <FlatListSlider 
     data={images} 
   /> 
  );
};


