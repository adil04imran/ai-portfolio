import { useEffect } from "react";
import Particles from "particles.js";

export default function ParticlesBackground() {
  useEffect(() => {
    window.particlesJS.load("particles-js", "/particles-config.json");
  }, []);

  return <div id="particles-js" className="absolute top-0 left-0 w-full h-full -z-10"></div>;
}