// =============================================================================
// GEOTHERMAL AR - SCENE CONFIGURATION (FIXED CAMERA & TURBINE)
// =============================================================================
// ✅ Camera zoom benar-benar berfungsi
// ✅ Zoom fokus ke komponen spesifik setiap scene
// ✅ Kipas turbine di dalam cover hijau dan berputar horizontal
// =============================================================================

window.SCENE_CONFIG = [
    // SCENE 1: INTRO - Overview keseluruhan dari depan
    {
        id: 1,
        title: "Selamat Datang",
        subtitle: "Pembangkit Listrik Tenaga Panas Bumi",
        audio: "audio/Intro.mp3",
        description: "Selamat datang di Geothermal AR! Mari kita eksplorasi bagaimana energi panas bumi diubah menjadi listrik ramah lingkungan.",
        camera: {
            position: { x: 0, y: 0.4, z: 1.2 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 2: EARTH LAYERS - Zoom KE BAWAH untuk lihat lapisan bumi
    {
        id: 2,
        title: "Lapisan Bumi",
        subtitle: "Sumber Panas dari Perut Bumi",
        audio: "audio/Earth_Layer.mp3",
        description: "Di kedalaman 2-3 km terdapat reservoir panas bumi dengan suhu mencapai 350°C. Panas ini berasal dari inti bumi yang suhunya mencapai 5000°C!",
        camera: {
            position: { x: 0.15, y: -0.05, z: 0.5 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 45, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 3: PRODUCTION WELL - Zoom CLOSE ke sumur produksi (KIRI BAWAH)
    {
        id: 3,
        title: "Production Well",
        subtitle: "Sumur Produksi Uap Panas",
        audio: "audio/Production_Well.mp3",
        description: "Production Well di sisi kiri mengebor hingga 2-3 km ke dalam bumi untuk mengambil uap panas bersuhu 150-350°C. Uap ini naik ke permukaan untuk menggerakkan turbin.",
        camera: {
            position: { x: -0.4, y: 0.05, z: 0.4 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: -90, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 4: SEPARATOR - Zoom ke SEPARATOR (TENGAH KIRI)
    {
        id: 4,
        title: "Separator",
        subtitle: "Pemisah Uap dan Air",
        audio: "audio/Separator.mp3",
        description: "Separator memisahkan uap panas dari air. Uap bersih dialirkan ke turbin, sedangkan air dikembalikan ke reservoir untuk menjaga tekanan.",
        camera: {
            position: { x: -0.25, y: 0.2, z: 0.45 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: -45, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 5: TURBINE & GENERATOR - Zoom SANGAT CLOSE ke TURBINE HIJAU
    {
        id: 5,
        title: "Turbin & Generator",
        subtitle: "Konversi Energi Panas ke Listrik",
        audio: "audio/Turbine.mp3",
        description: "Uap panas menggerakkan turbin dengan kecepatan tinggi. Turbin terhubung dengan generator yang mengubah energi kinetik menjadi energi listrik hingga 100 MW!",
        camera: {
            position: { x: 0.05, y: 0.35, z: 0.3 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0.02, y: 0.35, z: 0 },
                rotation: { x: 0, y: 0, z: 90 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: {
                    type: "rotation",
                    axis: "z",
                    speed: 2.0
                }
            }
        ]
    },

    // SCENE 6: GENERATOR - Zoom ke GENERATOR (TENGAH KANAN ATAS)
    {
        id: 6,
        title: "Generator",
        subtitle: "Penghasil Energi Listrik",
        audio: "audio/Generator.mp3",
        description: "Generator mengubah energi kinetik dari turbin menjadi energi listrik. Satu generator dapat menghasilkan 20-100 megawatt listrik untuk ribuan rumah!",
        camera: {
            position: { x: 0.15, y: 0.3, z: 0.45 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 30, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 7: COOLING TOWER - Zoom ke COOLING TOWER (ATAS BELAKANG)
    {
        id: 7,
        title: "Cooling Tower",
        subtitle: "Sistem Pendingin Uap",
        audio: "audio/Cooling_Tower.mp3",
        description: "Cooling tower mendinginkan uap panas setelah melewati turbin. Uap dikondensasi menjadi air untuk dikembalikan ke reservoir melalui injection well.",
        camera: {
            position: { x: 0, y: 0.5, z: 0.4 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 180, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 8: INJECTION WELL - Zoom ke INJECTION WELL (KANAN BAWAH)
    {
        id: 8,
        title: "Injection Well",
        subtitle: "Sumur Injeksi Air Kembali",
        audio: "audio/Injection_Well.mp3",
        description: "Injection Well di sisi kanan mengembalikan air ke reservoir bumi. Sistem tertutup ini menjaga tekanan reservoir dan memastikan energi panas bumi tetap berkelanjutan.",
        camera: {
            position: { x: 0.4, y: 0.05, z: 0.4 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 90, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 9: RESERVOIR LAYER - Zoom SANGAT BAWAH ke RESERVOIR
    {
        id: 9,
        title: "Reservoir Panas Bumi",
        subtitle: "Lapisan Penyimpan Air Panas",
        audio: "audio/Reservoir_Layer.mp3",
        description: "Reservoir panas bumi berada di kedalaman 2-3 km. Air yang tersimpan di batuan berpori dipanaskan oleh magma hingga mencapai suhu 150-350°C.",
        camera: {
            position: { x: -0.2, y: -0.1, z: 0.5 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: -135, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 10: STEAM FLOW - Zoom ke PIPA UAP (TENGAH)
    {
        id: 10,
        title: "Aliran Uap Permukaan",
        subtitle: "Distribusi Uap ke Turbin",
        audio: "audio/Steam_Flow_in_Surface.mp3",
        description: "Sistem pipa distribusi mengalirkan uap panas dari production well ke turbin. Tekanan uap dijaga agar turbin dapat berputar optimal.",
        camera: {
            position: { x: 0.2, y: 0.25, z: 0.45 },
            duration: 2000
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 135, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            }
        ]
    },

    // SCENE 11: FULL CYCLE - Zoom OUT untuk lihat SEMUA SISTEM
    {
        id: 11,
        title: "Siklus Lengkap",
        subtitle: "Energi Bersih & Berkelanjutan",
        audio: "audio/Outro.mp3",
        description: "Pembangkit panas bumi adalah energi terbarukan yang bersih, tersedia 24/7, dan tidak bergantung cuaca. Indonesia memiliki 40% potensi panas bumi dunia!",
        camera: {
            position: { x: 0, y: 0.5, z: 1.5 },
            duration: 2500
        },
        components: [
            {
                name: "full-geothermal-plant",
                path: "assets/FullVersion.glb",
                position: { x: 0, y: 0.15, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
                animation: null
            },
            {
                name: "turbine-fan-animated",
                path: "assets/Turbine_Fan.glb",
                position: { x: 0.02, y: 0.35, z: 0 },
                rotation: { x: 0, y: 0, z: 90 },
                scale: { x: 0.18, y: 0.18, z: 0.18 },
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
console.log('📷 Camera: Object format {x, y, z}');
console.log('🌀 Turbine: Rotasi Z=90 (horizontal) dan berputar di axis Z (seperti ban mobil)');
console.log('🔍 Zoom: Fokus ke setiap komponen spesifik');