const Colors = (_) => {
    _.hexToRgb = (hex) => {
        // Convert HEX to RGB
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
    
        return [r, g, b];
    }

    _.rgbToHex = (r, g, b) => {
        // Convert RGB to HEX
        return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    _.mixColors = (hex1, hex2) => {
        hex1 = hex1.split("0x")[1]
        hex2 = hex2.split("0x")[1]
        // Extract RGB components
        var rgb1 = _.hexToRgb(hex1);
        var rgb2 = _.hexToRgb(hex2);
    
        // Calculate average of each component
        var mixedR = Math.round((rgb1[0] + rgb2[0]) / 2);
        var mixedG = Math.round((rgb1[1] + rgb2[1]) / 2);
        var mixedB = Math.round((rgb1[2] + rgb2[2]) / 2);
    
        // Convert back to HEX
        return _.rgbToHex(mixedR, mixedG, mixedB);
    }

    return _
}

(() => {
    var color1 = "0xff0000"; // Red
    var color2 = "0x0000ff"; // Blue
    var mixedColor = Colors({}).mixColors(color1, color2);
    console.log(mixedColor)
})()