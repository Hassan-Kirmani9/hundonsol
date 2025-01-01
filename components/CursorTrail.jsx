import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const createTrail = () => {
      let dots = [];
      const colors = ["#ffb56b", "#fdaf69", "#f89d63"];
      
      for (let i = 0; i < 12; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot fixed w-3 h-3 rounded-full pointer-events-none';
        dot.style.background = colors[i % colors.length];
        dot.style.zIndex = 9999;
        document.body.appendChild(dot);
        dots.push(dot);
      }

      let mouseX = 0;
      let mouseY = 0;
      let prevMouseX = 0;
      let prevMouseY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function animate() {
        let x = mouseX;
        let y = mouseY;

        dots.forEach((dot, index) => {
          const scale = 1 - (index * 0.05);
          dot.style.transform = `translate(${x - 6}px, ${y - 6}px) scale(${scale})`;
          
          let nextX = prevMouseX + (x - prevMouseX) * 0.5;
          let nextY = prevMouseY + (y - prevMouseY) * 0.5;
          
          x = nextX;
          y = nextY;
        });

        prevMouseX = mouseX;
        prevMouseY = mouseY;
        
        requestAnimationFrame(animate);
      }

      animate();
    };

    if (typeof window !== 'undefined') {
      createTrail();
    }

    // Cleanup
    return () => {
      const dots = document.querySelectorAll('.cursor-dot');
      dots.forEach(dot => dot.remove());
    };
  }, []);

  if (!isClient) return null;

  return null;
};

export default CursorTrail;