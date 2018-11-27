const api = 'http://127.0.0.1:8000/api' // 'https://vaccine-card.herokuapp.com/api'

const generateApi = (url) => `${api}/${url}`

export default generateApi
