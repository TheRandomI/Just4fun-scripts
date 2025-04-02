function rgb_editor() {
r = Math.floor(Math.random() * 255)
g = Math.floor(Math.random() * 255)
b = Math.floor(Math.random() * 255)
}

function random_color_pallet_generator() {
rgb_editor()

// Red generator
    while (g > r * 0.3 || b > r * 0.3) {
        rgb_editor()
    }
style = 'color: rgb(' + r +', ' + g +', '  + b + ');'
console.log("%cRandom Red Color:\n▉▉▉\n▉▉▉\n▉▉▉\n" + style, style)
rgb_editor()
    
// Orange generator
    while (r < g || g < b || r * 0.65 < g || r * 0.5 > g || g * 0.05 < b || r < 200) {
        rgb_editor()
        }
style = 'color: rgb(' + r +', ' + g +', '  + b + ');'
console.log("%cRandom Orange Color:\n▉▉▉\n▉▉▉\n▉▉▉\n" + style, style)
rgb_editor()

// Yellow generator
    while (r < b || g < b || r * 0.05 < b || g * 0.05 < b || r < 200 || g < 200) {
        rgb_editor()
        }
style = 'color: rgb(' + r +', ' + g +', '  + b + ');'
console.log("%cRandom Yellow Color:\n▉▉▉\n▉▉▉\n▉▉▉\n" + style, style)
rgb_editor()

// Green generator
    while (r > g * 0.3 || b > g * 0.3) {
        rgb_editor()
    }
style = 'color: rgb(' + r +', ' + g +', '  + b + ');'
console.log("%cRandom Green Color:\n▉▉▉\n▉▉▉\n▉▉▉\n" + style, style)
rgb_editor()

// Blue generator
    while (r > b * 0.3 || g > b * 0.3) {
        rgb_editor()
    }
style = 'color: rgb(' + r +', ' + g +', '  + b + ');'
console.log("%cRandom Blue Color:\n▉▉▉\n▉▉▉\n▉▉▉\n" + style, style)
rgb_editor()

// Indigo generator
    while (r < g || b < g || b < r || r * 0.5 < g || b * 0.05 < g || r < 70 || b * 0.58 < r || g > 30 || b < 100) {
        rgb_editor()
        }
style = 'color: rgb(' + r +', ' + g +', '  + b + ');'
console.log("%cRandom Indigo Color:\n▉▉▉\n▉▉▉\n▉▉▉\n" + style, style)
rgb_editor()

// Purple generator
    while (r < g || b < g || r * 0.05 < g || b * 0.05 < g || r < 100 || g > 30 || b < 100 || r > 150  || b > 150 ) {
        rgb_editor()
        }
style = 'color: rgb(' + r +', ' + g +', '  + b + ');'
console.log("%cRandom Purple Color:\n▉▉▉\n▉▉▉\n▉▉▉\n" + style, style)
rgb_editor()
    
}

random_color_pallet_generator()

