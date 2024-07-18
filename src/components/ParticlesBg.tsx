import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const ParticlesBg = (props?: unknown) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [init, setInit] = useState(false)
   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine)
      }).then(() => {
         setInit(true)
      })
   }, [])
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   //@ts-ignore
   const particlesLoaded = (container) => {
      console.log(container)
   }

   const options = useMemo(
      () => ({
         background: {
            color: {
               value: 'transparent'
            }
         },
         fpsLimit: 120,
         interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: 'repulse'
               },
               onHover: {
                  enable: true,
                  mode: 'grab'
               }
            },
            modes: {
               push: {
                  distance: 200,
                  duration: 15
               },
               grab: {
                  distance: 150
               }
            }
         },
         particles: {
            color: {
               value: '#0098D1'
            },
            links: {
               color: '#0098D1',
               distance: 150,
               enable: true,
               opacity: 0.3,
               width: 2
            },
            move: {
               direction: 'none',
               enable: true,
               outModes: {
                  default: 'bounce'
               },
               random: true,
               speed: 1,
               straight: false
            },
            number: {
               density: {
                  enable: true
               },
               value: 150
            },
            opacity: {
               value: 1.0
            },
            shape: {
               type: 'circle'
            },
            size: {
               value: { min: 2, max: 3 }
            }
         },
         detectRetina: true
      }),
      []
   )
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   //@ts-ignore
   return <Particles id={props.id} init={particlesLoaded} options={options} />
}

export default ParticlesBg
