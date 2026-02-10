// =============================================================================
// GEOTHERMAL AR - SCENE CONFIGURATION (WITH CAMERA ZOOM ANIMATION)
// =============================================================================
// ✅ Model flat horizontal di marker
// ✅ Animasi zoom camera ke setiap scene
// ✅ Animasi turbine tetap aktif
// =============================================================================

window.SCENE_CONFIG = [
    // SCENE 1: INTRO - Overview dengan zoom out
    {
        id: 1,
        title: "Selamat Datang",
        subtitle: "Pembangkit Listrik Tenaga Panas Bumi",
        audio: "audio/Intro.mp3",
        description: "Selamat datang di Geothermal AR! Mari kita eksplorasi bagaimana energi panas bumi diubah menjadi listrik ramah lingkungan.",
        camera: {
            position: "0 0.5 1.5",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 2: EARTH LAYERS - Zoom ke bawah untuk lihat layers
    {
        id: 2,
        title: "Lapisan Bumi",
        subtitle: "Sumber Panas dari Perut Bumi",
        audio: "audio/Earth_Layer.mp3",
        description: "Di kedalaman 2-3 km terdapat reservoir panas bumi dengan suhu mencapai 350°C. Panas ini berasal dari inti bumi yang suhunya mencapai 5000°C!",
        camera: {
            position: "0.3 0.3 1",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 45, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 3: PRODUCTION WELL - Zoom ke kiri
    {
        id: 3,
        title: "Production Well",
        subtitle: "Sumur Produksi Uap Panas",
        audio: "audio/Production_Well.mp3",
        description: "Production Well di sisi kiri mengebor hingga 2-3 km ke dalam bumi untuk mengambil uap panas bersuhu 150-350°C. Uap ini naik ke permukaan untuk menggerakkan turbin.",
        camera: {
            position: "-0.4 0.4 0.8",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: -90, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 4: SEPARATOR - Zoom ke separator
    {
        id: 4,
        title: "Separator",
        subtitle: "Pemisah Uap dan Air",
        audio: "audio/Separator.mp3",
        description: "Separator memisahkan uap panas dari air. Uap bersih dialirkan ke turbin, sedangkan air dikembalikan ke reservoir untuk menjaga tekanan.",
        camera: {
            position: "-0.2 0.35 0.9",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: -45, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 5: TURBINE & GENERATOR - Zoom close ke turbine
    {
        id: 5,
        title: "Turbin & Generator",
        subtitle: "Konversi Energi Panas ke Listrik",
        audio: "audio/Turbine.mp3",
        description: "Uap panas menggerakkan turbin dengan kecepatan tinggi. Turbin terhubung dengan generator yang mengubah energi kinetik menjadi energi listrik hingga 100 MW!",
        camera: {
            position: "0 0.4 0.7",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.05, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: {
                    type: "rotation",
                    axis: "z",
                    speed: 2.0
                }
            }
        ]
    },

    // SCENE 6: GENERATOR - Zoom ke generator
    {
        id: 6,
        title: "Generator",
        subtitle: "Penghasil Energi Listrik",
        audio: "audio/Generator.mp3",
        description: "Generator mengubah energi kinetik dari turbin menjadi energi listrik. Satu generator dapat menghasilkan 20-100 megawatt listrik untuk ribuan rumah!",
        camera: {
            position: "0.2 0.35 0.9",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 30, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 7: COOLING TOWER - Zoom ke belakang
    {
        id: 7,
        title: "Cooling Tower",
        subtitle: "Sistem Pendingin Uap",
        audio: "audio/Cooling_Tower.mp3",
        description: "Cooling tower mendinginkan uap panas setelah melewati turbin. Uap dikondensasi menjadi air untuk dikembalikan ke reservoir melalui injection well.",
        camera: {
            position: "0 0.5 -0.8",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 180, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 8: INJECTION WELL - Zoom ke kanan
    {
        id: 8,
        title: "Injection Well",
        subtitle: "Sumur Injeksi Air Kembali",
        audio: "audio/Injection_Well.mp3",
        description: "Injection Well di sisi kanan mengembalikan air ke reservoir bumi. Sistem tertutup ini menjaga tekanan reservoir dan memastikan energi panas bumi tetap berkelanjutan.",
        camera: {
            position: "0.4 0.4 0.8",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 90, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 9: RESERVOIR LAYER - Zoom ke reservoir di bawah
    {
        id: 9,
        title: "Reservoir Panas Bumi",
        subtitle: "Lapisan Penyimpan Air Panas",
        audio: "audio/Reservoir_Layer.mp3",
        description: "Reservoir panas bumi berada di kedalaman 2-3 km. Air yang tersimpan di batuan berpori dipanaskan oleh magma hingga mencapai suhu 150-350°C.",
        camera: {
            position: "-0.3 0.3 1",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: -135, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 10: STEAM FLOW - Zoom ke pipa steam
    {
        id: 10,
        title: "Aliran Uap Permukaan",
        subtitle: "Distribusi Uap ke Turbin",
        audio: "audio/Steam_Flow_in_Surface.mp3",
        description: "Sistem pipa distribusi mengalirkan uap panas dari production well ke turbin. Tekanan uap dijaga agar turbin dapat berputar optimal.",
        camera: {
            position: "0.3 0.35 0.9",
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 135, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            }
        ]
    },

    // SCENE 11: FULL CYCLE - Zoom out untuk lihat keseluruhan
    {
        id: 11,
        title: "Siklus Lengkap",
        subtitle: "Energi Bersih & Berkelanjutan",
        audio: "audio/Outro.mp3",
        description: "Pembangkit panas bumi adalah energi terbarukan yang bersih, tersedia 24/7, dan tidak bergantung cuaca. Indonesia memiliki 40% potensi panas bumi dunia!",
        camera: {
            position: "0 0.6 1.8",
            duration: 2500
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0, y: 0.05, z: 0 },
                rotation: { x: -90, y: 0, z: 0 },
                scale: { x: 0.1, y: 0.1, z: 0.1 },
                animation: {
                    type: "rotation",
                    axis: "z",
                    speed: 1.5
                }
            }
        ]
    }
];

// HELPERS
window.getSceneById = function (id) {
    return window.SCENE_CONFIG.find(scene => scene.id === id) || null;
};

window.getTotalScenes = function () {
    return window.SCENE_CONFIG.length;
};

console.log('✅ Scene config loaded:', window.SCENE_CONFIG.length, 'scenes');
console.log('🎯 Scale: 0.1');
console.log('📍 Posisi: (0, 0, 0) - Tepat di tengah marker');
console.log('🔄 Rotasi X: -90° (horizontal)');
console.log('📷 Camera zoom: AKTIF di semua scene');
console.log('🌀 Animasi turbine: AKTIF');