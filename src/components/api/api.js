const axios = require('axios').default;
axios.defaults.withCredentials = true;
const api = (baseURL = 'http://34.89.93.186:8080/apiv1') => {
    const registerApiEndpoint = `${baseURL}/register`;
    const loginApiEndpoint = `${baseURL}/login`;
    const getAdsApiEndpoint = `${baseURL}/anuncios`;
    const getTagsApiEndpoint = `${baseURL}/tags`;
    return {
        registerUser: async data => {
            try {
                const response = await axios({
                    method: 'post',
                    url: registerApiEndpoint,
                    withCredentials: true,
                    data: {
                        username: data.username,
                        password: data.password
                    }
                })
                if (response.data){
                    return response.data;
                }
                return response;    
            } catch (error) {
                return error;
            }
        },
        loginUser: async data => {
            try {
                const response = await axios({
                    method:'post',
                    url: loginApiEndpoint,
                    withCredentials: true,
                    data: {
                        username: data.username,
                        password: data.password
                    }
                })
                if(response.data){
                    return response.data;
                }
                return response; 
            } catch (error) {
                return error;
            }
        },
        getAds: async () => {
            try {
                const response = await axios({
                    method:'get',
                    url: getAdsApiEndpoint,
                    withCredentials: true
                })
                if (response.data.results){
                    return response.data.results;
                }
                return response;
            } catch (error) {
                return error;
            }
        },
        getAdDetail: async (id) => {
            try {
                const response = await axios({
                    method:'get',
                    withCredentials: true,
                    url: `${getAdsApiEndpoint}/${id}`
                })
                if (response.data.result){
                    return response.data.result;
                }
                return response;
            } catch (error) {
                return error;
            }
        },
        updateAd: async (id, data) => {
            try {
                const response = await axios({
                    method: 'put',
                    withCredentials: true,
                    url: `${getAdsApiEndpoint}/${id}`,
                    data: {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                    }
                })
            } catch (error) {
                return error;
            }
        },
        filterAdByTag : async (tag) => {
            try {
                const response = await axios({
                    method: 'get',
                    withCredentials: true,
                    url: `${getAdsApiEndpoint}?tag=${tag}`
                })
                if (response.data.results){
                    return response.data.results;
                }
                return response;
            } catch (error) {
                return error;
            }
        },
        createAd: async (data) => {
            try {
                const response = await axios({
                    method: 'post',
                    withCredentials: true,
                    url: `${getAdsApiEndpoint}`,
                    data:{
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        tags: data.tag,
                        type: data.type,
                        photo: data.photo
                        //photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kranh%C3%A4user_Cologne%2C_April_2018_-01.jpg/1280px-Kranh%C3%A4user_Cologne%2C_April_2018_-01.jpg'
                    }
                })
                if (response.data){
                    return response.data;
                }
                return response;
            } catch (error) {
                return error;
            }
        },
        filterAdByName : async (name) => {
            const response = await axios({
                method: 'get',
                withCredentials: true,
                url:`${getAdsApiEndpoint}?name=${name}`
            })
            if (response.data.results){
                return response.data.results
            }
            return response;
        },
        getTags: async () => {
            try {
                const response = await axios({
                    method:'get',
                    withCredentials: true,
                    url: getTagsApiEndpoint
                })
                if (response.data.results){
                    return response.data.results;
                }
                return response;
            } catch (error) {
                return error;
            }
        }
    }
}

export default api;