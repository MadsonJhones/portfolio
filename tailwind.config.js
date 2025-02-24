/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Define onde o Tailwind procura classes
  darkMode: "class", // Habilita o modo dark com a classe "dark"
  theme: {
    extend: {
      colors: {
        darkBase: "#0A001A",      // Azul escuro profundo (modo dark)
        lightBase: "#1A0033",     // Roxo escuro vibrante (modo light)
        neuronCyan: "#00CCFF",    // Azul elétrico suave para corpo celular
        neuronYellow: "#FFFF00",  // Amarelo puro para corpo celular
        neuronMagenta: "#FF00FF", // Magenta vibrante para corpo celular
        dendriteGreen: "#00FFAA", // Verde ciano para dendritos
        dendritePurple: "#AA00FF",// Roxo forte para dendritos
        dendriteGold: "#FFD700",  // Ouro brilhante para dendritos
        axonCyan: "#00CCFF",      // Azul elétrico suave para axônio
        axonGreen: "#39FF14",     // Verde neon para axônio
        axonYellow: "#FFAA00",    // Amarelo laranja para axônio/hover
        signalGold: "#FFD700",    // Ouro brilhante para sinais
        signalGreen: "#00FFAA",   // Verde ciano para sinais
        signalWhite: "#FFFFFF",   // Branco puro para sinais e texto
        semiTransparentLight: "rgba(255, 255, 255, 0.1)", // Fundo semitransparente light
        semiTransparentDark: "rgba(0, 0, 0, 0.1)",       // Fundo semitransparente dark
        transparent: "rgba(0, 0, 0, 0.0)",
      },
    },
  },
  plugins: [],
};