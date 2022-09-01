import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
        "Bearer AAstnfev6aW6GLhznwD_M1rcDS1tYl3WLCEbZsgDNqMajAYvTFPjOBEa8Am6rM99vI_q-CBHEpBftB1Q1JlnaQtxbgvg1x0-o4I-YS9rwzZ8SrdkKxRgIO2HbWAKYXYx",
    },
});