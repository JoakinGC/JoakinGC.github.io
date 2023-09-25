const w  = window;

export default function particulesAnimated(id){
    particlesJS(
        {
            "particles": {
              "number": {
                "value": 118,
                "density": {
                  "enable": true,
                  "value_area": 864.6167389800671
                }
              },
              "color": {
                "value": "#000000"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 3,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 4
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0b0000",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }
    );

    const $p = document.getElementById(id);

    w.addEventListener("scroll",e =>{
      let scrollTop = w.pageYOffset || d.documentElement.scrollTop;


        if(scrollTop > 500){
            $p.classList.remove("position-fixed");
            $p.classList.add("hide");
        }else{
            $p.classList.add("position-fixed");
            $p.classList.remove("hide");
        }

       
    });
}