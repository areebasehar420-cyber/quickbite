import React, { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    let raf;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref__={ringRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "40px",
          height: "40px",
          marginLeft: "-20px",
          marginTop: "-20px",
          borderRadius: "50%",
          border: "2px solid #f97316",
          background: "radial-gradient(circle, rgba(251,146,60,0.3) 0%, transparent 70%)",
          boxShadow: "0 0 25px rgba(251,146,60,0.6)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        ref__={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "12px",
          height: "12px",
          marginLeft: "-6px",
          marginTop: "-6px",
          borderRadius: "50%",
          background: "#f97316",
          boxShadow: "0 0 12px rgba(249,115,22,1)",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />
    </>
  );
}