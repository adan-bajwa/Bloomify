export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { petal:"#FFF8FB", cobalt:"#1F3A9E", ink:"#14205E", blush:"#F7A6BE", sun:"#FFD43B", orchid:"#8E44B8", rose:"#B9706F", leaf:"#5B8C5A" },
    fontFamily: { display:['"Bricolage Grotesque"',"sans-serif"], body:["Nunito","sans-serif"] },
    keyframes: {
      float:{ "0%,100%":{transform:"translateY(0) rotate(var(--r,0deg))"}, "50%":{transform:"translateY(-18px) rotate(calc(var(--r,0deg) + 3deg))"} },
      fall:{ "0%":{transform:"translateY(-10vh) rotate(0)",opacity:0}, "10%":{opacity:.9}, "100%":{transform:"translateY(110vh) rotate(360deg)",opacity:0} },
      marquee:{ to:{transform:"translateX(-50%)"} },
      shift:{ "0%,100%":{backgroundPosition:"0% 50%"}, "50%":{backgroundPosition:"100% 50%"} }
    },
    animation: { float:"float 6s ease-in-out infinite", fall:"fall linear infinite", marquee:"marquee 28s linear infinite", shift:"shift 8s ease infinite" }
  } },
  plugins: []
};
