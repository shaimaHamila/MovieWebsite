import axios from "axios";

// Public API client
export const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
});