.pragma library

// Texts of this panel: written in Portuguese, English for every other locale.
var english = Qt.locale().name.indexOf("pt") !== 0
var en = {
 "Sol a pino": "Sun blast",
 "Clarão": "Solar flare",
 "Hora dourada": "Golden hour",
 "Dia claro": "Even day",
 "Luz suave": "Soft glow",
 "Luz de abajur": "Lamp light",
 "Luz de vela": "Candlelit",
 "Coruja": "Night owl",
 "Tela": "Display",
 "BRILHO FIXO": "FIXED BRIGHTNESS",
 "BRILHO": "BRIGHTNESS",
 "TAMANHO DO TEXTO": "TEXT SIZE",
 "ESCALA": "SCALE",
 "MONITORES": "DISPLAYS",
 " · em foco": " · focused",
 "Luz noturna": "Night light",
 "Tons quentes para descansar a vista": "Warmer colors to rest your eyes",
 "LIGADA": "ON",
 "DESLIGADA": "OFF",
 "Tons quentes na tela para descansar a vista.": "Warm tones on screen to rest your eyes.",
 "Cores normais na tela.": "Normal colours on screen."
}

function T(s) { return english && en[s] !== undefined ? en[s] : s }
