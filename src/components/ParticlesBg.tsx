import Particles from '@tsparticles/react'
import { useMemo } from 'react'

const ParticlesComponent = () => {
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
               width: 1
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
               value: { min: 1, max: 3 }
            }
         },
         detectRetina: true
      }),
      []
   )
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   return <Particles options={options} />
}

export default ParticlesComponent
