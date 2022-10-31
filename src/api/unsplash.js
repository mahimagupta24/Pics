import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
     headers: {
        Authorization: "Client-ID WVquBD7dsHVC-xKPVrb5zYuidyFSH0VlEV9UXcgdOiA",
      },
})
