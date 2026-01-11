// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi69634882b57e31106bcbb950-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
