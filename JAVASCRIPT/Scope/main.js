const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves); // Northern Lights
    }
    console.log(lightWaves); // Moonlight

    // A better practice would be to RENAME the variable inside the block
};

logVisibleLightWaves();